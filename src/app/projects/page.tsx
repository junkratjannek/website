import { twMerge } from "tailwind-merge";
import TextStyles from "../utils/textstyle";

export default function Projects() {
  return <div className={twMerge(TextStyles.H1, "")}>Projects</div>;
}
