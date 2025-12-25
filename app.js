import express from "express"
import { Auth } from "./utils/utils.js";
import { routerUser } from "./routers/userR.js";
import { routerCreator } from "./routers/creatorR.js";
import { routerTickets } from "./routers/ticketsR.js";


const app = express();
app.use(express.json())
const port = 3005


// server test
app.get("/health", Auth)


// create Middleware general
app.use("/", (req, res, next) => {
   console.log(req.method, req.path)
   next()
});


// mount routers 
app.use("/user", routerUser)
app.use("/creator", routerCreator)
app.use("/users", routerTickets)
// create listen
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});