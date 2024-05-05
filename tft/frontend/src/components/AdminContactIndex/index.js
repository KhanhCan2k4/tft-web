import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initContact = {
    id: 0,
    name: 'Unknown User',
    email: '',
    subject: '',
    message: ''
};

function AdminContactIndex() {
    const [contacts, setContacts] = useState([initContact]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        getContactsFromDatabase();
    }, []);

    function getContactsFromDatabase() {
        fetch('http://localhost:8000/api/contacts')
            .then(res => res.json())
            .then(contacts => {
                setContacts(contacts);
            })
            .catch(err => {
                console.log(err);
                setContacts([initContact]);
            });
    }

    return (
        <>
            <h1>Quản lý Liên Hệ</h1>

            <div className="row">
                <div className="alert alert-success" style={{ display: successMessage ? 'block' : 'none' }}>
                    {successMessage}
                </div>
                <div className="alert alert-danger" style={{ display: errorMessage ? 'block' : 'none' }}>
                    {errorMessage}
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Họ & Tên</td>
                            <td>Email</td>
                            <td>Tiêu đề</td>
                            <td>Nội dung</td>
                            <td colSpan={2}>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>
                                <td>
                                    <Link
                                        className="btn btn-outline-warning"
                                        to={`/admin/contact/edit/${contact.id}`}
                                    >
                                        Phản hồi
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminContactIndex;
