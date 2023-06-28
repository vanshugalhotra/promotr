import SingleServiceCard from "@/components/Cards/SingleServiceCard";
import React from "react";

const Marketing = () => {
  return (
    <section>
      <div className="h-[50vh] bg-purple-100"></div>
      <div className="service-cards flex justify-center  my-28">
        <div className="cards grid">
          <SingleServiceCard
            icon={"/Assets/icons/services/seo.png"}
            name={"Digital Marketing"}
            count={499}
            desc={"Marketing Options"}
          />
        </div>
      </div>
    </section>
  );
};

export default Marketing;
