import React from "react";

function ServDis() {
  const info = [
    {
      title: "Visual & Product Design",
      image: "services-visual.svg",
      description:
        "We look to translate thought into reality and use visuals, typography and creative artistry to achieve the same. All aspects of your brand, from logos to websites, business cards to social media content are carefully crafted to enhance your brand’s image. We also customize posters and design products from scratch allowing for innovation and originality to take flight.",
    },
    {
      title: "User Experience Design",
      image: "services-uexd.svg",
      description:
        "We design user centered interfaces for software and apps by conducting thorough UX research and mapping user experiences. We aim to connect business goals to user needs by defining product strategy through research, testing and refinement.  The design elements of a product or service are in sync to ensure the conversation between the user and the product is enjoyable, smooth and memorable",
    },
    {
      title: "Development and Tech",
      image: "services-devtech.svg",
      description:
        "We bring your fascinating ideas from a scintillating design to a full fledged working application using the latest tech stacks to give your product the best possible performance.",
    },
  ];

  return (
    <div className="w-full z-20 -mb-52 relative">
      {info.map((item, index) => {
        return index % 2 != 0 ? (
          <div
            key={index}
            className="w-full flex items-center z-20 relative mb-24 space-x-10"
          >
            <div className="w-6/12">
              <div className="w-full">
                <h1 className="font-productsans text-white font-medium text-5xl w-auto ml-28">
                  {item.title}
                </h1>
              </div>
              <div className="ml-28">
                <p className="text-lg text-white mt-6 w-full">
                  {item.description}
                </p>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative left-1/2 transform -translate-x-1/2 mt-8"
                >
                  <path
                    d="M31.5371 5.37401L28.9208 7.99031L45.8355 24.905L1.84462 24.3185L1.89447 28.0573L45.8854 28.6438L29.4158 45.1134L32.1028 47.8004L53.0331 26.8701L31.5371 5.37401Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-5/12 max-h-96 mr-32">
              <img className="object-fill rounded-3xl" src={item.image} />
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="w-full flex items-center z-20 relative mb-24 space-x-10"
          >
            <div className="w-5/12 ml-20 max-h-96">
              <img className="object-fill rounded-3xl" src={item.image} />
            </div>
            <div className={"w-5/12" + (index == 2 ? " mt-36" : "")}>
              <div className="w-full flex flex-col">
                <h1 className="font-productsans text-white font-medium text-5xl">
                  {item.title}
                </h1>
              </div>
              <div>
                <p className="text-lg text-white mt-6 w-full">
                  {item.description}
                </p>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative left-1/2 transform -translate-x-1/2 mt-8"
                >
                  <path
                    d="M31.5371 5.37401L28.9208 7.99031L45.8355 24.905L1.84462 24.3185L1.89447 28.0573L45.8854 28.6438L29.4158 45.1134L32.1028 47.8004L53.0331 26.8701L31.5371 5.37401Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
      <h1 className="w-full text-white text-5xl font-prompt font-light mt-52 text-center relative">
        Allow us to Elevate your Brand
      </h1>
      <button className="bg-accent-color w-36 h-12 rounded-xl text-white focus:outline-none text-lg relative left-1/2 transform -translate-x-1/2 mt-10 mb-32">
        Talk To Us
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <div className="h-full">
      <h1 className="w-full text-white text-7xl font-prompt font-bold pt-24 ml-20 mb-32">
        Our Services
      </h1>
      <ServDis />
    </div>
  );
}
