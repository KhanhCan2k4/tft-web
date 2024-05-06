import { useEffect, useState } from "react";
import AdminMemberIndex from "../../components/AdminMemberIndex";
import AdminLayout from "../../layouts/AdminLayout";


function AdminMembers() {

    

    // const members = [
    //     {
    //         id: 1,
    //         full_name: "Nhi Phương Nguyễn",
    //         avatar: "./src/user/user-1.png",
    //         chuc_vu: "Sinh viên",
    //         khoa: 4,
    //         created_at: "09/04/2024",
    //         updated_at: "09/04/2024"

    //     },
    //     {
    //         id: 2,
    //         full_name: "Khanh Lê Việt",
    //         avatar: "./src/user/user-1.png",
    //         chuc_vu: "Trợ giảng",
    //         khoa: 1,
    //         created_at: "09/04/2024",
    //         updated_at: "09/04/2024"
    //     }
    // ]

    return (
        <AdminLayout slot={
            (
                <>
                    <div className="container">
                        <AdminMemberIndex />
                    </div>
                </>
            )
        }>
        </AdminLayout>
    )
}

export default AdminMembers;