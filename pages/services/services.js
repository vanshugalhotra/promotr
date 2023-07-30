import React from "react";
import ServiceCard from "@/components/Cards/ServiceCard";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Promotr - Services</title>
        <meta
          name="description"
          content="Explore our comprehensive range of services including graphic designing, web development, traditional marketing, digital marketing, and event management. Our expert team is ready to elevate your brand and business to new heights."
        />
      </Head>
      <div className="relative w-full min-h-[450px]">
        <div className="h-[450px] w-full bg-[url('/Assets/background/services2.jpg')] bg-center bg-no-repeat bg-cover opacity-100"></div>
        <div className="flex justify-center items-center my-10">
          <div className="services-cards py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServiceCard
              name={"Traditional Marketing"}
              desc={
                "Timeless techniques, reaching hearts, making lasting impressions"
              }
              image={"/Assets/icons/services/Yellow/traditional_marketing.png"}
              url={"/services/traditionalmarketing"}
            />
            <ServiceCard
              name={"Digital Marketing"}
              desc={
                "Powering your brand's success with expert online strategies"
              }
              image={"/Assets/icons/services/Yellow/digital_marketing.png"}
              url={"/services/digitalmarketing"}
            />
            <ServiceCard
              name={"Graphic Designing"}
              desc={
                "Transforming ideas into stunning visuals with creative expertise."
              }
              image={"/Assets/icons/services/Yellow/graphic_design.png"}
              url={"/services/graphic_designing"}
            />
            <ServiceCard
              name={"Web Development"}
              desc={
                "Crafting websites that deliver seamless user experiences and results"
              }
              image={"/Assets/icons/services/Yellow/web_development.png"}
              url={"/services/web_development"}
            />
            <ServiceCard
              name={"Event Management"}
              desc={
                "Turning visions into reality, making memories that last a lifetime"
              }
              image={"/Assets/icons/services/Yellow/event_management.png"}
              url={"/services/eventmanagement"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
