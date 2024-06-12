"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navber = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Posts",
      path: "/posts",
    },
  ];

  const handleClick = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return <div className="bg-red-500 py-2">Dashboard</div>;
  return (
    <div className="bg-blue-500 py-3 flex items-center justify-between px-5">
      <h2 className="text-2xl font-medium">Hero</h2>
      <ul className="flex gap-4 cursor-pointer font-medium">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path ? "text-pink-500" : ""}`}
            href={link.path}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <button
        className="bg-red-500 px-5 py-2 rounded font-medium"
        onClick={() => handleClick()}
      >
        Login
      </button>
    </div>
  );
};

export default Navber;
