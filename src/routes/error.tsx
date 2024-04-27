import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export function ErrorRoute() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Sorry!</h1>
      <p>An unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
