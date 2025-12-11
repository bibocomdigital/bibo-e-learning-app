import { UserController } from "./http";

export interface AppCompositionRoot {
  // userController: UserController;
}

export const compositionRoot = (): AppCompositionRoot => {

  return {
    // userController: new UserController(),
  };
};