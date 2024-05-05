
function AdminCategoryIndex({ categories }) {
    return (
        <>
            <h1>Quản lý danh mục</h1>

            <div className="row">
                <div className="col">
                    <a className="btn btn-outline-success my-3" href="http://127.0.0.1:8000/admin/products/create">Thêm danh mục mới</a>
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
                            <td>Tên danh mục</td>
                            <td>Ngày thêm</td>
                            <td>Lần cập nhật gần nhất</td>
                            <td className="text-center" colSpan={2}>Action</td>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {categories.map(
                            (category, index) => (
                                <tr key={index}>
                                    <td>{category['id']}</td>
                                    <td>{category['name']}</td>
                                    <td>{category['added_at']}</td>
                                    <td>{category['updated_at']}</td>
                                    <td>
                                        <a className="btn btn-outline-warning" href="#"><i className="bi bi-pencil-square"></i></a>
                                    </td>
                                    <td>
                                        <a href="#" className="btn btn-outline-danger"><i className="bi bi-x-circle"></i></a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminCategoryIndex;