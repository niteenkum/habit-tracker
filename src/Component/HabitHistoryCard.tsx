import "./Component.scss";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
// import { State } from "../redux/types";
import { title } from "process";
import { updateDayStatus } from "../Redux/updateHabitSlice";
// import { updateHabitSlice } from "../redux/reducers/updateHabit";
interface IProps {
  day: string;
  habitStatus: "done" | "not-done" | "none";
  handleChange?: (status: "done" | "not-done" | "none") => void;
  id: number;
  index: number;
}

export default function HabitHistoryCard({
  day,
  habitStatus,
  id,
  index,
}: IProps) {
  // const data = useSelector((state: State) => state.habitData.habit[0].day.filter((e) => (e.day === day)));
  const dispatch = useDispatch();

  return (
    <div className="day-history mr-2">
      <span>{day}</span>
      <div className="flex justify-between">
        <div
          className={`status mr-2  text-xl ${
            habitStatus === "done" ? "active text-green-500" : "text-slate-200"
          } cursor-pointer`}
          onClick={() => {
          dispatch(
            updateDayStatus({
              id: id,
              index: index,
              status: "done",
            })
            )
        }
         }
        >
          {" "}
          <BsHandThumbsUpFill />
        </div>
        <div
          className={`status mr-2  text-xl ${
            habitStatus === "not-done"
              ? "active text-red-500"
              : "text-slate-200"
          } cursor-pointer`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "not-done",
              })
              )
          }
           }
        >
          <BsHandThumbsDownFill />
        </div>
        <div
          className={`status  text-xl ${
            habitStatus === "none" ? "active text-slate-500" : " text-slate-200"
          } cursor-pointer`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "none",
              })
              )
          }
           }
        >
          {" "}
          <GrSubtractCircle />{" "}
        </div>
      </div>
    </div>
  );
}
