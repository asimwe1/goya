import { FaHome } from 'react-icons/fa'
import { FaUserGraduate, FaChalkboardTeacher, FaBriefcase, FaBuilding } from 'react-icons/fa';
export default function Continue() {
  return (
    <main>
      <div className='p-5 text-center text-2xl'>
        <h1 className='font-semibold text-blue-700'>Continue as ...</h1>
      </div>
      <form>
        <div className='p-2 px-2 flex items-center justify-center gap-5'>
          { /* Yo can replace the image with those provided or an icon from next-icons */}
          <FaUserGraduate className='size-[4rem]' />
          <button className='p-4 w-full px-10 rounded-lg bg-blue-600 text-white'>Student</button>
        </div>
        <div className='p-2 px-2 flex items-center justify-center gap-5'>
          { /* Yo can replace the image with those provided or an icon from next-icons */}
          <FaChalkboardTeacher className='size-[4rem]' />
          <button className='p-4 w-full rounded-lg bg-blue-600 text-white'>Career coach & Mentor</button>
        </div>
        <div className='flex items-center justify-center gap-5 p-2 px-2'>
          { /* Yo can replace the image with those provided or an icon from next-icons */}
          <FaBriefcase className='size-[4rem]' />
          <button className='w-full p-4 px-10 rounded-lg bg-blue-600 text-white'>Employer</button>
        </div>
        <div className='flex items-center justify-center p-2 px-2 gap-5'>
          { /* Yo can replace the image with those provided or an icon from next-icons */}
          <FaBuilding className='size-[4rem]' />

          <button className='p-4 w-full px-10 rounded-lg bg-blue-600 text-white'>GCA</button>
        </div>
      </form>
      <footer className='flex items-center justify-center pt-[4rem] text-3xl text-white'>
        {/* Home Icon here */}

        {/* This icon should redirect to dashboard or Home page */}
        <div className='p-3 bg-blue-600 rounded-[50%]'>
          <FaHome />
        </div>
      </footer>
    </main>
  )
}