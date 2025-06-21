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
    <header className="no-select english">
      <div className="flex justify-between flex-wrap gap-4">
        {/* Contact Info */}
        <div>
          <p className="text-lg font-bold">
            Send missives at:{" "}
            <span className="cursor-pointer hover:underline">
              mythandmoss.lewellwen
            </span>
          </p>
          <p className="text-sm">
            The Hollow Times, Editor&apos;s Tower, Level III, 13 Whispers Alley,
            Moonrest Hollow, Northern Realms, Cloud Province, 404-LX
          </p>
        </div>

        {/* Date & Time */}
        <div className="text-end font-bold">
          <p className="text-lg">{date}</p>
          <p className="text-md">Local Time {time}</p>
        </div>
      </div>
      <hr className="mt-4 border-2" />
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="text-7xl font-extrabold my-4 text-center font-heading">
          Myth & Moss
        </h1>
      </div>
      <hr className="mb-0.5 border-1" /> <hr className=" border-1" />
      {/* Tagline */}
      <p className="text-center text-lg mt-3">
        Delivered daily by owlpost, etherwaves & fading moonlight.
      </p>
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/images/img67.png"
          alt="Myth & Moss Logo"
          width={320}
          height={100}
          className="object-contain"
        />
      </div>
    </header>
  );
};
