import { isAllOf } from "@reduxjs/toolkit";
import { businessType } from "../../svg-buttons/business-type";
import { BodyHomePage } from "../Body/BodyHomePage";
import { HeaderHomePage } from "../Header/HeaderHomePage";
import { getBusinessFromBackEnd } from "../../call-backend/getAllBusinesses";
import { useDispatch } from "react-redux";

export const HomePage = () => {

  return (
    <div id="homepage">
      <HeaderHomePage />
      <BodyHomePage />
    </div>
  );
};
