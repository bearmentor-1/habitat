import { Form, useLoaderData, LoaderFunctionArgs } from "react-router-dom";

import { getHabitById } from "../data/habits";

export function loader({ params }: LoaderFunctionArgs) {
  const habitId = Number(params.habitId);
  const habit = getHabitById(habitId);
  return { habit };
}

export function HabitRoute() {
  const { habit } = useLoaderData() as ReturnType<typeof loader>;

  if (!habit) {
    return (
      <div>
        <p>Habit not found</p>
      </div>
    );
  }

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
