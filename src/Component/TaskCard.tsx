import { FiCheckCircle } from "react-icons/fi/index";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateDayStatus } from "../Redux/updateHabitSlice";
// import { State } from "../redux/types";

interface IProps {
  habitTitle: string;
  habitDescription: string;
  id: number;
  habitStatus: string;
  index: number
}

export default function TaskCard({
  habitTitle,
  habitDescription,
  id,
  habitStatus,
  index
}: IProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center gap-5 mt-2 shadow-md"
      // onClick={() => {
      //   navigate(`/history/${id}`);
      // }}
    >
      <div className="flex ">
        {" "}
        <FiCheckCircle
          className={`text-2xl cursor-pointer ${
            habitStatus === "done" ? "text-[#867CB5]" : "text-slate-300"
          }`}
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
        />
        <IoMdCloseCircleOutline
          className={`text-2xl ml-2 cursor-pointer ${
            habitStatus === "not-done" ? "text-[#867CB5]" : "text-slate-300"
          }`}
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
        />
        <AiOutlineMinusCircle
          className={`text-2xl ml-2 cursor-pointer ${
            habitStatus === "none" ? "text-[#867CB5]" : "text-slate-300"
          }`}
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
        />
      </div>

      <div className="flex flex-col">
        <span className="text-base font-bold text-black">{habitTitle}</span>
        <span className="text-xs font-normal text-slate-300">
          {habitDescription}
        </span>
      </div>
    </div>
  );
}
