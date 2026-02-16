import FirstHero from "../Hero/FirstHero";
import TopPicks from "../Hero/TopPicks";
import LatestNews from "../Hero/LatestNews";
import Trending from "../HeroSection/Trending";
import Missed from "../HeroSection/Missed";
// import { base_url } from "../Helper/helper";
import Image from "next/image";

// ✅ Server-side data fetching
// async function getNews() {
//   try {
//     const res = await fetch(`${base_url}/api/blog/getAllBlog`, {
//       cache: "no-store", // always fresh data
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch news");
//     }

//     return res.json();
//   } catch (error) {
//     // console.error(error);
//     return null;
//   }
// }

const Home = async ( {news}) => {
  // const news = await getNews();

  return (
    <>
      <div className="w-full mx-auto px-4 pb-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Left - Top Picks */}
        <div className="md:col-span-1">
          <a
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Image
              src="/images/aditybirla.png"
              alt="Ad"
              priority
              className="mt-4 rounded w-full h-auto object-contain"
              width={300}
              height={200}
            />
          </a>

          <TopPicks news={news} />

          <div className="mt-4 space-y-1">
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
          </div>
        </div>

        {/* Center - Hero */}
        <div className="md:col-span-2">
          <FirstHero news={news} />
        </div>

        {/* Right - Latest News */}
        <div className="md:col-span-1">
          <LatestNews news={news} />

          <div className="mt-4 space-y-1">
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
          </div>

          <a
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Image
              src="/images/aditybirla.png"
              alt="Ad"
              priority
              className="mt-4 rounded w-full h-auto object-contain"
              width={300}
              height={200}
            />
          </a>
        </div>
      </div>

      <div className="w-full px-6 overflow-hidden">
        <div className="space-y-2 mx-auto max-w-none">
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
          <hr className="h-px bg-gray-400 border-0" />
        </div>
      </div>

      <div className="py-4">
        <Trending news={news} />
      </div>

      <Missed />
    </>
  );
};

export default Home;
