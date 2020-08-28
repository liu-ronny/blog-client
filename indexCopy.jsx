// import { useState } from "react";
// import { CSSTransition } from "react-transition-group";
// import blogsApi from "../api/blogs";
// import Navbar from "../components/general/navbar";
// import Sidebar from "../components/home/sidebar";
// import Overlay from "../components/home/overlay";
// import Blogs from "../components/home/blogs";
// import sidebarStyles from "../components/home/styles/sidebar.module.scss";
// import overlayStyles from "../components/home/styles/overlay.module.scss";

// const Home = ({ error, blogs }) => {
//   const [showSidebar, setSidebar] = useState(false);

//   const handleToggle = () => setSidebar(!showSidebar);

//   return (
//     <>
//       <CSSTransition
//         in={showSidebar}
//         timeout={500}
//         classNames={{ ...sidebarStyles }}
//       >
//         <Sidebar onToggle={handleToggle} />
//       </CSSTransition>

//       <CSSTransition
//         in={showSidebar}
//         timeout={300}
//         classNames={{ ...overlayStyles }}
//       >
//         <Overlay onToggle={handleToggle} />
//       </CSSTransition>

//       <Navbar onToggle={handleToggle} />
//       <Blogs error={error} blogs={blogs} />
//     </>
//   );
// };

// export async function getStaticProps(context) {
//   try {
//     var blogs = await blogsApi.getAll();
//   } catch (err) {
//     console.log(err);
//     var error = {
//       message: "Something went wrong on the server. Please try again later.",
//     };
//   }

//   return {
//     props: {
//       blogs: blogs ? blogs : null,
//       error: error ? error : null,
//     },
//   };
// }

// export default Home;
