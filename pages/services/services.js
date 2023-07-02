import React from "react";
import ServiceCard from "@/components/Cards/ServiceCard";

const Services = () => {
  return (
    <section className="">
      <div className="h-[50vh] bg-purple-100"></div>
      <div className="flex justify-center items-center my-10">
        <div className="services-cards py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            name={"Traditional Marketing"}
            desc={"Lorem ipsum is are many variations of pass of majority."}
            image={"/Assets/icons/services/Yellow/traditional_marketing.png"}
            url={"/services/marketing"}
          />
          <ServiceCard
            name={"Digital Marketing"}
            desc={"Lorem ipsum is are many variations of pass of majority."}
            image={"/Assets/icons/services/Yellow/digital_marketing.png"}
            url={"/services/marketing"}
          />
          <ServiceCard
            name={"Graphic Designing"}
            desc={"Lorem ipsum is are many variations of pass of majority."}
            image={"/Assets/icons/services/Yellow/graphic_design.png"}
            url={"/services/marketing"}
          />
          <ServiceCard
            name={"Web Development"}
            desc={"Lorem ipsum is are many variations of pass of majority."}
            image={"/Assets/icons/services/Yellow/web_development.png"}
            url={"/services/marketing"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
