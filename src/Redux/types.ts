export interface State {
    habit: IHabit[];
    habitStatus: IHabitStatus[];
}

export interface IHabit {
    title: string;
    description: string;
    startDay: string;
    id: number;
}

export interface IHabitStatus{
    id: number;
    days: IDay;
}

export interface IDay {
    day: string;
    status: "done" | "not-done" | "none";
}