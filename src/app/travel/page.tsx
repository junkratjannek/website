import { twMerge } from "tailwind-merge";
import TextStyles from "../utils/textstyle";
import TravelDestination from "../componentes/travelDestination";

export default function Travel() {
  return (
    <div>
      <div className={twMerge(TextStyles.H1, "")}>Travel</div>
      <div className="">In this page I want to share my travel expereriences.</div>
      <TravelDestination /> 
    </div>
  );
}
