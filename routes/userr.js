import express from 'express'
import { Registeration} from '../controllers/user.js';
import { login } from '../controllers/user.js';


const router = express.Router();

// for user register
// api endpoint = /api/user/register
router.post('/register',Registeration);

// for user login
// api endpoint = /api/user/login
router.post('/login',login);


export default router