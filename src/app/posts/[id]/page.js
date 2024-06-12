"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostsDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const data = user.map((item) => item);

  // const data = user.map((item) =>item)
  const findData = data.find((item) => item.id == id);
//   console.log(findData);

  return (
    <div>
      <p> {findData?.title}</p>
      <p>{findData?.body}</p>
    </div>
  );
};

export default PostsDetailPage;
