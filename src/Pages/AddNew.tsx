import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabBar from "../Component/TabBar";
import type { RootState } from '../Redux/store';
import { addHabit } from "../Redux/updateHabitSlice";


export default function AddNew() {
  const dispatch = useDispatch();
  
  const {updateHabit } = useSelector((state: RootState) => state);
  const add_new_card = require("../Assests/add-new-habit-card.png");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const event = new Date();
  const options: any = { weekday: "long" };
  const day: string = event
    .toLocaleTimeString(undefined, options)
    .split(" ")[0];

    function handleSubmit(){
          dispatch(
                addHabit(
                  {
                    title: title,
                    description: description,
                    id: updateHabit.length + 1,
                    day: [{
                      day: day,
                      status: "none"
                    }]
                  }
                )
                )
                console.log(updateHabit)
    }

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
            handleSubmit();
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
