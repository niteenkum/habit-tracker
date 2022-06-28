import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHabitSlice } from "../redux/reducers/updateHabit";
import TabBar from "../Component/TabBar";
import { State } from "../redux/types";

export default function AddNew() {
  const dispatch = useDispatch();
  const add_new_card = require("../Assests/add-new-habit-card.png");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const options: any = { weekday: "long" };
  const day: string = event
    .toLocaleTimeString(undefined, options)
    .split(" ")[0];
  const data  = useSelector((state: State) => state.habitData);
  return (
    <div className="home-page flex justify-end items-center px-3 md:pr-[20%] ">
      <div className="mobile-design ">
        <div className="p-5">
          {/* Heading for Start New Habit */}

          <div className="text-xl font-bold">Start Your New Habit</div>

          <img src={add_new_card} className="h-40 mt-4" alt="Add New Card" />
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              console.log(title, description, day);
              dispatch(
                updateHabitSlice.actions.updateHabitData({
                  title: title,
                  description: description,
                  id: 1,
                  day: [{day: day, status: "none"}],
                })
              );
            }}
          >
            <div className="mt-4">
              <label htmlFor="title">Enter Title</label>
              <input
                id="title"
                type="text"
                className="h-12 w-full outline-none bg-slate-50 rounded-lg p-2 mt-1"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="description">Enter Description</label>
              <input
                id="description"
                type="text"
                className="h-12 w-full outline-none bg-slate-50 rounded-lg p-2 mt-1"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className={`h-12 w-1/2 bg-blue-500 rounded-xl text-white ${
                  !title || !description
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                disabled={!title || !description}
              >
                {" "}
                ADD
              </button>
            </div>
          </form>
        </div>
        <div className="fixed bottom-0 w-full ">
          <TabBar />
        </div>
      </div>
    </div>
  );
}
