import { Outlet, Link, Form, useLoaderData } from "react-router-dom";

import { addHabit, getHabits } from "../data/habits";

export function loader() {
  const habits = getHabits();
  return { habits };
}

export function action() {
  const habit = addHabit({ title: "New habit", isDone: false });
  console.log({ habit });

  return { habit };
}

export function RootRoute() {
  const { habits } = useLoaderData() as ReturnType<typeof loader>;

  return (
    <div className="root-layout">
      <aside id="sidebar" className="sidebar">
        <div>
          <Link to="/">
            <h1>Habitat</h1>
          </Link>

          <Link to="/about">About</Link>
        </div>

        <div>
          <form method="get" id="search-form" role="search">
            <label htmlFor="q" hidden>
              Search
            </label>
            <input
              id="q"
              name="q"
              type="search"
              placeholder="Search..."
              aria-label="Search habits"
            />
            <div id="search-spinner" aria-hidden hidden />
          </form>

          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        <nav>
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>
                <Link to={`/habits/${habit.id}`}>{habit.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main id="detail" className="detail">
        <Outlet />
      </main>
    </div>
  );
}
