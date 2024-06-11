"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
 const {id} = useParams()
 const [user,setUser] =useState([])
 useEffect(()=>{
  fetch(`/blog.json`)
  .then((res)=>res.json())
  .then(data=>setUser(data))
},[])
const data = user.map((item) =>item)
const findData = data.find(item =>item.id==id)

  return (
    <div>
      <p>View Details</p>
      <p>{findData?.name}</p>
      <p>{findData?.des}</p>
      <p>{findData?.email}</p>
    </div>
  );
};

export default page;
