import Link from 'next/link';

export default function Career() {
  return (
    <main className="p-4 text-center">
      <h1>Choose your career</h1>
      <div className="flex flex-col items-center gap-4">
        <Link href="/choice-item">
          <button className="text-blue-600 underline">Football Player</button>
        </Link>
        <Link href="/choice-item">
          <button className="text-blue-600 underline">Software Engineer</button>
        </Link>
        <Link href="/choice-item">
          <button className="text-blue-600 underline">Film Writer</button>
        </Link>
        <Link href="/choice-item">
          <button className="text-blue-600 underline">Entrepreneur</button>
        </Link>
      </div>
    </main>
  );
}
