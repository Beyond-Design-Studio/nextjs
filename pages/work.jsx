import React from "react";
import styles from "../styles/misc.module.css"

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
    <div className={`w-full ${styles.cont}`}>
      {info.map((item, index) => {
        return (
          <div
            key={index}
            className="gap-16 flex flex-col lg:flex-row justify-between items-center mb-36"
          >
            <div className="flex-1">
              <img className="object-fill z-10 relative rounded-3xl" src={item.image} />
            </div>
            
            <div className={`flex-1 flex flex-col gap-24`}>
              <div className={`w-10/12 flex flex-col items-start ${index % 2 !== 0 ? "lg:items-end" : "lg:items-start"} ` }>
                <h1 className={`font-roboto text-white text-left ${index % 2 !== 0 ? "lg:text-right" : "lg:text-left" } justify-end font-medium text-5xl w-1/2` }>
                  {item.title}
                </h1>
                <div className="w-5/12 h-1 mt-2 border-b-8 border-solid border-accent-color"></div>
              </div>
              <div style={{ backgroundColor: "#231D1D"}} className={`w-full lg:w-10/12 p-8 flex justify-start ${index % 2 !== 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                <div className="w-full lg:w-9/12">
                  <div className="border-t-2 border-solid border-accent-color"></div>
                  <p className="text-accent-color text-lg font-bold pb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-2xl text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        )
      })}
    </div>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen w-ful">
      <h1 className="w-full text-center text-white text-5xl lg:text-7xl font-prompt font-bold py-14 relative z-10">
        Our Work
      </h1>
      <div className="px-12 lg:px-24">
        <WorkDis />
      </div>
      <div className="md:w-72 md:h-full md:bg-accent-color md:fixed md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:z-0 md:opacity-50 hidden md:block"></div>
    </div>
  );
}
