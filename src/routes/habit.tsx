import { Form } from "react-router-dom";

import { dataHabits } from "../data/habits";

export function HabitRoute() {
  const habit = dataHabits[0];

  return (
    <div id="habit">
      <div>
        <h1>{habit.title}</h1>

        <p>{habit.isDone ? "Done" : "Todo"}</p>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
