// "use client";

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useState } from 'react';

// export default function Signup() {
//   const router = useRouter(); // Ensure this is called at the top level
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     dob: ''
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSignup = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.password || !formData.dob) {
//       alert("Please fill in all fields");
//       return;
//     }

//     router.push('/continue-as');
//   };

//   return (
//     <main className="">
//       <div>
//         <form onSubmit={handleSignup}>
//           <div className="p-4 text-center px-6 text-3xl font-semibold text-blue-500">
//             <h1>Create New Account</h1>
//           </div>
//           <div className="flex items-center justify-center gap-3 p-2">
//             <p className='opacity-75'>Already registered?</p>
//             <button className="text-white p-[5px] px-7 rounded bg-blue-600">
//               <Link href="/login">Login</Link>
//             </button>
//           </div>
//           <div className='px-2'>
//             <div className="flex flex-col items-center justify-center p-1">
//               <label htmlFor="name" className='text-[.9rem] font-semibold opacity-55'>NAME</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className='border bg-slate-300 p-2 rounded outline-none w-full text-center'
//               />
//             </div>
//             <div className="flex flex-col items-center justify-center p-1">
//               <label htmlFor="email" className='text-[.9rem] font-semibold opacity-55'>EMAIL</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className='border bg-slate-300 p-2 rounded outline-none w-full text-center'
//               />
//             </div>
//             <div className="flex flex-col items-center justify-center p-1">
//               <label htmlFor="password" className='text-[.9rem] font-semibold opacity-55'>PASSWORD</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className='border bg-slate-300 p-2 rounded outline-none w-full text-center'
//               />
//             </div>
//             <div className="flex flex-col items-center justify-center p-1">
//               <label htmlFor="dob" className='text-[.9rem] font-semibold opacity-55'>DATE OF BIRTH</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 className='border bg-slate-300 p-2 rounded outline-none w-full text-center'
//               />
//             </div>
//           </div>
//           <div className='flex items-center justify-center px-3 py-4'>
//             <button type="submit" className='border p-2 w-full text-white rounded bg-blue-600'>Sign up</button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }
