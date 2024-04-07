import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router";


export default function SmallPostCard({ post }) {

    const navigate = useNavigate();

    return (
        <div className="card small-post-card p-1">
            <img
                src={post.image && "./src/posts/" + post.image || "./src/posts/default.jpg"}
                alt="green iguana"
            />
            <h4 onClick={() => navigate("/bai-viet")} className="text-center m-3 text-teal post-content">
                {post.title}
            </h4>
        </div>
    )
}