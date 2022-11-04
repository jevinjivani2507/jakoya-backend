import { Medicine, Users } from "../models";
import Joi from "joi";

const medicineController = {
  async createMedicine(req, res, next) {
    // Validation
    const medicineSchema = Joi.object({
      username: Joi.string().required(),
      title: Joi.string().required(),
      quantity: Joi.number().required(),
      morningTime: Joi.string().required(),
      afternoonTime: Joi.string().required(),
      eveningTime: Joi.string().required(),
      morningDose: Joi.number().required(),
      afternoonDose: Joi.number().required(),
      eveningDose: Joi.number().required(),
      weekDays: Joi.string().required(),
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
    });

    const { error } = medicineSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const {
      title,
      quantity,
      morningTime,
      afternoonTime,
      eveningTime,
      morningDose,
      afternoonDose,
      eveningDose,
      weekDays,
      startDate,
      endDate,
    } = req.body;

    let document;

    try {
      document = await Users.fin({
        title,
        quantity,
        morningTime,
        afternoonTime,
        eveningTime,
        morningDose,
        afternoonDose,
        eveningDose,
        weekDays,
        startDate,
        endDate,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Medicine created successfully" });
  },
};

export default medicineController;
