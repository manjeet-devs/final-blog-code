import Notfoundpage from "../admin/pages/NotFountPage";
import Dashboard from "../admin/pages/Dashbord";
import Userpage from "../admin/pages/UserPage";
import CreatePost from "../admin/pages/CreatePost";
import BlogCategory from "../admin/pages/BlogCategory";
import CreateBlogCategory from "../admin/pages/CreateBlogCategory";
import AllPosts from "../admin/pages/AllPosts";
import UserPostCommentList from "../admin/pages/UserPostCommentList";
import UserPostList from "../admin/pages/UserPostList";
const url = window.location.pathname;

const routes = [
    { path: "/admin", element: <Dashboard /> },
    { path: "/admin/user", element: <Userpage /> },
    { path: "/admin/user/post", element: <UserPostList /> },
    { path: "/admin/user/comment", element: <UserPostCommentList /> },
    { path: "/admin/posts", element: <AllPosts /> },
    { path: "admin/posts/new", element: <CreatePost /> },
    { path: "admin/categories", element: <BlogCategory /> },
    { path: "admin/categories/new", element: <CreateBlogCategory /> },
    { path: "admin/categories/:id", element: <CreateBlogCategory /> },
    { path: "admin/*", element: <Notfoundpage /> },
  ];

export default routes;