import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import logo from "../../logo.png";
import { apiURL } from '../../App';
import {toast} from 'react-toastify';

export default function HeaderStudent() {

    // xử lý đăng nhập
    // const[email, updateEmail] = useState('')
    // const[password, updatepassword] = useState('')

    // const ProceedLogin = (event) => {
    //     event.preventDefault();
    //     if (validate()) {
    //         // thuc hien chuc nang dap nhap
    //         // console.log('sucess');
    //         fetch(`http://localhost:8000/api/users`).then(res => {
    //             return res.json();
    //         }).then((resp) => {
    //             console.log(resp);
    //         }).catch((err) => {
    //             console.log('login fail');
    //         });
    //     }
    // }

    // const validate = () => {
    //     let result = true;
    //     if (email === '' || email === null){
    //         toast.warning("Plase enter email address");
    //         return false;
    //     }

    //     if (password === '' || password === null){
    //         toast.warning("Plase enter password");
    //         return false;
    //     }
    //     return result;
    // }
    const nagivate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');


    useEffect(() => {
        if (localStorage.getItem('user-infor')) {
            nagivate("/quan-tri")
        }
    }, [])

    // async function handleLogin() {
    //     // console.log( "email - passs: " + email, password);
    //     let data = {email, password}
    //     let result = await fetch ("http://localhost:8000/api/login", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     });

    //     result = result.json();
    //     localStorage.setItem('user-infor',JSON.stringify(result));
    //     nagivate("/quan-tri")
    // }

    // async function handleLogin() {
    //     try {
    //         let data = { email, password };
    //         let response = fetch("http://localhost:8000/api/users", {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify(data)
    //         });

    //         if (response.ok) {
    //             let result = response.json();
    //             localStorage.setItem('user-infor', JSON.stringify(result));
    //             nagivate("/quan-tri");
    //         } else {
    //             // Xử lý trường hợp đăng nhập thất bại
    //             console.log("Đăng nhập thất bại");
    //             // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác
    //         }
    //     } catch (error) {
    //         console.error("Đã xảy ra lỗi khi đăng nhập:", error);
    //         // Xử lý lỗi, chẳng hạn hiển thị thông báo lỗi
    //     }
    // }

    const handleLogin = () => {

        const api = apiURL + "login";

        const data = { email: email, password: password, role: "student" }

        fetch(api, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                switch (data.status) {
                    case 200:
                        // alert(data.message);
                        const user = {...data.infor_user, remember_token: data.remember_token}
                        window.localStorage.setItem("user", JSON.stringify(user));
                        setUser(user);
                        toast.success(data.message);
                        break;
                    case 422:
                        // alert(data.message)
                        toast.success(data.message);
                        break;
                    default:
                        break;
                }
            })
    }

    const handleLogout = () => {
        setUser(undefined); // xoa cua minh
        window.localStorage.removeItem("user"); // xoa tren localStorage

    }




    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-s-nav fixed-top">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <div className="logo ps-4">
                                <img height={"50px"} src={logo} alt="Logo Khoa Công nghệ Thông Tin - trường Cao đẳng Công nghệ Thủ Đức" />
                            </div>
                        </NavLink>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/"><b>Trang chủ</b></NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gioi-thieu"><b>Giới thiệu</b></NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/tuyen-sinh"><b>Tuyển sinh</b></NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/tot-nghiep"><b>Sinh viên</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cong-dong"><b>Cộng đồng</b></NavLink>
                                </li>
                            </ul>
                            <form className="d-flex my-2 my-lg-0">
                                <input
                                    className="form-control me-sm-2"
                                    type="text"
                                    placeholder="Search"
                                />
                                <button
                                    className="btn btn-outline-teal my-2 my-sm-0"
                                    type="submit"
                                >
                                    <SavedSearchIcon />
                                </button>
                            </form>
                        </div>
                        { user &&
                            <button style={{ marginLeft: "5px" }} onClick={handleLogout} type="button" className="btn btn-outline-teal">Dang xuat</button>
                        }
                    </div>
                </nav>
            </header>

            {!user &&
                <div className='row'>
                    <div className='offset-lg-3 col-lg-6 d-flex justify-content-end'>
                        <div className='container' style={{ float: 'right' }}>
                            <div className='card'>
                                <div className='card-header'>
                                    <h1>ĐĂNG NHẬP</h1>
                                </div>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input onChange={(event) => setEmail(event.target.value)} type='text' className='form-control'></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input onChange={(event) => setPassword(event.target.value)} type='password' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='card-footer d-flex'>
                                    <button onClick={handleLogin} className='btn btn-teal ml-auto'>Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};