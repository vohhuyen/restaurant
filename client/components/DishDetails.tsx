<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_DISHS_ENDPOINT } from "@/utils/constants/endpoints";

const GET_CHEF_ENDPOINT = (id: string) => `http://localhost:8800/api/chef/${id}`;

type Evalue = {
  star: number;
  comment: string;
  idUser: string;
};

type Chef = {
  _id: string;
  name: string;
  image: string;
  description: string;
};

type Post = {
  star: React.ReactNode;
  _id: string;
  name: string;
  chef: string[]; 
  type: string;
  image: string[];
  slug: string;
  evalue: Evalue[];
  description: string;
  price: string;
  rating: number;
  createdAt?: string;
  updatedAt?: string;
};

const DishComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [chefs, setChefs] = useState<{ [key: string]: Chef }>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(GET_DISHS_ENDPOINT);
        console.log("API Response (Posts):", response.data);
        setPosts(response.data);

        let allChefIds = Array.from(new Set(response.data.flatMap((post: Post) => post.chef))) as string[];
        console.log("Chef IDs before filtering:", allChefIds);

        allChefIds = allChefIds.filter(id => id && id.length === 24);
        console.log("Valid Chef IDs:", allChefIds);

        if (allChefIds.length > 0) {
          await fetchChefs(allChefIds);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
        setIsLoading(false);
      }
    };

    const fetchChefs = async (chefIds: string[]) => {
      try {
        const chefData: { [key: string]: Chef } = {};
        for (const id of chefIds) {
          console.log(`Fetching chef data for ID: ${id}`);
          const response = await axios.get(GET_CHEF_ENDPOINT(id));
          console.log("Chef data response:", response.data);
          chefData[id] = response.data;
        }
        setChefs(chefData);
      } catch (error) {
        console.error("Error fetching chefs:", error.response ? error.response.data : error.message);
        setError((prev) => prev ? prev + ' | ' : '' + `Không thể tải thông tin đầu bếp: ${error.message}`);
      }
    };

    fetchPosts();
  }, []);

  const getChefNames = (chefIds: string[]) => {
    return chefIds
      .map((id) => chefs[id]?.name)
      .filter((name) => name)  // Remove undefined or empty names
      .join(", ");
  };

  const renderContent = () => {
    const filteredPosts = posts.filter((post) => true);

    if (filteredPosts.length === 0) {
      return <p>No posts available.</p>;
    }

    const post = filteredPosts[0]; 

    return (
      <div className="flex flex-col lg:flex-row justify-between mt-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {post.image.slice(0, 2).map((imgUrl, index) => (
            <div
              key={index}
              className="w-full h-96 rounded-lg shadow-lg mb-4"
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        <div className="lg:w-1/2 lg:pl-12 text-white">
          <h1 className="text-5xl font-bold mb-4 text-custom-yellow uppercase tracking-[5px]">{post.name}</h1>
          <p className="text-2xl mb-4 font-semibold tracking-[1px]">${post.price}</p>
          <p className="mb-4 text-xl">Rating : {post.evalue[0]?.star} sao</p>
          <p className="mb-4 text-xl">Chef : {getChefNames(post.chef)}</p>
          <p className="text-xl leading-relaxed">Description : {post.description}</p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="container mx-auto p-8">
      {renderContent()}
    </div>
  );
};

export default DishComponent;
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_DISHS_ENDPOINT } from "@/utils/constants/endpoint";

const GET_CHEF_ENDPOINT = (id: string) => `http://localhost:8800/api/chef/${id}`;

type Evalue = {
  star: number;
  comment: string;
  idUser: string;
};

type Chef = {
  _id: string;
  name: string;
  image: string;
  description: string;
};

type Post = {
  star: React.ReactNode;
  _id: string;
  name: string;
  chef: string[]; 
  type: string;
  image: string[];
  slug: string;
  evalue: Evalue[];
  description: string;
  price: string;
  rating: number;
  createdAt?: string;
  updatedAt?: string;
};

const DishComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [chefs, setChefs] = useState<{ [key: string]: Chef }>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(GET_DISHS_ENDPOINT);
        console.log("API Response (Posts):", response.data);
        setPosts(response.data);

        let allChefIds = Array.from(new Set(response.data.flatMap((post: Post) => post.chef))) as string[];
        console.log("Chef IDs before filtering:", allChefIds);

        allChefIds = allChefIds.filter(id => id && id.length === 24);
        console.log("Valid Chef IDs:", allChefIds);

        if (allChefIds.length > 0) {
          await fetchChefs(allChefIds);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Không thể tải bài viết. Vui lòng thử lại sau.");
        setIsLoading(false);
      }
    };

    const fetchChefs = async (chefIds: string[]) => {
      try {
        const chefData: { [key: string]: Chef } = {};
        for (const id of chefIds) {
          console.log(`Fetching chef data for ID: ${id}`);
          const response = await axios.get(GET_CHEF_ENDPOINT(id));
          console.log("Chef data response:", response.data);
          chefData[id] = response.data;
        }
        setChefs(chefData);
      } catch (error) {
        console.error("Error fetching chefs:", error.response ? error.response.data : error.message);
        setError((prev) => prev ? prev + ' | ' : '' + `Không thể tải thông tin đầu bếp: ${error.message}`);
      }
    };

    fetchPosts();
  }, []);

  const getChefNames = (chefIds: string[]) => {
    return chefIds
      .map((id) => chefs[id]?.name)
      .filter((name) => name)  // Remove undefined or empty names
      .join(", ");
  };

  const renderContent = () => {
    const filteredPosts = posts.filter((post) => true);

    if (filteredPosts.length === 0) {
      return <p>No posts available.</p>;
    }

    const post = filteredPosts[0]; 

    return (
      <div className="flex flex-col lg:flex-row justify-between mt-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {post.image.slice(0, 2).map((imgUrl, index) => (
            <div
              key={index}
              className="w-full h-96 rounded-lg shadow-lg mb-4"
              style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        <div className="lg:w-1/2 lg:pl-12 text-white">
          <h1 className="text-5xl font-bold mb-4 text-custom-yellow uppercase tracking-[5px]">{post.name}</h1>
          <p className="text-2xl mb-4 font-semibold tracking-[1px]">${post.price}</p>
          <p className="mb-4 text-xl">Rating : {post.evalue[0]?.star} sao</p>
          <p className="mb-4 text-xl">Chef : {getChefNames(post.chef)}</p>
          <p className="text-xl leading-relaxed">Description : {post.description}</p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="container mx-auto p-8">
      {renderContent()}
    </div>
  );
};

export default DishComponent;
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
