import { Router } from "express";
import { __dirname } from "../utils.js";

const router = Router();

router.get('/', async (req, res) => {
    //res.json({ msg: "hola" });
    //res.sendFile('app/views/index.html', { root: '.' })
    res.sendFile(__dirname + "/views/index.html");
});

export default router;