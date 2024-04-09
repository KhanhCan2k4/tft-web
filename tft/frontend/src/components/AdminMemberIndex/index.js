
function AdminMemberIndex({ members }) {
    return (
        <>
            <h1>Quản lý thành viên</h1>

            <div className="row">
                <div className="col">
                    <a className="btn btn-outline-success my-3" href="http://127.0.0.1:8000/admin/products/create">Thêm thành viên mới</a>
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
                            <td>Họ & Tên</td>
                            <td>Ảnh đại dện</td>
                            <td>Chức vụ</td>
                            <td>Khóa</td>
                            <td>Ngày tham gia</td>
                            <td>Lần cập nhật gần nhất</td>
                            <td className="text-center" colspan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {members.map(
                            (member, index) => (
                                <tr key={index}>
                                    <td>{member['id']}</td>
                                    <td>{member['full_name']}</td>
                                    <td>{member['avatar']}</td>
                                    <td>{member['chuc_vu']}</td>
                                    <td>{member['khoa']}</td>
                                    <td>{member['created_at']}</td>
                                    <td>{member['updated_at']}</td>
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

export default AdminMemberIndex;