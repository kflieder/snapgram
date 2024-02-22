import { Models } from "appwrite";
import { Link } from "react-router-dom"

type PostCardProps = {
    post: Models.Document;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap-3">
                <Link to={'/'}>
                    <img
                        src={ '/icons/profile-placeholder.svg'}
                        alt="creator"
                        className="rounded-full w-12 lg:h-12" 
                        />
                    </Link>
                    <div className="flex flex-col">
                        <p className="base-medium lg:body-bold text-light-1">
                            @KFlieder
                        </p>
                    </div>
            </div>
       </div>
   </div>
  )
}

export default PostCard