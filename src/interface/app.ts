import { AppCompositionRoot } from "./compositionRoot";
import { expressApp } from "./express";
 

export function app(Controllers: AppCompositionRoot ) {
  const router = expressApp.Router();

  

  return router;
}
