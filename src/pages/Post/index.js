import { useNavigate } from "react-router"
import DefaultLayout from "../../layouts/DefaultLayout";
import SmallPostCard from "../../components/SmallPostCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import AlternativePost from "../../components/AlternatePost";
import FadePost from "../../components/FadePost";
import ImageListPost from "../../components/ImageListPost";


const initPost = {
    id: 0,
    title: "",
    content: "",
    img: "",
    likes: 0,
    views: 0,
}

export default function PostPage({ post }) {
    const navigate = useNavigate();

    const [recentPosts, setPosts] = useState([initPost]);

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

    post = {
        title: "Hello ",
        content: `
            F8 được biết đến là một lối tắt để vào menu Tùy chọn khởi động nâng cao trong Windows XP một thời, ngoài ra còn nhiều công dụng khác với người sử dụng HĐH Windows, nhưng mình không đề cập đến.

Hôm nay, mình chỉ đề cập đến công dụng của nó đối với một coder sử dụng IDE VSCode:

Bạn đang code... bạn gặp lỗi chính tả ư? Lỗi cú pháp ư? Và bạn không để ý hoặc không phát hiện ra nó. Bạn tiếp tục code... và đến khi chạy chương trình... và điều gì đến sẽ đến. Bạn loay hoay không phát hiện ra lỗi ở đâu:

Giải pháp: Ctrl+Shift+M Ồ! nó chỉ đưa bạn tới khu vực xảy ra vấn đề, với một khu vực rộng bạn khó có thể tìm chính xác được vấn đề xảy ra tại dòng nào? (Cũng làm bạn mất kha khá thời gian)

Một giải pháp tối ưu hơn đó là sử dụng phím F8:

F8 sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề.
Alt + F8 đưa bạn đến điểm xảy ra vấn đề tiếp theo.
Shift + F8 giúp bạn quay lại điểm xảy ra vấn đề trước đó.
Shift + Alt + F8 giúp bạn kiểm tra vấn đề trong toàn bộ thư mục dự án nhé. (Chính xác thì nó phát hiện lỗi của tất cả các thư mục hiện có trong Workspace của bạn)
F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)

Ồ không! Bạn không muốn code xong, rồi chạy dự án mới quay lại đi tìm lỗi ư? Dưới đây là cách đơn giản để thực hiện ý tưởng đó:

II/. Extensions giúp Bạn:
Trong phần này có đoạn nào mình nói đến việc sử dụng phím tắt mà không đề cập đến cụ thể phím tắt đó là gì thì (Cách đặt phím tắt cho Extensions hãy theo dõi mình nói ở cuối bài nhé)

Giới thiệu đến các bạn Extensions mang tên: Error Lens

Thật đơn giản phải không nào? Chỉ cần mở Extensions tìm kiếm cái tên đó và cài đặt nó rồi tiếp tục code thôi nào... Bất cứ khi nào bạn code sai, code lỗi ngay lập tức dòng code của bạn được tô sáng và kèm theo một thông báo nhắc nhở bạn mức độ của lỗi nhé Nó thực sự siêu đơn giản nên mình chỉ để đường dẫn cài đặt ở đây các bạn tự vào tham khảo hem: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens
            `,
    }

    return (
        <DefaultLayout
            slot={
                <div className="post-content pt-3">
                    <div className="post-title">
                        <Link className="text-teal" to="/"><ArrowCircleLeftIcon /></Link>
                        <h1>{post.title}</h1>
                    </div>
                    <div className="post-content">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="main-content">

                                    {/* <AlternativePost /> */}
                                    <FadePost />
                                    {/* <ImageListPost /> */}

                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="reaction"></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <br />

                    <div className="recent-posts">
                        <h4 className="text-teal"><b>Recent Posts</b></h4>
                        <hr />

                        <div className="row mt-3">
                            {recentPosts.slice(0, 6).map((post, index) => (
                                <div key={post.id} className={"col-md-2 " + (index % 2 != 0 ? " mt-md-3 " : "")}>
                                    <SmallPostCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <br />
                </div>
            }>
        </DefaultLayout>
    )
}