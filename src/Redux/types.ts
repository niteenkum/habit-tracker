//Main State for redux
export interface State {
  habitData: IHabit[];
}


export interface IHabit {
  title: string;
  description: string;
  id: number;
  day: IDay[];
}



export interface IDay {
  day: string;
  status: "done" | "not-done" | "none";
}