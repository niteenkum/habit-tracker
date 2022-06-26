import "./Component.scss"
import { BsHandThumbsUpFill, BsHandThumbsDownFill} from "react-icons/bs";
import { GrSubtractCircle } from "react-icons/gr";
interface IProps{
    day: string;
    habitStatus: "done" | "not-done" | "none";
    handleChange?: (status: "done" | "not-done" | "none") => void;
}

export default function HabitHistoryCard({day, habitStatus}: IProps) {
  return (
    <div className='day-history mr-2'>
        <span>{day}</span>
        <div className='flex justify-between' >
            <div className={`status mr-2  text-xl ${ habitStatus === "done" ? 'active text-green-500' : 'text-slate-200'} cursor-pointer`}> <BsHandThumbsUpFill/></div>
            <div className={`status mr-2  text-xl ${ habitStatus === "not-done" ? 'active text-red-500' : 'text-slate-200'} cursor-pointer`}><BsHandThumbsDownFill/></div>
            <div className={`status  text-xl ${ habitStatus === "none" ? 'active text-slate-500' : ' text-slate-200'} cursor-pointer`}> <GrSubtractCircle/> </div>
        </div>
    </div>
  )
}
