import Link from 'next/link';
import Image from 'next/image';

export default function Career() {
  return (
    <main className="p-4 flex flex-col text-center items-center justify-center">
      <Image
      src={'/logo.png'}
      alt={''}
      width={300}
      height={250}
      />

      <h1 className='text-[2rem] font-bold text-[#6562DF] font-serif'>Choose your career</h1>
      <div className="flex flex-col items-center gap-4 mt-8">
        <Link href="/choice-item">
          <button className="font-bold text-white bg-[#6562DF] w-[20rem] rounded-[10px] py-[1rem]">Football Player</button>
        </Link>
        <Link href="/choice-item">
          <button className="font-bold text-white bg-[#6562DF] w-[20rem] rounded-[10px] py-[1rem]">Software Engineer</button>
        </Link>
        <Link href="/choice-item">
          <button className="font-bold text-white bg-[#6562DF] w-[20rem] rounded-[10px] py-[0.6rem]">Film Writer</button>
        </Link>
        <Link href="/choice-item">
          <button className="font-bold text-white bg-[#6562DF] w-[20rem] rounded-[10px] py-[0.6rem]">Entrepreneur</button>
        </Link>
      </div>
    </main>
  );
}
