import Continue from '../continue'
import Link from 'next/link'

export default function Signup() {

  const handleSignup = async () => {
    //Signup algorithm here ...

  }
  return (
    <main className="">
      <div>
        <form>
          <div className="p-4 text-center px-6 text-3xl font-semibold text-blue-500">
            <h1>Create New Account</h1>
          </div>
          <div className="flex items-center justify-center gap-3 p-2">
            <p className='opacity-75'>Already registered?</p>
            <button className="text-white p-[5px]  px-7 rounded bg-blue-600">Login</button>
          </div>
          <div className='px-2'>
            <div className="flex flex-col items-center justify-center p-1">
              <label htmlFor="name" className='text-[.9rem] font-semibold opacity-55'>NAME</label>
              <input type="text" className='border bg-slate-300 p-2 rounded outline-none w-full text-center' />
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <label htmlFor="name" className='text-[.9rem] font-semibold opacity-55'>EMAIL</label>
              <input type="text" className='border bg-slate-300 p-2 rounded outline-none w-full text-center' />
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <label htmlFor="name" className='text-[.9rem] font-semibold opacity-55'>PASSWORD</label>
              <input type="password" className='border bg-slate-300 p-2 rounded outline-none w-full text-center' />
            </div>
            <div className="flex flex-col items-center justify-center p-1">
              <label htmlFor="dob" className='text-[.9rem] font-semibold opacity-55'>DATE OF BIRTH</label>
              <input type="date" className='border bg-slate-300 p-2 rounded outline-none w-full text-center' />
            </div>
          </div>
          <div className='flex items-center justify-center px-3 py-4'>
            <Link href='continue'>
            <button className='border p-2 w-full text-white rounded bg-blue-600'>Sign up</button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
