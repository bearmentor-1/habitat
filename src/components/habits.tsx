import { useState } from "react";
import { dataHabits } from "../data/habits";

export function Habits() {
  const [habits, setHabits] = useState(dataHabits);

  function removeHabitById(id: number) {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  }

  return (
    <ul>
      {habits.map((habit) => {
        return (
          <li key={habit.id}>
            <h1>{habit.title}</h1>
            <button onClick={() => removeHabitById(habit.id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
}
