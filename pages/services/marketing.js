import React from "react";
import SingleServiceCard from "@/components/Cards/SingleServiceCard";

import { useSelector } from "react-redux";
import PopUp from "@/components/PopUp/PopUp";

const Marketing = () => {
  const showPopup = useSelector((state) => state.services.showPopup);

  return (
    <section>
      <div className="h-[50vh] bg-purple-100"></div>
      <div className="service-cards flex justify-center  my-28">
        <div className="cards grid">
          <div>
            <SingleServiceCard
              icon={"/Assets/icons/services/seo.png"}
              name={"Digital Marketing"}
              count={499}
              desc={"Marketing Options"}
            />
          </div>
        </div>
        {showPopup && <PopUp />}
      </div>
    </section>
  );
};

export default Marketing;
