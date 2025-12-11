import { app } from "@interface";

import { compositionRoot } from "interface/compositionRoot";

const App = app(compositionRoot());
App.use('/', App);
