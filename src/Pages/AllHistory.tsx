import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HabitHistoryCard from "../Component/HabitHistoryCard";
import TabBar from "../Component/TabBar";
import Task from "../Component/Task";
import { RootState } from "../Redux/store";
// import { State } from "../redux/types";

export default function AllHistoryPage() {
  const history_habit_card = require("../Assests/history-habit-card.png");
  const {id} = useParams()
  // const data = useSelector((state: State) => state.habitData.habit.filter((e) => (e.id === Number(id))));
  const data: any  = useSelector((state: RootState) => state.updateHabit);
  const {updateHabit } = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div className="home-page flex justify-end items-center px-3 md:pr-[20%] ">
      <div className="mobile-design ">
        
        <div className="p-4">
          <img src={history_habit_card} alt="History Habit Card" className="h-40 w-full" />

          {/* <div className="text-xl font-normal">{data[0].title}</div> */}
          <div className="history-card  max-h-[44vh] overflow-y-scroll">
             {
              data[Number(id) - 1]?.day?.map( (e: any, index: number) => (
                <HabitHistoryCard
                day={e.day}
                habitStatus={e.status}
                index={index}
                key={index}
                id={Number(id)-1}
                />
              ) )
             }
             {
              updateHabit?.map((e: any, index) => (
                <Task
                habitTitle={e?.title}
                habitDescription={e?.description}
                id={e?.id}
                key={index}
                />
              ))
            }

          </div>
        </div>
        <div className="fixed bottom-0 w-full ">
          <TabBar />
        </div>
      </div>
    </div>
  );
}
