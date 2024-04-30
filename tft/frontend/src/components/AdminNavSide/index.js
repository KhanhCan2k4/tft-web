import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PostAddIcon from "@mui/icons-material/PostAdd";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TagIcon from "@mui/icons-material/Tag";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from "react-router-dom";

export default function NavSide() {
  return (
    <div className="nav-side p-4" style={{ minWidth: "300px" }}>
      <h2 className="text-teal">Quản trị</h2>
      <hr />
      <List>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri"}>
            <ListItemButton>
              <ListItemIcon>
                <OtherHousesIcon />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/gioi-thieu"}>
            <ListItemButton>
              <ListItemIcon>
                <TagIcon />
              </ListItemIcon>
              <ListItemText primary="Giới thiệu" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/tuyen-sinh"}>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Thông tin tuyển sinh" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/sinh-vien"}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Thông tin dành cho sinh viên" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/banner"}>
            <ListItemButton>
              <ListItemIcon>
                <ViewCarouselIcon />
              </ListItemIcon>
              <ListItemText primary="Banner" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/danh-muc"}>
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText primary="Danh mục" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/bai-viet"}>
            <ListItemButton>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Bài viết" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/lien-he"}>
            <ListItemButton>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Tiếp nhận liên hệ" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/thanh-vien"}>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Thành viên" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/cai-dat"}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText primary="Cài đặt" />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <hr />
        <ListItem disablePadding className="list-item">
          <NavLink to={"/quan-tri/dang-xuat"}>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
}
