import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import Recipe from "lib/pages/recipe/index";
const RandomDrinkLoader = async () => {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  return response.json()
}

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
    loader: RandomDrinkLoader
  }
];

export const privateRoutes: Array<PathRouteProps> = [];