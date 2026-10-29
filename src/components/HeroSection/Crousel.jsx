"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { base_url } from "../Helper/helper";
import Link from "next/link";

const Crousel = () => {
  const [news, setNews] = useState();
  const fetchdata = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
      setNews(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative flex justify-center py-6">
      <div className="w-[90%] lg:w-[100%] relative">
        {/* Left Button */}
        <button
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 shadow"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Right Button */}
        <button
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 shadow"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={18} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {news?.map((slide, i) => (
            <Link
              href={`/${slide?.category?.slug}/${slide?.slug}`}
              key={i}
              className="px-2 block"
            >
              <div className="flex flex-col group">
                {/* Banner Image Container */}
                <div
                  className="relative h-44 md:h-48 bg-cover bg-center rounded-xl overflow-hidden"
                  style={{ backgroundImage: `url('${base_url}${slide?.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Text and Tag Below the Banner */}
                <div className="mt-3 px-1">
                  <div className="inline-block bg-[#B00020] bg-opacity-90 px-3 py-0.5 rounded-full text-xs font-semibold mb-1 shadow-sm text-white">
                    {slide?.tag?.tagname}
                  </div>

                  <p className="text-base font-semibold text-gray-900  truncate">
                    {slide?.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Crousel;