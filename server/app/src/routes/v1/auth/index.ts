import express from 'express';
import validator from '../../../middlewares/validator';
import AuthController from './controller';
import schema from './schema';

const router = express.Router();

router.post('/signup', validator(schema.signup), (async (req , res) => await AuthController.signup(req, res)));
router.post('/login', validator(schema.login), (async (req , res ) => await AuthController.login(req, res) ));

export default router;