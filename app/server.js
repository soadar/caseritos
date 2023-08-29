import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler.js";
import viewsRouter from "./routes/views.js";
import { __dirname } from "./utils.js";


console.log(__dirname);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(errorHandler);

app.set("views", "./views");

app.use(cookieParser());

app.use("/", viewsRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server ok en puerto ${PORT}`);
});
