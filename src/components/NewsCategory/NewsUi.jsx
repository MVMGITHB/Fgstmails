import Link from "next/link";
import Image from "next/image";
import Missed from "../HeroSection/Missed";
import { base_url } from "../Helper/helper";

async function getData(url) {
  const res = await fetch(
    `${base_url}/api/blog/getOneBlogCategoryslug/${url}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function NewsUi({ url }) {
  const data = await getData(url);
  const heading = data?.[0]?.category?.name || "";

  return (
    <>
      {/* Header */}
      <div className="w-full flex items-center justify-center px-4 py-6 gap-4">
        <div className="flex flex-col gap-1 w-full">
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#B00020] text-center">
          Latest {heading} News, Updates & Highlights
        </h1>

        <div className="flex flex-col gap-1 w-full">
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((blog, index) => (
            <Link
              key={blog._id || index}
              href={`/${blog.category.slug}/${blog.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden h-full">

                <Image
                  src={`${base_url}${blog.image}`}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 flex flex-col">

                  {blog.category?.name && (
                    <span className="text-xs bg-[#B00020] text-white px-2 py-1 rounded-full w-fit mb-2">
                      {blog.category.name}
                    </span>
                  )}

                  <h2 className="text-lg font-semibold group-hover:text-[#B00020] line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                    {blog.subtitle}
                  </p>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Missed />
    </>
  );
}
