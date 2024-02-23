import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [selected, setSelected] = useState("home");

  return (
    <div id="landing-home" className="relative h-screen">
      {/* Color Backgrounds */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-bl from-dark-purp via-dark-purp to-black"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-dark-grey via-dark-grey to-black"></div>

      {/* Centered Images */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="flex flex-col space-y-10">
          <Image
            src="/assets/largelogo.png"
            alt="PlanIt Fitness Logo"
            width={300} // Adjust the size as needed
            height={300}
            layout="intrinsic"
          />
          <button className="bg-white text-pretty text-3xl text-dark-purp rounded-full p-4 transition-transform duration-300 hover:scale-110">
            GET STARTED
          </button>
          <Image
            src="/assets/fitwoman.png"
            alt="Fit Woman"
            width={300} // Adjust the size as needed
            height={300}
            layout="intrinsic"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="absolute top-0 left-0 m-4 pl-4 z-20">
        <div className="flex flex-row space-x-10 text-2xl">
          <Link
            href="#landing-home"
            className={selected === "home" && `scale-110`}
            onClick={() => setSelected("home")}
          >
            Home
          </Link>
          <Link
            href="#landing-about"
            className={selected === "about" && `scale-110`}
            onClick={() => setSelected("about")}
          >
            About
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 m-4 pr-4 z-20">
        <div className="flex flex-row space-x-10 text-2xl">
          <Link
            href="/login"
            className={selected === "signin" && `scale-110`}
            onClick={() => setSelected("signin")}
          >
            Sign In
          </Link>
          <Link
            href="#footer"
            className={selected === "contact" && `scale-110`}
            onClick={() => setSelected("contact")}
          >
            Contact With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
