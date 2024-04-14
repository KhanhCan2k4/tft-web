import AdminPostIndex from "../../components/AdminPostIndex";
import AdminLayout from "../../layouts/AdminLayout";

function AdminPosts() {

    const posts = [
        {
            id: 1,
            name: "Bài viết 1",
            content: "mango thích ăn xoài",
            views: 100,
            likes: 99,
            created_at: "09/04/2024",
            updated_at: "09/04/2024",
            avatar: "./src/user/user-1.png",
            author: "nhi"

        },
        {
            id: 2,
            name: "Bài viết 2",
            content: "mango thích ăn xoài",
            views: 200,
            likes: 999,
            created_at: "09/04/2024",
            updated_at: "09/04/2024",
            avatar: "./src/user/user-1.png",
            author: "khanh"

        }
    ]

    return (
        <AdminLayout slot={
            (
                <>
                    <div className="container">
                        <AdminPostIndex posts={posts} />
                        {/* <h1>Nhi</h1> */}
                    </div>
                </>
            )
        }>
        </AdminLayout>
    )
}

export default AdminPosts;