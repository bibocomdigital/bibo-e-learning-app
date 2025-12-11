import { Router } from "express";
import { AppCompositionRoot } from "./contrat";
import { expressApp } from "./express";
 

export const app = (routes: AppCompositionRoot ): Router => {
  const router = expressApp.Router();
  
  return router;
}
