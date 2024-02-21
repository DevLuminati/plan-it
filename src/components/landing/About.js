import React from "react";
import Image from "next/image";
import { teammates } from "./teams";

function About() {
  return (
    <div
      id="landing-about"
      className="relative h-full bg-gradient-to-t from-dark-purp via-dark-grey to-black"
    >
      <div className="flex flex-col justify-center items-center m-6 p-4 mt-2 space-x-4">
        <div className="flex flex-row items-center justify-center">
          <Image
            src={`/assets/3dphone.png`}
            alt="App Preview"
            width={400}
            height={300}
          />
          <div className="text-xl mx-10 text-center mt-4 pr-10">
            <h1 className="mx-4 text-4xl">What is PlanIt Fitness?</h1>
            <p className="mt-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-6 p-4 mt-2 space-x-4">
        <h1 className="mt-4 text-4xl">Meet The Team</h1>
        <div className="grid grid-cols-4 mt-4 space-x-12 text-center">
          {teammates?.map((mate) => {
            return (
              <div className="flex flex-col col-span-1 items-center justify-center space-y-6 space-x-4 border-white border-2 m-2 p-6 rounded-xl">
                <Image
                  src={mate.image}
                  alt={mate.name}
                  height={200}
                  width={200}
                  className="rounded-full"
                />
                <p>{mate.name}</p>
                <p>{mate.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
