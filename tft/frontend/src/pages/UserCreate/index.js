import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserCreate = () => {
  const location = useLocation();
  const history = useNavigate();
  const [user, setUser] = useState({
    id: 0,
    name: '',
    email: ''
  });

  const inputName = useRef();
  const inputEmail = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setUser(location.state || { id: 0, name: '', email: '' });
  }, [location.state]);

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const processingAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: user.name,
      email: user.email
    };

    fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => {
        if (res.ok) {
          console.log('User added successfully!');
          console.log(newUser);
          history('/quan-tri/thanh-vien');
        } else {
          console.log('Failed to add user.');
          console.log(newUser);
        }
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };
  return (
    <div className="container">
      <h1 className="py-5">Create User</h1>
      <form onSubmit={processingAddUser}>
        <div className="form-group pb-3">
          <label htmlFor="nameUser">Tên sinh viên</label>
          <input
            ref={inputName}
            type="text"
            className="form-control"
            id="nameUser"
            name="nameUser"
            onChange={handleNameChange}
            value={user.name}
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="email">Địa chỉ email</label>
          <input
            ref={inputEmail}
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleEmailChange}
            value={user.email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default UserCreate;
