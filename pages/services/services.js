import React from "react";

import {
  faPenRuler,
  faLaptopCode,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/components/Cards/ServiceCard";

const Services = () => {
  return (
    <section className="flex justify-center items-center my-10">
      <div className="services-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          name={"Graphic Designing"}
          desc={"Lorem ipsum is are many variations of pass of majority."}
          icon={faPenRuler}
          url={"/services/marketing"}
        />
        <ServiceCard
          name={"Traditional Marketing"}
          desc={"Lorem ipsum is are many variations of pass of majority."}
          icon={faChartLine}
          url={"/services/marketing"}
        />
        <ServiceCard
          name={"Web Development"}
          desc={"Lorem ipsum is are many variations of pass of majority."}
          icon={faLaptopCode}
          url={"/services/marketing"}
        />
      </div>
    </section>
  );
};

export default Services;
