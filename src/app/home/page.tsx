import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4 text-center">
      <h1>Welcome to the Home Page</h1>
      <div className="flex flex-col items-center gap-4">
        <Link href="/login">
          <button className="text-blue-600 underline">Login</button>
        </Link>
        <Link href="/signup">
          <button className="text-blue-600 underline">Signup</button>
        </Link>
      </div>
    </main>
  );
}
