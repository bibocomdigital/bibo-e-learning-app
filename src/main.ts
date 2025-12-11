import { app, compositionRoot, expressApp } from "@interface";
import dotenv from "dotenv";
dotenv.config();

const composition = compositionRoot();

const routers = app(composition);

const E_learning = expressApp();

const PORT = process.env.PORT || 3000;

E_learning.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
