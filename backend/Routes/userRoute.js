import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile } from '../Controllers/userController.js';
import authUser from '../Middlewares/authUser.js';
import upload from '../Middlewares/multer.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/update-profile',authUser, upload.single('image'), updateProfile)







export default userRouter