import React from 'react';
import Menu from '@/components/Menu';
import Chef from '@/components/Chef';
// import Login from '@/components/auth/login';
import Blog from '@/components/auth/blog';

const Home = () => {
  const blogData = {
    blogImage: "/path/to/blog-image.jpg",
    blogTitle: "Welcome to Our Blog",
    blogDescription: "Discover the latest news and updates.",
    menuItems: [
      { id: 1, name: "Chocolate Cake", description: "Delicious and rich chocolate cake", image: "/path/to/cake-image.jpg" },
      { id: 2, name: "Vanilla Ice Cream", description: "Creamy and smooth vanilla ice cream", image: "/path/to/ice-cream-image.jpg" }
    ],
    aboutUs: "We are a blog dedicated to sharing delicious recipes and food stories.",
    galleryImages: [
      "/path/to/gallery-image1.jpg",
      "/path/to/gallery-image2.jpg"
    ],
    BlogPosts: [
      { id: 1, title: "First Blog Post", excerpt: "This is a short summary of the first post.", link: "/blog/first-post" },
      { id: 2, title: "Second Blog Post", excerpt: "This is a short summary of the second post.", link: "/blog/second-post" }
    ],
    contactInfo: "Contact us at info@ourblog.com"
  };
  return (
    <div>
        {/* <Menu></Menu>
        <Chef></Chef> */}
        {/* <Login></Login> */}
        <Blog />
    </div>
  )
}

export default Home
