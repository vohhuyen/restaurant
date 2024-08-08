import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import { GET_NEWS_ENDPOINT } from '@/utils/constants/endpoint';

interface Post {
  _id: string;
  content: string;
  image: string[];
  slug: string;
  title: string;
  type: string;
  createdAt?: string;
  updatedAt?: string;
}

const BlogComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_NEWS_ENDPOINT, {});
        console.log('API Response:', response.data); // Kiểm tra dữ liệu trả về từ API
        setPosts(response.data);
      } catch (error) {
        console.log("Have error when call api", error);
        setError("Không thể tải bài viết.");
      }
    };
    fetchData();
  }, []);

  const handlePostClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  }

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap mt-32">
        {posts.map((post) => (
          <div key={post._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div
              className="rounded-lg p-6 shadow-lg"
              style={{ backgroundColor: "#0b1315" }}
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="flex w-[350px] h-[350px] space-x-4">
                {post.image && post.image.length > 0 ? (
                  <img
                    src={post.image[0]}
                    alt="Selected Image"
                    className="w-full h-full mb-4"
                  />
                ) : (
                  <div className="text-white">No image available</div>
                )}
              </div>
              <div className="flex text-white mt-5">
                {post.createdAt && (
                  <>
                    <div>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <div className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 8.3 8.5"
                        className="w-2 h-2 mt-2"
                      >
                        <polyline
                          points="0.4 0.4 3.6 4.2 0.4 8.1"
                          fill=""
                          stroke="#FFFFFF"
                          strokeWidth="1"
                        ></polyline>
                        <polyline
                          points="4.5 0.4 7.7 4.2 4.5 8.1"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1"
                        ></polyline>
                      </svg>
                    </div>
                  </>
                )}
                <div className="ml-2 w-32">{post.type}</div>
              </div>
              <div className="flex text-custom-yellow uppercase text-2xl font-sans mt-3">
                <p>{post.title}</p>
              </div>
              <div className="font-open-sans-condensed mt-3 text-white text-xl">
                {post.content}
              </div>
              <div>
                <div className="flex font-open-sans-condensed text-white uppercase mt-14 text-xl">
                  <a>Read</a>
                  <a className="ml-2">More</a>
                </div>
                <div className="border-t border-custom-yellow w-20"></div>
                <div className="border-t border-custom-yellow w-20 mt-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogComponent;
