import { twMerge } from "tailwind-merge";
import TextStyles from "../utils/textstyle";

export default function About() {
  return <div className={twMerge(TextStyles.H1, "")}>About</div>;
}
