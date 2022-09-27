import Cent, { LoadRouters } from "@centjs/core";
import cors from "cors";
import "reflect-metadata";
import path from "path";
import { config } from "dotenv";

config();
const port = process.env.PORT || 5555;

const App = Cent.Instance();

App.use(cors());
App.use(Cent.Instance.json());
App.use(Cent.Instance.urlencoded({ extended: false }));

App.use(LoadRouters("src/app/controller"));

App.listen(port, () => {
  console.log(`⚡️[server]: Server is running at Port:${port}`);
});
