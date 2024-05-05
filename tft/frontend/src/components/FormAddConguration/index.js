import { useState } from "react";
import { useNavigate } from "react-router";
import AdminLayout from "../../layouts/AdminLayout";
import { apiURL } from "../../App";

function FormAddConfiguration() {

    const [key, setKey] = useState('')
    const [value, setValue] = useState('')
    const navigation = useNavigate()

    const handleAdd = () => {

        const api = apiURL + "configurations";

        const data = { key: key, value: value }

        fetch(api, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
            },
        })
            .then((res) => res.json())
            .then(data => {
                switch (data.status) {
                    case 200:   
                        navigation("/quan-tri/cai-dat")
                        alert(data.message);
                        break;
                    case 422:
                        const messages = data.message;
                        let message = "";
                        
                        messages?.key?.forEach(error => {
                            message += error
                        });

                        messages?.value?.forEach(error => {
                            message += error
                        });
                        alert(message);
                        break;
                    default:
                        alert("Đã có lỗi xảy ra. Thêm không thành công");
                        break;
                }
            })
    }

    return (
        <>
            <AdminLayout slot={
                (
                    <>
                        <div className="container">
                            <h1>THÊM BẢNG ĐIỀU KIỂN</h1>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="key">Key</label>
                                    <input onChange={(event) => setKey(event.target.value)} type="text" className="form-control" id="key" name="key" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="value">Value</label>
                                    <input onChange={(event) => setValue(event.target.value)} type="text" className="form-control" id="value" name="value" />
                                </div>
                                <button onClick={handleAdd} className="btn btn-primary">THÊM</button>
                            </div>
                        </div>
                    </>
                )
            }>
            </AdminLayout>

        </>
    )
}

export default FormAddConfiguration;