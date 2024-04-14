
function AdminPostIndex({ posts }) {
    return (
        <>
            <h1>Quản lý bài viết</h1>

            <div className="row">
                <div className="col">
                    <a className="btn btn-outline-success my-3" href="http://127.0.0.1:8000/admin/products/create">Thêm bài viết mới</a>
                </div>
                <div className="col text-end">
                    <a className="btn btn-outline-teal my-3 mx-2" href="http://127.0.0.1:8000/admin/products/create">Xem danh sách</a>
                    <a className="btn btn-outline-teal my-3 ms-auto" href="http://127.0.0.1:8000/admin/products/create">Xem biều đồ</a>
                </div>
                <div className="alert alert-success" >

                </div>

                <div className="alert alert-danger">

                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tiêu đề</td>
                            <td>Nội dung</td>
                            <td>Lượt xem</td>
                            <td>Lượt thích</td>
                            <td>Ngày đăng</td>
                            <td>Lần cập nhật gần nhất</td>
                            <td>Ảnh đại diện</td>
                            <td>Tác giả</td>
                            <td className="text-center" colspan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {posts.map(
                            (post, index) => (
                                <tr key={index}>
                                    <td>{post['id']}</td>
                                    <td>{post['name']}</td>
                                    <td>
                                        <textarea class="form-control" name="" id="" disabled rows="3">{post['content']}</textarea>
                                    </td>
                                    <td>{post['views']}</td>
                                    <td>{post['likes']}</td>
                                    <td>{post['created_at']}</td>
                                    <td>{post['update_at']}</td>
                                    <td><img
                                        src={post['avatar']}
                                        class="img-fluid rounded-top"
                                        alt=""
                                    />
                                    </td>
                                    <td>{post['author']}</td>
                                    <td>
                                        <a className="btn btn-outline-warning" href="http://127.0.0.1:8000/admin/products/1/edit"><i className="bi bi-pencil-square"></i></a>
                                    </td>
                                    <td>
                                        <a href="#" className="btn btn-outline-danger"><i className="bi bi-x-circle"></i></a>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminPostIndex;