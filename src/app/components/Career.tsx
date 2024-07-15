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

      <h1 className='text-[2.5rem] font-bold text-[#6562DF] font-serif'>Choose your career</h1>
      <div className="flex flex-col items-center gap-4 mt-8">
        <Link href="/choose">
          <button className="font-bold text-white bg-[#6562DF] w-[24rem] rounded-[10px] py-[1.2rem]">Football Player</button>
        </Link>
        <Link href="/choose">
          <button className="font-bold text-white bg-[#6562DF] w-[24rem] rounded-[10px] py-[1.2rem]">Software Engineer</button>
        </Link>
        <Link href="/choose">
          <button className="font-bold text-white bg-[#6562DF] w-[24rem] rounded-[10px] py-[1.2rem]">Film Writer</button>
        </Link>
        <Link href="/choose">
          <button className="font-bold text-white bg-[#6562DF] w-[24rem] rounded-[10px] py-[1.2rem]">Entrepreneur</button>
        </Link>
      </div>
      <div className='my-[10rem] '>
      <Link href="/books">
          <button className="font-bold text-white bg-[#6562DF] w-[24rem] rounded-[10px] py-[1.2rem]">Books</button>
        </Link>

      </div>
    </main>
  );
}
