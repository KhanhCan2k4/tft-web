import { useEffect, useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TagIcon from '@mui/icons-material/Tag';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AdminLayout from './../../layouts/AdminLayout/index';
import DashBoardItem from "../../components/AdminDashboardItem";
import { NavLink } from "react-router-dom";

const initBanner = {
    img: "banner.jpg",
    title: "Trường Cao đẳng Công nghệ Thủ Đức"
}

const initTag = {
    id: 0,
    name: "",
    imgs: [
        {
            img: "./src/banners/banner.jpg",
            title: "Trường Cao đẳng Công nghệ Thủ Đức"
        }
    ],
}

const initPost = {
    id: 0,
    title: "",
    content: "",
    img: "",
    likes: 0,
    views: 0,
}

export default function AdminHomePage() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const myItems = [
            {
                link: "/quan-tri/gioi-thieu",
                icon: <TagIcon />,
                title: "Giới thiệu",
                style: "brown",
            },
            {
                link: "/quan-tri/tuyen-sinh",
                icon: <LoginIcon />,
                title: "Thông tin tuyển sinh",
                style: "teal",
            },
            {
                link: "/quan-tri/tot-nghiep",
                icon: <LogoutIcon />,
                title: "Thông tin tốt nghiệp",
                style: "rebeccapurple",
            },
            {
                link: "/quan-tri/banner",
                icon: <ViewCarouselIcon />,
                title: "Banner",
                style: "cadetblue",
            },
            {
                link: "/quan-tri/danh-muc",
                icon: <LocalOfferIcon />,
                title: "Danh mục",
                style: "chocolate",
            },
            {
                link: "/quan-tri/bai-viet",
                icon: <PostAddIcon />,
                title: "Bài viết",
                style: "darkblue",
            },
            {
                link: "/quan-tri/lien-he",
                icon: <ContactMailIcon />,
                title: "Tiếp nhận liên hệ",
                style: "darkgreen",
            },
            {
                link: "/quan-tri/thanh-vien",
                icon: <GroupIcon />,
                title: "Thành viên",
                style: "darkmagenta",
            },
            {
                link: "/quan-tri/cai-dat",
                icon: <SettingsApplicationsIcon />,
                title: "Cài đặt",
                style: "lightslategrey",
            }
        ];
        
        setItems(myItems);
    }, []);

    return (
        <AdminLayout
            slot={
                <>
                    <h1 className="text-teal fw-bold">Quản trị</h1>
                    <hr />
                    <div className="admin-content">
                        <div className="row">

                            {items.map((item, index) => (
                                <div key={index} className="col-md-4">
                                    <NavLink to={item.link}>
                                        <DashBoardItem icon={item.icon} title={item.title} style={item.style}/>
                                    </NavLink>
                                </div>
                            ))}

                        </div>
                    </div>
                </>
            }>
        </AdminLayout>
    );
}
