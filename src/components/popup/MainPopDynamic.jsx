"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainPopDynamic() {
  const [popup, setPopup] = useState(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const getPopup = async () => {
      try {
        const res = await axios.get(
          "https://api.shopsmaart.com/api/popup/getByWebsite/fgstmails"
        );

        setPopup(res.data);
      } catch (err) {
        console.error("Popup API error:", err);
      }
    }; 
    getPopup();
  }, []);

  useEffect(() => {
    if (!popup) return;

    const timer = setTimeout(() => {
      if (pathname !== "/") {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [popup, pathname]);

  
  if (!popup || !open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999] p-4 animate-fadeIn
       bg-black/40 backdrop-blur-sm pointer-events-auto"
    >


      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl relative overflow-hidden pointer-events-auto">

       
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-2 py-1 text-sm hover:bg-black z-10"
        >
          ✕
        </button>



       
        <Link
          href={popup?.linkArray?.[0] || "#"}
          target="_blank"
          className="block"
        >
          <Image
            src={`https://api.shopsmaart.com${popup?.images?.[0]}`}
            alt="Popup"
            width={900}
            height={900}
            className="w-full h-auto rounded-xl"
            priority
          />
        </Link>
      </div>

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
    // <>  </>
  );
}
