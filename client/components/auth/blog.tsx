// components/Blog.js
import React from 'react';
import Link from 'next/link';

const Blog = ({
  heroImage,
  heroTitle,
  heroDescription,
  menuItems = [],
  aboutUs,
  galleryImages = [],
  BlogPosts = [],
  contactInfo
}) => {
  return (
    <div className="blog">
      <section className="hero">
        <img src={heroImage} alt="Hero image" />
        <h2>{heroTitle}</h2>
        <p>{heroDescription}</p>
      </section>

      <section className="menu">
        <h2>Menu</h2>
        <ul>
          {Array.isArray(menuItems) && menuItems.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>{aboutUs}</p>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          {Array.isArray(galleryImages) && galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="blog-posts">
        <h2>Blog Posts</h2>
        {Array.isArray(BlogPosts) && BlogPosts.map(post => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={post.link}>Read more</Link>
          </article>
        ))}
      </section>

      <section className="contact-info">
        <h2>Contact Info</h2>
        <p>{contactInfo}</p>
      </section>
    </div>
  );
};

export default Blog;
