import React from "react";
import HabitHistoryCard from "../Component/HabitHistoryCard";
import TabBar from "../Component/TabBar";

export default function HistoryPage() {
  const history_habit_card = require("../Assests/history-habit-card.png") 
  return (
    <div className="home-page flex justify-end items-center px-3 md:pr-[20%] ">
      <div className="mobile-design ">
        
        <div className="p-4">
          <img src={history_habit_card} alt="History Habit Card" className="h-40 w-full" />

          <div className="text-xl font-normal">Read a book</div>
          <div className="history-card  max-h-[44vh] overflow-y-scroll">
              <HabitHistoryCard
              day="Monday"
              habitStatus="done"
              />
              <HabitHistoryCard
              day="Tuesday"
              habitStatus="done"
              />
              <HabitHistoryCard
              habitStatus="not-done"
              day="Wednesday"/>
                <HabitHistoryCard
              day="Thursday"
              habitStatus="none"
              />
              <HabitHistoryCard
              day="Friday"
              habitStatus="done"
              />
                <HabitHistoryCard
              day="Saturday"
              habitStatus="not-done"
              />
                <HabitHistoryCard
              day="Sunday"
              habitStatus="none"
              />

          </div>
        </div>
        <div className="fixed bottom-0 w-full ">
          <TabBar />
        </div>
      </div>
    </div>
  );
}
