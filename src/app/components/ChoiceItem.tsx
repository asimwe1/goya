export default function ChoiceItem() {
  return (
    <main className="p-4 text-center">
      <h1>Choose Career Coach/Mentor</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="border p-4 w-full">
          <p>Mentor 1</p>
          <button className="text-blue-600 underline">Connect</button>
        </div>
        <div className="border p-4 w-full">
          <p>Mentor 2</p>
          <button className="text-blue-600 underline">Connect</button>
        </div>
        <div className="border p-4 w-full">
          <p>Mentor 3</p>
          <button className="text-blue-600 underline">Connect</button>
        </div>
        <div className="border p-4 w-full">
          <p>Mentor 4</p>
          <button className="text-blue-600 underline">Connect</button>
        </div>
      </div>
    </main>
  );
}
