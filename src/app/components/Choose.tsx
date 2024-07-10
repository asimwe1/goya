import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaStarAndCrescent } from "react-icons/fa6"
import ChoiceItem from "./ChoiceItem"


export default function Choose() {
  return(
    <main>
      <div>
        <div className="border p-2">
          <div>
            <h1 className="font-semibold uppercase text-2xl">Find yourself</h1>
          </div>
          <div className='py-4 text-xl font-medium text-blue-500'>
            <h1>Choose a career coach & mentor</h1>
          </div>
        </div>
        <div>
          <ChoiceItem/>
          <ChoiceItem/>
          <ChoiceItem/>
          <ChoiceItem/>
        </div>
      </div>

    </main>
  )
}