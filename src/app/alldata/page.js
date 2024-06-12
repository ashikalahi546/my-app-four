"use client"

import { commentData } from './../../services/commentData';
import Link from 'next/link';

// import Link from 'next/link';

const page = () => {
// const handler = (item) =>{

  
// console.log(item)
// }
  
    return (
       <div className='grid grid-cols-4 gap-5 border-5 '>
        {
            commentData.map((item)=>(
                <div key={item.id}>
                <p>{item?.title}</p>
                <p>{item?.body}</p>
                <Link href={`/alldata/${item.id}`} className='bg-red-500 text-white px-5 py-2 rounded'>All Details</Link>
                {/* <button onClick={()=>handler(item)} className='bg-red-500 text-white px-5 py-2 rounded'>All Details</button> */}
                </div>
            ))
        }
       </div>
    );
};

export default page;