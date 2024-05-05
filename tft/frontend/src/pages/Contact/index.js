import React, { useState } from 'react';
import Header from '../../components/Header';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        content: ''
    });
    // function sendEmail() {
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "22211TT1006@mail.tdc.edu.vn",
    //         Password: "minhbinh78901",
    //         To: email,
    //         From: "22211TT1006@mail.tdc.edu.vn",
    //         Subject: "Thanks you",
    //         Body: "Cảm ơn bạn đã quan tâm và liên hệ đến chúng tôi, Sự đóng góp của bạn sẽ giúp chúng tôi ngày càng trở nên hoàn thiện hơn.",
    //     })
    //         .then(function (message) {
    //             alert("mail sent successfully")
    //         });
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending email');
            });


        // Reset form sau khi gửi email
        setFormData({
            name: '',
            email: '',
            title: '',
            content: ''
        });
    };

    return (
        <>
            <Header />
            <div className="container">
                <h2 className="text-center text-xl-start">Liên hệ</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Họ và tên:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Tiêu đề:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">
                            Nội dung tin nhắn:
                        </label>
                        <textarea
                            className="form-control"
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>
                    {/* <button onClick={sendEmail} type="submit" className="btn btn-primary">
                        Gửi tin nhắn
                    </button> */}
                    <button type="submit" className="btn btn-primary">
                        Gửi tin nhắn
                    </button>
                </form>
            </div>
        </>
    );
}
