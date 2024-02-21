import React from "react";
import Image from "next/image";

function About() {
  return (
    <div id="landing-about" className="relative h-screen">
      {/* Color Backgrounds */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-tl from-dark-purp via-dark-purp to-cloudy-grey"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-tr from-dark-grey via-dark-grey to-cloudy-grey"></div>

      <div className="flex flex-col absolute inset-0 justify-center items-center m-6 p-4 mt-12 space-x-4">
        <h1 className="mt-20 text-4xl">About Us</h1>
        <div className="grid grid-cols-4 mt-12">
          <div className="flex flex-col col-span-1 items-center justify-center space-y-6">
            <Image
              src={"/assets/team/sarah.jpeg"}
              alt={"Sarah Alli"}
              height={300}
              width={300}
              className="border-black rounded-full"
            />
            <p>Sarah Alli</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
