import { useNavigate } from "react-router";


export default function PostCard({ post }) {

    let content = post.content || "";

    const navigate = useNavigate();

    content = content.split(" ").slice(0, 15).join(" ") + "...";

    return (
        <div className="post-card">
            <div className="card text-start">
                <img onClick={() => navigate("/bai-viet")} className="card-img-top" src={post.img && "./src/posts/" + post.img || "./src/posts/default.jpg"} alt={post && post.title || "Hình ảnh bài viết"} />
                <div className="card-body">

                    <h4 onClick={() => navigate("/bai-viet")} className="card-title">{post && post.title || "Tiêu đề bài viết"}</h4>
                    <span><b>Ngày đăng: </b><i>{post && post.created_at || "12/12/2012"}</i></span>

                    <p className="card-text">{content || "Nội dung bài viết"}</p>
                    <hr />

                    <div className="row">
                        <div className="col-9">
                            <span><b>Lượt thích: </b><i>{post && post.likes || "0"}</i></span>
                            <br />
                            <span><b>Lượt xem: </b><i>{post && post.views || "0"}</i></span>
                        </div>
                        <div className="col-3">
                            <span className={(post && post.isLike ? "text-danger" : "") + " fs-1"}>&hearts;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}