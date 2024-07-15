import { FaStar } from "react-icons/fa";
import Image from "next/image";
import StarRating from "./StarRating";

export default function ChoiceItem() {
  return (
    <main className="p-4 space-y-[2rem] text-center">
      <h1 className='text-[2.3rem] font-bold text-[#6562DF] font-serif'>Choose Career Coach/Mentor</h1>
      <div className="flex flex-col items-start gap-4">
      <div className="flex  border px-[1.5rem] space-x-[2rem] ">
          <Image
          className="w-[10rem]  py-[1.5rem] "
          src={"/12.png"}
          alt={"mentor"}
          width={300}
          height={300}          
          />
        <div className="flex flex-col justify-start items-start p-4 w-full">
          <p className=" text-[#6562DF] text-[1.3rem] font-black ">Alexis Murenzi</p>
          <p className=" text-[#888] text-start">I am an experienced mentor with seven years of mentoring experience</p>
          <StarRating />
          <button className="text-white bg-[#6562DF] w-[10rem] h-[2.5rem] rounded-[10px] my-[1rem] font-bold ">Connect</button>
        </div>

        </div>
        <div className="flex  border px-[1.5rem] space-x-[2rem] ">
          <Image
          className="w-[10rem]  py-[1.5rem] "
          src={"/12.png"}
          alt={"mentor"}
          width={300}
          height={300}          
          />
        <div className="flex flex-col justify-start items-start p-4 w-full">
          <p className=" text-[#6562DF] text-[1.3rem] font-black ">Alexis Murenzi</p>
          <p className=" text-[#888] text-start">I am an experienced mentor</p>
          <StarRating />
          <button className="text-white bg-[#6562DF] w-[10rem] h-[2.5rem] rounded-[10px] my-[1rem] font-bold ">Connect</button>
        </div>

        </div>
        <div className="flex  border px-[1.5rem] space-x-[2rem] ">
          <Image
          className="w-[10rem]  py-[1.5rem] "
          src={"/12.png"}
          alt={"mentor"}
          width={300}
          height={300}          
          />
        <div className="flex flex-col justify-start items-start p-4 w-full">
          <p className=" text-[#6562DF] text-[1.3rem] font-black ">Alexis Murenzi</p>
          <p className=" text-[#888] text-start">I am an experienced mentor</p>
          <StarRating />
          <button className="text-white bg-[#6562DF] w-[10rem] h-[2.5rem] rounded-[10px] my-[1rem] font-bold ">Connect</button>
        </div>

        </div>
        <div className="flex  border px-[1.5rem] space-x-[2rem] ">
          <Image
          className="w-[10rem]  py-[1.5rem] "
          src={"/12.png"}
          alt={"mentor"}
          width={300}
          height={300}          
          />
        <div className="flex flex-col justify-start items-start p-4 w-full">
          <p className=" text-[#6562DF] text-[1.3rem] font-black ">Alexis Murenzi</p>
          <p className=" text-[#888] text-start">I am an experienced mentor with seven years of mentoring experience</p>
          <StarRating />
          <button className="text-white bg-[#6562DF] w-[10rem] h-[2.5rem] rounded-[10px] my-[1rem] font-bold ">Connect</button>
        </div>

        </div>
      </div>
    </main>
  );
}
