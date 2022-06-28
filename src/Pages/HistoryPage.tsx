import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HabitHistoryCard from "../Component/HabitHistoryCard";
import TabBar from "../Component/TabBar";
import { State } from "../redux/types";

export default function HistoryPage() {
  const history_habit_card = require("../Assests/history-habit-card.png");
  const {id} = useParams()
  // const data = useSelector((state: State) => state.habitData.habit.filter((e) => (e.id === Number(id))));
  return (
    <div className="home-page flex justify-end items-center px-3 md:pr-[20%] ">
      <div className="mobile-design ">
        
        <div className="p-4">
          <img src={history_habit_card} alt="History Habit Card" className="h-40 w-full" />

          {/* <div className="text-xl font-normal">{data[0].title}</div> */}
          <div className="history-card  max-h-[44vh] overflow-y-scroll">
             {
              // data[0].day.map( (e, index) => (
              //   <HabitHistoryCard
              //   day={e.day}
              //   habitStatus={e.status}
              //   index={index}
              //   key={index}
              //   id={Number(id)}
              //   />
              // ) )
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
