export function RootRoute() {
  return (
    <>
      <div id="sidebar">
        <h1>Habitat</h1>

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
            <li>
              <a href={`/habits/1`}>Morning jogging</a>
            </li>
            <li>
              <a href={`/habits/2`}>Breakfast</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="detail">{/* Detail */}</div>
    </>
  );
}
