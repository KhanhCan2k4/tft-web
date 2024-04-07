import { useEffect, useState } from "react";
import CarouselBanner from "../../components/CarouselBanner";
import PostCard from "../../components/PostCard";
import TagGallery from "../../components/TagGallery";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ActivePost from "../../components/ActivePost";
import SmallPostCard from "../../components/SmallPostCard";
import { Box } from '@mui/material';
import AdminLayout from './../../layouts/AdminLayout/index';

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

    const [tags, setTags] = useState([initTag]);
    const [recentPosts, setPosts] = useState([initPost]);

    //fetch tags
    useEffect(() => {
        const myTags = [
            {
                id: 1,
                name: "Nghiên cứu khoa học",
                imgs: [
                    {
                        title: 'San Francisco – Oakland Bay Bridge, United States',
                        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        title: 'Bird',
                        img: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        title: 'Bali, Indonesia',
                        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
                    },
                    {
                        title: 'Goč, Serbia',
                        img: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        title: 'Bali, Indonesia',
                        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
                    },
                    {
                        title: 'Goč, Serbia',
                        img: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                ]
            },
            {
                id: 2,
                name: "Sinh viên 5 tốt",
                imgs: [
                    {
                        title: 'San Francisco – Oakland Bay Bridge, United States',
                        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        title: 'Bird',
                        img: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                    {
                        title: 'Bali, Indonesia',
                        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
                    },
                    {
                        title: 'Goč, Serbia',
                        img: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                    },
                ]
            }
        ];

        setTags(myTags);
    }, []);

    //fetch posts
    useEffect(() => {
        const myPosts = [
            {
                id: 1,
                title: 'Hello World',
                'content': `Help us keep running
                If you don't mind tech-related ads (no tracking or remarketing), and want to keep us running, please whitelist us in your blocker.
                Thank you! ❤️`,
                likes: 10,
                views: 20,
                isLike: true
            },
            {
                id: 2,
                title: "Sinh viên 5 tốt",
                content: "Not quite sure what the error is. I have read multiple guides on how to use React routers and they haven't really helped. I am trying to set up these routers to work alongside express.js. I have tried commenting out different dependencies, but the main error seems to lie with just the BrowserRouter. I am a high school student and greatly appreciate any help!",
                likes: 123,
                views: 10,
                isLike: false
            },
            {
                id: 3,
                title: "Post 1",
                content: "Here is post 1's content",
                likes: 123,
                views: 10,
                isLike: false
            },
            {
                id: 4,
                title: "Post 2",
                content: "Here is post 2's content",
                likes: 123,
                views: 10,
                isLike: false,
                image: "banner-2.jpg"
            },
            {
                id: 5,
                title: "Post 3",
                content: "Here is post 3's content",
                likes: 123,
                views: 10,
                isLike: false,
                image: "banner-3.jpg"

            },
            {
                id: 6,
                title: "Post 1",
                content: "Here is post 1's content",
                likes: 123,
                views: 10,
                isLike: false
            },
            {
                id: 7,
                title: "Post 2",
                content: "Here is post 2's content",
                likes: 123,
                views: 10,
                isLike: false,
                image: "banner-2.jpg"
            },
            {
                id: 8,
                title: "Post 3",
                content: "Here is post 3's content",
                likes: 123,
                views: 10,
                isLike: false,
                image: "banner-3.jpg"
            },
        ];

        setPosts(myPosts);
    }, []);

    console.log(tags);

    return (
        <AdminLayout
            slot={
                <div className="admin-content">
                    
                </div>
            }>
        </AdminLayout>
    );
}
