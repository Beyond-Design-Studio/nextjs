import React from "react";

// display for row1 of dev tech page
function Box1() {
  const info = [
    {
      title: "Scalable",
      description:
        "Need to reach an even bigger audience? Our Serverless architecture scales automatically as your usage or user base extends, so you can scale your app or site without hassle",
      image: "dev-scalable.svg",
    },
    {
      title: "Overheads",
      description:
        "We avoid using databases, so that there’s no expensive and time-consuming multiple queries. Static sites are faster, cheaper and lighter with benefits for search rankings.",
      image: "dev-overheads.svg",
    },
    {
      title: "Blazing Fast",
      description:
        "Even if the traffic is bigger than usual, with  Jamstack sites you host your websites’ static files in a multi-cloud environment on a CDN with no traffic limitations",
      image: "dev-blazing.svg",
    },
    {
      title: "Safe",
      description:
        "A lot of the most popular WordPress installations are opened to vulnerabilities. Statically rendered websites with no plugins are a fortress and let you save money on security.",
      image: "dev-safe.svg",
    },
  ];
  return (
    <div className="-ml-16 w-full flex flex-wrap justify-evenly">
      {info.map((item, index) => {
        return (
          <div key={index} className="w-72 m-4">
            <div className="w-10/12 flex items-baseline justify-evenly border-b-2 border-accent-color border-solid pb-2 mb-4">
              <h1 className="text-3xl text-accent-color font-semibold">
                {item.title}
              </h1>
              <img className="w-16" src={item.image} />
            </div>
            <p className="text-white font-productsans">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function HeadlessCMS() {
  return (
    <div className="w-full">
      <h1 className="text-center text-gray-400 text-4xl font-productsans mt-44 mb-16">
        Headless CMS
      </h1>
      {/* below div will have the border */}
      <div className="flex justify-between w-10/12 relative left-1/2 transform -translate-x-1/2">
        <img src="dev-leftborder.svg" className="self-start w-20 -mt-20" />
        <div>
          <div className="flex justify-center flex-wrap mb-20">
            <img className="w-72 mx-10" src="dev-contentful.svg" />
            <img className="w-72 mx-10" src="dev-netlify.svg" />
            <img className="w-72 mx-10" src="dev-tinacms.svg" />
          </div>
          <div className="flex justify-center">
            <img className="w-72 mx-10" src="dev-storyblok.svg" />
            <img className="w-72 mx-10" src="dev-wordpress.svg" />
          </div>
        </div>
        <img src="dev-rightborder.svg" className="self-end w-20 -mb-20" />
      </div>
    </div>
  );
}

function TraditionalCMS() {
  return (
    <div className="w-full">
      <h1 className="text-center text-gray-400 text-4xl font-productsans mt-44 mb-24">
        Traditional CMS
      </h1>
      {/* below div will have the border */}
      <div className="flex justify-between w-10/12 relative left-1/2 transform -translate-x-1/2">
        <img src="dev-leftborder.svg" className="self-start w-20 -mt-20" />
        <div>
          <div className="flex justify-center flex-wrap mb-20">
            <img className="w-72 mx-10" src="dev-webflow.svg" />
            <img className="w-72 mx-10" src="dev-shopify.svg" />
          </div>
          <div className="flex justify-center">
            <img className="w-72 mx-10" src="dev-wix.svg" />
            <img className="w-72 mx-10" src="dev-wordpress.svg" />
          </div>
        </div>
        <img src="dev-rightborder.svg" className="self-end w-20 -mb-20" />
      </div>
    </div>
  );
}

function Frameworks() {
  return (
    <div className="w-full">
      <h1 className="text-center text-gray-400 text-4xl font-productsans mt-44 mb-24">
        Frameworks
      </h1>
      {/* below div will have the border */}
      <div className="flex justify-between w-10/12 relative left-1/2 transform -translate-x-1/2">
        <img src="dev-leftborder.svg" className="self-start w-20 -mt-20" />
        <div>
          <div className="flex justify-center flex-wrap mb-20">
            <img className="w-72 mx-10" src="dev-angular.svg" />
            <img className="w-72 mx-10" src="dev-node.svg" />
            <img className="w-72 mx-10" src="dev-react.svg" />
          </div>
          <div className="flex justify-center">
            <img className="w-72 mx-10" src="dev-reactnative.svg" />
            <img className="w-72 mx-10" src="dev-next.svg" />
            <img className="w-72 mx-10" src="dev-flutter.svg" />
          </div>
        </div>
        <img src="dev-rightborder.svg" className="self-end w-20 -mb-20" />
      </div>
    </div>
  );
}

function Deployment() {
  return (
    <div className="w-full">
      <h1 className="text-center text-gray-400 text-4xl font-productsans mt-44 mb-24">
        Deployment
      </h1>
      {/* below div will have the border */}
      <div className="flex justify-between w-10/12 relative left-1/2 transform -translate-x-1/2">
        <img src="dev-leftborder.svg" className="self-start w-20 -mt-20" />
        <div>
          <div className="flex justify-center flex-wrap mb-20">
            <img className="w-72 mx-10" src="dev-firebase.svg" />
            <img className="w-72 mx-10" src="dev-vercel.svg" />
          </div>
          <div className="flex justify-center">
            <img className="w-72 mx-10" src="dev-aws.svg" />
            <img className="w-72 mx-10" src="dev-netlify.svg" />
          </div>
        </div>
        <img src="dev-rightborder.svg" className="self-end w-20 -mb-20" />
      </div>
    </div>
  );
}

export default function DevTech() {
  return (
    <div className="w-full -mb-16">
      <div className="ml-16 w-full mb-24">
        <h1 className="text-6xl text-white text-productsans max-w-2xl font-bold border-b-4 border-solid border-accent-color pb-4 mb-32 pt-24">
          Development and Tech
        </h1>
        <Box1 />
      </div>
      <div className="w-full">
        <h1 className="text-white text-center text-4xl font-productsans font-bold">
          Technologies we use
        </h1>
        <p className="text-white w-6/12 text-xl text-center relative left-1/2 transform -translate-x-1/2 mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <HeadlessCMS />
      <TraditionalCMS />
      <Frameworks />
      <Deployment />
      <div>
        <h1 className="w-full text-white text-7xl font-prompt font-bold mt-52 text-center relative">
          Let's Build!
        </h1>
        <button className="bg-accent-color w-36 h-12 rounded-xl text-white focus:outline-none text-lg relative left-1/2 transform -translate-x-1/2 mt-10">
          Talk To Us
        </button>
      </div>
    </div>
  );
}
