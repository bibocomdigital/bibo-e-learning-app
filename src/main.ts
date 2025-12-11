import { PORT } from "@infrastructure";
import { app, compositionRoot } from "@interface";

const composition = compositionRoot();

const E_learning = app(composition);

E_learning.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
