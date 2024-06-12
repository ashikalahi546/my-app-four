import { getsData } from "@/services/postApi";
import Link from "next/link";



const PostPage = async () => {
  const postsAllData = await getsData();
//   console.log(postsAllData);
  return (
    <div className="grid grid-cols-5 gap-6">
      {postsAllData?.slice(0,20)?.map(({title,id,body}) => (
        <div className="border p-5">
            <p>{title}</p>
            <h5>{body}</h5>
            <button className="bg-orange-500 px-3 py-2 rounded"><Link href={`/posts/${id}`}>See Details</Link></button>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
