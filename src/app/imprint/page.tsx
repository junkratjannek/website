import { twMerge } from "tailwind-merge";
import TextStyles from "../utils/textstyle";

export default function Imprint() {
  return (
    <div className="">
      <p className={twMerge("", "")}>Imprint for the following webpage: jannekkl.com</p>
      <p>
        Jannek Kloettschen
      </p>
      <p>Bahnstraße 111A, 16727 Oberkrämer, Deutschland</p>
      <p>jannek.kloettschen@gmx.de</p>
      <p>+49 151 55478709</p>
    </div>
  );
}
