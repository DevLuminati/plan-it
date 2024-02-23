import React from "react";
import Image from "next/image";
import { teammates } from "./teams";

function About() {
  return (
    <div className="bg-gradient-to-t from-dark-purp via-dark-grey to-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cloudy-white sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {teammates.map((person) => (
            <li
              key={person.name}
              className="flex flex-col items-center text-center justify-center gap-6 xl:flex-row"
            >
              <img
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.image}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-cloudy-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-400">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-400">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
