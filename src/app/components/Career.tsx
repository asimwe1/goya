export default function Career() {
  return (
    <main>
      <div>
        <div className="text-blue-600 text-2xl text-center p-5 font-semibold">
          <h1>Choose your career ...</h1>
        </div>
        <div className="p-2 py-5">
        <div className="p-3">
          <button className="border rounded p-2 w-full bg-blue-500 text-white py-3">Football Player</button>
        </div>
        <div className="p-3">
          <button className="rounded p-2 w-full bg-blue-500 text-white py-3">Software Engeneer</button>
        </div>
        <div className="p-3">
          <button className="rounded p-2 w-full bg-blue-500 text-white py-3">Film Writer</button>
        </div>
        <div className="p-3">
          <button className='rounded p-2 w-full bg-blue-500 text-white py-3'>Entreprenuer</button>
        </div>
        </div>
      </div>
      <div className="p-3 pt-[3rem]">
        <button className="bg-blue-500 p-2 w-full rounded text-white py-4">Book</button>
      </div>
    </main>
    
  )
}