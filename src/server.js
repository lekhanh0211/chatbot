import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";

let app = express();
let port = process.env.PORT || 5000;

configViewEngine(app);
initWebRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Ứng dụng của bạn đang chạy trên cổng: " + port);
});
