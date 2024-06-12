"use client"
import { commentData } from '@/services/commentData';
import { useParams } from 'next/navigation';
import React from 'react';

const DataDisplay = () => {
  let {id} = useParams()
  const data =  commentData.map((item)=>item)
  const newItem = data.find((items) =>items.id ==id)
  console.log(newItem)
    return (
        <div>
         <p>{newItem?.title}</p>
         <p>{newItem?.body}</p>
        </div>
    );
};

export default DataDisplay;