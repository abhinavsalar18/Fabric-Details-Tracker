import {Router} from "express"
import { addData, getAllData } from "../controllers/details.controller.js";

const router = Router();

router.route("/addData").post(addData);
router.route("/getAllData").get(getAllData);


router.route("/test").get((req, res) => {
    res.status(200).json({data: req.body, message: "got the data!"});
});

export default router;