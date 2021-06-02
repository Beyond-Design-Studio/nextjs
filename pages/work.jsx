import React from "react";

function WorkDis() {
  const info = [
    {
      title: "Ellowhale",
      subtitle: "UI/UX Design",
      image: "work-ellowhale.png",
      description:
        "A student/tutor dashboard made for an after school academy. It enables a student to track their performance and the tutor to enter said data.",
    },
    {
      title: "Candid Expressions",
      subtitle: "UI/UX Design",
      image: "work-candid-expressions.png",
      description:
        "A creative content sharing platform to build a community for artists. They draw inspiration from each other while staying true to their authentic creative style.",
    },
    {
      title: "Kimaye",
      subtitle: "Graphic Design",
      image: "work-kimaye.png",
      description:
        "Custom graphics for Kimaye - a farm to home FnV brand. Creatives were used in the launch of two new fruits for their e-comm website. Home page banners were designed for the launch of seasonal fruits and for christmas.",
    },
    {
      title: "RadioQuam",
      subtitle: "Development & Deployment",
      image: "work-radioquam.png",
      description:
        "Developed an entertaiment blog/platform- Radioqaum with the latest tech stack for best performance. We also achieved high SEO score for the platform.",
    },
    {
      title: "Yugma",
      subtitle: "Website Design",
      image: "work-yugma.png",
      description:
        "Tailor-made website platform and creatives for Yugma Net, an active grass-roots environmental initiative in India. An active blog integration, to further the cause of environmental change in India, was required and was based on the unique brand identity of Yugma.",
    },
  ];

  return (
    <div className="w-full z-20 -mb-52">
      {info.map((item, index) => {
        return index % 2 == 0 ? (
          <div
            key={index}
            className="w-full flex justify-between items-center z-20 relative mb-36"
          >
            <div className="w-5/12">
              <div className="w-6/12">
                <h1 className="font-roboto text-white font-medium text-5xl w-auto ml-32">
                  {item.title}
                </h1>
                <div className="w-5/12 h-1 mt-2 border-b-8 border-solid border-accent-color ml-32"></div>
              </div>
              <div className="w-10/12 mt-24 bg-red-900 bg-opacity-20 ml-24 pb-8 pt-8">
                <div className="w-8/12 border-t-2 border-solid border-accent-color ml-6"></div>
                <p className="text-accent-color w-3/12 text-lg ml-10 mt-2 font-bold">
                  {item.subtitle}
                </p>
                <p className="text-2xl text-white w-8/12 ml-10 mt-6">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="w-5/12 mr-32">
              <img className="object-fill rounded-3xl" src={item.image} />
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="w-full flex justify-between items-center z-20 relative mb-36"
          >
            <div className="w-5/12 ml-20">
              <img className="object-fill rounded-3xl" src={item.image} />
            </div>
            <div className="w-5/12">
              <div className="w-6/12 flex flex-col items-end ml-20">
                <h1 className="font-roboto text-white font-medium text-5xl w-auto text-right">
                  {item.title}
                </h1>
                <div className="w-5/12 h-1 mt-2 border-b-8 border-solid border-accent-color"></div>
              </div>
              <div className="w-10/12 mt-24 bg-red-900 bg-opacity-20 pb-8 pt-8">
                <div className="w-8/12 border-t-2 border-solid border-accent-color ml-24"></div>
                <p className="text-accent-color w-3/12 text-lg ml-32 mt-2 font-bold">
                  {item.subtitle}
                </p>
                <p className="text-2xl text-white w-8/12 ml-32 mt-6">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Work() {
  return (
    <div className="h-full">
      <h1 className="w-full text-center text-white text-7xl font-prompt font-bold pt-14 relative z-10">
        Our Work
      </h1>
      <WorkDis />
      <div className="md:w-72 md:h-full md:bg-red-800 md:fixed md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:z-0 md:opacity-95 hidden md:block"></div>
    </div>
  );
}
