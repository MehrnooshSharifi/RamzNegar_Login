import Image from "next/image";
import imageTwo from "../assets/images/imageTwo.svg";
const RamznegarImage = () => {
  return (
    <div className="flex items-center justify-center text-center p-10  lg:p-20 xl:p-32">
      <Image src={imageTwo} alt="ramznegar" className=" w-full h-full" />
    </div>
  );
};

export default RamznegarImage;
