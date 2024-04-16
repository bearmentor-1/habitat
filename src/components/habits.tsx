import { habits } from "../data/habits";

export function Habits() {
  return (
    <ul>
      {habits.map((habit) => {
        return <li key={habit.id}>{habit.title}</li>;
      })}
    </ul>
  );
}
