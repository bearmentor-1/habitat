import { useState } from "react";
import { dataHabits } from "../data/habits";

export function Habits() {
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("q")?.toString();
  const filteredDataHabits = keyword
    ? dataHabits.filter((habit) => habit.title.toLowerCase().includes(keyword))
    : dataHabits;

  const [habits, setHabits] = useState(filteredDataHabits);

  function removeHabitById(id: number) {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  }

  function addNewHabit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const lastId = habits[habits.length - 1].id;

    const newHabitData = {
      id: lastId + 1,
      title: String(formData.get("title")),
      isDone: false,
    };

    const updatedHabits = [...habits, newHabitData];

    setHabits(updatedHabits);
  }

  return (
    <div>
      <pre>keyword: {keyword}</pre>
      <form>
        <label htmlFor="keyword">Search</label>
        <input
          type="text"
          id="keyword"
          name="q"
          placeholder="Search habits..."
        />
      </form>

      <hr />

      <form onSubmit={addNewHabit}>
        <div>
          <label htmlFor="title">Habit title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Drink water"
            required
          />
        </div>

        <div>
          <button type="submit">Add Habit</button>
        </div>
      </form>

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
    </div>
  );
}
