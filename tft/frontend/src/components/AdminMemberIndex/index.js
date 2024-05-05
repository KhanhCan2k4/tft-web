import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  
const initUser = {
    id: 0,
    name: "Unknown User",
  }

function AdminMemberIndex() {

    const [users, setUsers] = useState([initUser]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const notify = document.querySelector(".alert");
    useEffect(() => {
        // Kiểm tra nếu có thông báo thành công thì hiển thị alert success và sau 3 giây ẩn đi
        if (successMessage) {
            const successAlert = document.querySelector('.alert-success');
            successAlert.innerText = successMessage;
            successAlert.style.display = 'block';
    
            setTimeout(() => {
                successAlert.style.display = 'none';
                setSuccessMessage('');
            }, 3000);
        }
    
        // Kiểm tra nếu có thông báo lỗi thì hiển thị alert danger và sau 3 giây ẩn đi
        if (errorMessage) {
            const errorAlert = document.querySelector('.alert-danger');
            errorAlert.innerText = errorMessage;
            errorAlert.style.display = 'block';
    
            setTimeout(() => {
                errorAlert.style.display = 'none';
                setErrorMessage('');
            }, 5000);
        }
    }, [successMessage, errorMessage]);
    

    useEffect(() => {
        getFromDatabase();
    },[])

    function getFromDatabase() {
        fetch("http://localhost:8000/api/users")
            .then(res => res.json())
            .then(users => {
                setUsers(users);
            })
            .catch((err) => {
                console.log(err);
                setUsers([initUser]);
            })
    }

    function deleteUser(id) {

        if (!window.confirm("Bạn có muốn xóa thành viên này không")) {
            return;
        }
    
        const url =`http://localhost:8000/api/users/${id}`;
        fetch(url, {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
        })
        .then(res=> res.json())
          .then(data => {
            console.log(data);
            if (data && data.message) {
                setSuccessMessage(data.message); // Hiển thị thông báo thành công
            } else {
                setSuccessMessage("Delete successful");
            }
            getFromDatabase();

          })
          .catch((err) => {
            console.log(err);
            console.log("Delete Unsuccessfully");
          })
      }

    return (
        <>
            <h1>Quản lý thành viên</h1>

            <div className="row">
                <div className="col">
                    <Link className="btn btn-outline-teal" to={"/quan-tri/thanh-vien/them-thong-tin-thanh-vien"}>
                        Thêm thành viên
                    </Link>
                </div>
                <div className="col text-end">
                    <a className="btn btn-outline-teal my-3 mx-2" href="http://127.0.0.1:8000/admin/products/create">Xem danh sách</a>
                    <a className="btn btn-outline-teal my-3 ms-auto" href="http://127.0.0.1:8000/admin/products/create">Xem biều đồ</a>
                </div>


                <div className="alert alert-success" style={{ display: 'none' }}></div>
                <div className="alert alert-danger" style={{ display: 'none' }}></div>


                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Họ & Tên</td>
                            <td>Email</td>
                            <td>Chức vụ</td>
                            <td>Khóa</td>
                            <td>Ngày tham gia</td>
                            <td>Lần cập nhật gần nhất</td>
                            <td className="text-center" colspan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {users.map(
                            (user, index) => (
                                <tr key={index}>
                                    <td>{user['id']}</td>
                                    <td>{user['name']}</td>
                                    <td>{user['email']}</td>
                                    <td>{user['chuc_vu']}</td>
                                    <td>{user['khoa']}</td>
                                    <td>{user['created_at']}</td>
                                    <td>{user['updated_at']}</td>
                                    <td>
                                        <Link className="btn btn-outline-warning" to={"/quan-tri/thanh-vien/sua-thong-tin-thanh-vien"} state={user }>
                                            
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <span onClick={()=> deleteUser(user['id'])} className="btn btn-outline-danger"><i className="bi bi-x-circle"></i></span>
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