"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const Header = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="no-select english sm:pt-6">
      {/* Contact & Time */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center md:items-start">
        {/* Contact Info */}
        <div className="space-y-1">
          <p className="text-base sm:text-lg font-bold">
            Send missives at:{" "}
            <span className="cursor-pointer hover:underline">
              mythandmoss.lewellwen
            </span>
          </p>
          <p className="text-sm max-w-xl">
            The Hollow Times, Editor&apos;s Tower, Level III, 13 Whispers Alley,
            Moonrest Hollow, Northern Realms, Cloud Province, 404-LX
          </p>
        </div>

        {/* Date & Time */}
        {/* Date & Time */}
        <div className="text-center md:text-right font-semibold text-sm sm:text-base">
          <p className="text-base sm:text-lg">{date}</p>
          <p className="text-sm sm:text-md">Local Time {time}</p>
        </div>
      </div>

      <hr className="mt-4 border-2" />

      {/* Title */}
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold my-4 text-center font-heading leading-tight">
          Myth & Moss
        </h1>
      </div>

      <hr className="border-t border-1 mb-0.5" />
      <hr className="border-t border-1" />

      {/* Tagline */}
      <p className="text-center text-sm sm:text-base mt-3 mb-2 px-2">
        Delivered daily by owlpost, etherwaves & fading moonlight.
      </p>

      {/* Logo */}
      <div className="flex justify-center mt-2">
        <div className="w-64 sm:w-80">
          <Image
            src="/images/img1.png"
            alt="Myth & Moss Logo"
            width={320}
            height={100}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
};
