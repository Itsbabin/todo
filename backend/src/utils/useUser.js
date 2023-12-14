import { Router } from "express";
import singin from "../routes/singin.route.js";
import login from "../routes/login.route.js";

const router = Router();


    router.route('/singin').post(singin);
    router.route('/login').get(login);



export default router;