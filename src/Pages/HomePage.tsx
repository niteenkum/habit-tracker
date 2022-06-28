import { AiFillHome, AiOutlineHistory } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../Component/ProgressBar";
import TabBar from "../Component/TabBar";
import TaskCard from "../Component/TaskCard";
import { State } from "../redux/types";
import "./Pages.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const data = useSelector((state: State) => state.habitData )
  return (
    <div className="home-page flex justify-end items-center px-3 md:pr-[20%] ">
      <div className="mobile-design relative">
        {/* The card for displaying the remaining task for today on homepage */}
        <div className="card-for-pending-tasks m-5">
          <div className="text-xl  font-normal text-white p-3 mt-2 w-1/2 ">
            {" "}
            Hey, you have 3 Pending Task for today.
          </div>
        </div>

        {/* This is the section for showing progress of the habits. */}

        <div className="progress-card-shadow-design">
          <div className="mt-12 px-4 pt-2">
            {/* Progess Bar Status of task visually and written format */}
            <div className="mt-4">
              <div className="text-xs text-black font-normal pb-3 flex justify-between items-center">
                <span>3 Task Remaining</span> <span>2/4 (50%)</span>
              </div>
              <ProgressBar percentage={"40%"} />{" "}
              <div className="border-t mt-8"></div>
            </div>

            {/* All todays habit to show */}

            <div className="overflow-y-scroll max-h-[170px] mt-2">
             
            {/* {
               data.habit?.map((e) => (
                <TaskCard
                color="#867CB5"
                habitTitle={e?.title}
                habitDescription={e?.description}
                id={e?.id}
              />
              ))
            } */}
            
            </div>
            <div className="fixed bottom-0 w-full tab-bar -mx-4">
              <AiFillHome
                className="text-blue-400 text-3xl cursor-pointer"
                onClick={() => navigate("/")}
              />
              <BsFillPlusCircleFill
                className="text-blue-400 text-5xl -mt-6 cursor-pointer"
                onClick={() => navigate("/add-new")}
              />
              <AiOutlineHistory
                className="text-blue-400 text-3xl cursor-pointer"
                onClick={() => navigate("/history")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
