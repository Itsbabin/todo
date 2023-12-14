import { Router } from "express";
import singin from "../routes/singin.route.js";

const router = Router();


    router.route('/singin').post(singin);



export default router;