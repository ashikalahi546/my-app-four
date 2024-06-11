
"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const BlogsPage = () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     slug: "coder",
  //   },
  //   {
  //     id: 2,
  //     name: "Best Coding Practices",
  //     email: "Jane Smith@gmail.com",
  //     slug: "best-coding-practices",
  //   },
  //   {
  //     id: 3,
  //     name: "Wireless Mouse",
  //     email: "techBrand@gmail.com",
  //     slug: 29.99,
  //   },
  // ];

  const [users,setUsers] =useState([])

  useEffect(()=>{
    fetch('/blog.json')
    .then((res)=>res.json())
    .then(data=>setUsers(data))
  },[])
  // const handleItems =(item)=>{
  //   // console.log(item)
  // }

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {users.map((items) => (
          <div key={items.id} className="border p-5">

            <h1>{items["name"]}</h1>
            <h1>{items["email"]}</h1>
            <h1>{items["slug"]}</h1>
          <Link href={`/blogs/${items.id}`}  >
          <button  className="bg-red-500 px-3 py-2 rounded">Details</button>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
