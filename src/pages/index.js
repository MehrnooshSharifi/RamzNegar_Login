import RamznegarImage from "../components/RamzNegarImage";
import Image from "next/image";
import seiframz from "../assets/images/SeifRamz.svg";
import FormComponent from "../components/Form";
const SignupPage = () => {
  return (
    <div className="bg-ramznegarbg w-scree h-fit flex items-center ">
      <div className="bg-white flex justify-between items-center container mx-auto lg:w-full h-full relative mt-6 ">
        <Image src={seiframz} alt="seiframz" className="absolute top-4 right-10 " />
        <div className=" hidden md:block bg-gradient-to-b from-gradientOne to bg-gradientTwo rounded-tr-[50px] rounded-br-[50px] w-1/2 h-[900px]">
          <RamznegarImage />
        </div>
        <div className=" w-1/2 container mx-auto ">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
