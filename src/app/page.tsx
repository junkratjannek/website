import { twMerge } from 'tailwind-merge'
import TextStyles from './utils/textstyle';

export default function Home() {
  return (
    <div className={twMerge(TextStyles.H1, "h-full w-full items-center")}>Jannek Kloettschen</div>
  );
}
