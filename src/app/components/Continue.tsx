import Link from 'next/link';
import Image from 'next/image';
import { FaHouse } from 'react-icons/fa6';

export default function Continue() {
  return (
    <main className="p-4 flex flex-col text-center items-center justify-center ">
      <Image
      src={'/logo.png'}
      alt={''}
      width={300}
      height={250}
      >

      </Image>
      <h1 className='text-[2rem] font-bold text-[#6562DF] font-serif '>Continue as</h1>
      <div className="flex flex-col items-center gap-4">
        <div className='flex space-x-[4rem] items-center'>
        <Image
        className='w-[10rem] h-[6rem] '
        src={'/logo.png'}
        alt={''}
        height={100}
        width={100}
        />
        <Link href="/career">
          <button className="font-bold text-white bg-[#6562DF] px-[2rem] rounded-[10px] py-[0.6rem] ">Students</button>
        </Link>

        </div>
        <div className='flex space-x-[4rem] items-center'>
        <Image
        className='w-[10rem] h-[6rem] '
        src={'/logo.png'}
        alt={''}
        height={100}
        width={100}
        />
                <Link href="/career">
          <button className="font-bold text-white bg-[#6562DF] px-[1rem] rounded-[10px] py-[0.6rem]">Career Coach <br/>& Mentor</button>
        </Link>

        </div>
        <div className='flex space-x-[4rem] items-center'>
        <Image
          className='w-[10rem] h-[6rem] '
          src={'/logo.png'}
        alt={''}
        height={100}
        width={100}
        />
                <Link href="/career">
          <button className="font-bold text-white bg-[#6562DF] px-[2rem] rounded-[10px] py-[0.6rem]">Employer</button>
        </Link>

        </div>
        <div className='flex space-x-[4rem] items-center'>
        <Image
        className='w-[10rem] h-[6rem] '
        src={'/logo.png'}
        alt={''}
        height={100}
        width={100}
        />
                <Link href="/career">
          <button className="font-bold text-white bg-[#6562DF] px-[3rem] rounded-[10px] py-[0.6rem]">GCA</button>
        </Link>

        </div>

        <div className='mt-[5rem] w-[4rem] h-[4rem] flex items-center justify-center bg-[#6562DF] rounded-[30px] '>
          <Link
          href={'/'}
          >
          <FaHouse className='w-[2.5rem] h-[2.5rem] ' />
          </Link>
        </div>

      </div>
    </main>
  );
}
