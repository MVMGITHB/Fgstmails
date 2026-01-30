"use client";
import Link from "next/link";

const TopPicks = ({ news = [] }) => {
  if (!Array.isArray(news) || news.length === 0) {
    return <p>No top picks available.</p>;
  }

  return (
    <div className="p-2">
      <span className="text-3xl font-bold text-[#B00020] text-center mb-4 block">
        Top Picks
      </span>

      <div className="flex flex-col gap-4">
        {news.slice(0, 5).map((item, index) => {
          const category = item?.category?.slug || "blog";
          const slug = item?.slug;
          const title = item?.subtitle || item?.title;

          if (!slug) return null;

          return (
            <div key={slug}>
              <Link
                href={`/${category}/${slug}`}
                className="text-md hover:underline cursor-pointer"
              >
                {title}
              </Link>

              {index < 4 && <hr className="h-px my-2 bg-gray-200 border-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPicks;
