interface TravelDestinationProps {}
import Azores from "@/assets/images/azore.jpg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const HREF_BASE_URL = "/travel";

interface Destination {
  location: string;
  image: {
    src: string | StaticImport;
    alt: string;
  };
}

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  const url = new URL("https://localhost:3000" + HREF_BASE_URL);
  return ( 
    <div>
      <Image src={destination.image.src} placeholder="blur" className="h-full w-full" alt={destination.image.alt} />
      <div> 
        <p>{destination.location}</p>
      </div>
      <link href={url.pathname} className="">Show {destination.location}</link>
    </div>
  )
}

const destinations: Destination = [

]

export default function TravelDestination() {
  return <div className="bg-blue-900 w-max pt-2 pb-2 pl-5 pr-5 rounded full h-max ">Travel Destination
  <div className="">
    {destinations.map((destination))} 
    </div></div>;
}
