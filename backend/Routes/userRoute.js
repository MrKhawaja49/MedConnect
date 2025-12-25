import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, createPaymentIntent, markAppointmentPaid } from '../Controllers/userController.js';
import authUser from '../Middlewares/authUser.js';
import upload from '../Middlewares/multer.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',authUser, getProfile)
userRouter.post('/update-profile',authUser, upload.single('image'), updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/create-payment-intent', authUser, createPaymentIntent)
userRouter.post('/mark-appointment-paid', authUser, markAppointmentPaid);











export default userRouter