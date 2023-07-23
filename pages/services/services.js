import React from "react";
import ServiceCard from "@/components/Cards/ServiceCard";

const Services = () => {
  return (
    <div className="relative w-full min-h-[450px]">
      <div className="h-[450px] w-full bg-[url('/Assets/background/services2.jpg')] bg-center bg-no-repeat bg-cover opacity-100"></div>
      <div className="flex justify-center items-center my-10">
        <div className="services-cards py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ServiceCard
            name={"Traditional Marketing"}
            desc={"Timeless techniques, reaching hearts, making lasting impressions"}
            image={"/Assets/icons/services/Yellow/traditional_marketing.png"}
            url={"/services/traditionalmarketing"}
          />
          <ServiceCard
            name={"Digital Marketing"}
            desc={"Powering your brand's success with expert online strategies"}
            image={"/Assets/icons/services/Yellow/digital_marketing.png"}
            url={"/services/digitalmarketing"}
          />
          <ServiceCard
            name={"Graphic Designing"}
            desc={"Transforming ideas into stunning visuals with creative expertise."}
            image={"/Assets/icons/services/Yellow/graphic_design.png"}
            url={"/services/graphic_designing"}
          />
          <ServiceCard
            name={"Web Development"}
            desc={"Crafting websites that deliver seamless user experiences and results"}
            image={"/Assets/icons/services/Yellow/web_development.png"}
            url={"/services/web_development"}
          />
          <ServiceCard
            name={"Event Management"}
            desc={"Turning visions into reality, making memories that last a lifetime"}
            image={"/Assets/icons/services/Yellow/events.png"}
            url={"/services/eventmanagement"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
