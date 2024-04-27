import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { getHabits } from "../data/habits";

export function RootRoute() {
  const [habits] = useState(getHabits());

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

          <form method="post">
            <button type="submit">New</button>
          </form>
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
