import Link from 'next/link';

export default function Continue() {
  return (
    <main className="p-4 text-center">
      <h1>Continue as</h1>
      <div className="flex flex-col items-center gap-4">
        <Link href="/career">
          <button className="text-blue-600 underline">Students</button>
        </Link>
        <Link href="/career">
          <button className="text-blue-600 underline">Career Coach & Mentor</button>
        </Link>
        <Link href="/career">
          <button className="text-blue-600 underline">Employer</button>
        </Link>
        <Link href="/career">
          <button className="text-blue-600 underline">GCA</button>
        </Link>
      </div>
    </main>
  );
}
