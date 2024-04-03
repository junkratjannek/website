import { twMerge } from "tailwind-merge";
import TextStyles from "../utils/textstyle";

export default function Business() {
  return <div className={twMerge(TextStyles.H1, "")}>Business</div>;
}
