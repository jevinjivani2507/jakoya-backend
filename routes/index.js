import express from "express";
const router = express.Router();
import { medicineController } from "../controllers";

router.post("/medicine", medicineController.createMedicine);

export default router;
