import Choose from './components/Choose'
import Continue from './components/Continue'
import Career from './components/Career'
import ChoiceItem from './components/ChoiceItem'
import Link from 'next/link'
// import Signup from './components/Signup'
import Login from './components/Login'



export default function Home() {

  const handleSignup = async () => {
    //Signup algorithm here ...

  }



  return (
    <main className="">
      <Link href='/login'>
       <Login/>
      </Link>
      {/* <Link href='/signup'>
       <Signup/>
      </Link> */}
      <Link href='/continue-as'>
       <Continue/>
      </Link>
      <Link href='/career'>
       <Career/>
      </Link>
      <Link href='/choose'>
       <Choose/>
      </Link>
    </main>
  );
}
