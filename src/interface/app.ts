import { Application } from "express";
import { AppCompositionRooter } from "./contrat";
import { expressApp } from "./express";
 

export const app = (routes: AppCompositionRooter ): Application => {
  const App = expressApp()

  return App;
}
