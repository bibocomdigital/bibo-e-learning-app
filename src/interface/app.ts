import { AppCompositionRoot } from "./compositionRoot";
import { expressApp } from "./express";
 

export function app(routes: AppCompositionRoot ) {
  const router = expressApp.Router();
  
  return router;
}
