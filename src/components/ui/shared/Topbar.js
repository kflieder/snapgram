import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';
const Topbar = () => {
    const navigate = useNavigate();
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const { user } = useUserContext();
    useEffect(() => {
        if (isSuccess)
            navigate(0);
    }, [isSuccess]);
    return (_jsx("section", { className: 'topbar', children: _jsxs("div", { className: 'flex-between py-4 px-5', children: [_jsx(Link, { to: "/", className: 'flex gap-3 items-center', children: _jsx("img", { src: "/assets/images/logo.svg", alt: "logo", width: 130, height: 325 }) }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { variant: "ghost", className: "shad-button_ghost", onClick: () => signOut(), children: _jsx("img", { src: '/icons/logout.svg', alt: "logout" }) }), _jsx(Link, { to: '/profile/${user.id}', className: "flex-center gap-3", children: _jsx("img", { src: user.imageUrl || '/assets/images/profile-placeholder.svg', alt: "profile", className: "h-8 rounded-full" }) })] })] }) }));
};
export default Topbar;
