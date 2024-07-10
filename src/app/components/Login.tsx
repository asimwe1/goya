import Link from 'next/link'
import Continue from '../continue';

export default function Login() {


  //Use typescript to implement signup function here
  const handleSignup = async () => {
    //Signup algorithm here ...

  }

  return (
    <main className="">
      <div>
        <form>
          <div className="p-4 text-center px-6 text-3xl font-semibold text-blue-500">
            <h1>Login</h1>
          </div>
          <div className="flex items-center justify-center gap-3 p-2">
            <p>Don't have an account?</p>
            <button className="text-white p-[5px]  px-7 rounded bg-blue-600">signup</button>
          </div>
          <div className='px-2'>
            <div className="flex flex-col items-center justify-center p-1">
              <label htmlFor="name" className='text-[.9rem] font-semibold'>EMAIL</label>
              <input type="text" className='border bg-slate-300 p-2 rounded outline-none w-full text-center' />
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <label htmlFor="name" className='text-[.9rem] font-semibold'>PASSWORD</label>
              <input type="password" className='border bg-slate-300 p-2 rounded outline-none w-full text-center' />
            </div>
          </div>
          <div className='flex items-center justify-center px-3 py-4'>
            <button className='border p-2 w-full text-white rounded bg-blue-600'>Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
}
