"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function NewPopup() {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(null);

  // Fetch popup data
  useEffect(() => {
    const getPopup = async () => {
      try {
        const res = await axios.get(
          "https://api.shopsmaart.com/api/popup/getByWebsite/fgstmails"
        );

        // Ensure valid data exists
        if (
          res.data &&
          Array.isArray(res.data.images) &&
          res.data.images.length > 0 &&
          Array.isArray(res.data.linkArray) &&
          res.data.linkArray.length > 0
        ) {
          setPopup(res.data);
        }
      } catch (err) {
        console.error("Popup API error:", err);
      }
    };

    getPopup();
  }, []);

  // Open popup ONLY when API data exists
  useEffect(() => {
    if (!popup) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [popup]);

  // Do not render if popup is closed or data missing
  if (!open ) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-2 py-1 text-sm hover:bg-black z-10"
        >
          ✕
        </button>

        {/* Popup Image */}
        <Link
          href={popup?.linkArray[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={`https://api.shopsmaart.com${popup?.images[0]}`}
            alt="Popup Banner"
            width={900}
            height={900}
            className="w-full h-auto cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
