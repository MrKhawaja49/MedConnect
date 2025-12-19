import express from 'express'
import { addDoctor,allDoctors,loginAdmin } from '../Controllers/adminController.js'
import upload from '../Middlewares/multer.js'
import authAdmin from '../Middlewares/authAdmin.js'
import { changeAvailability } from '../Controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/Login', loginAdmin)
adminRouter.post('/add-doctor', upload.single('image'), authAdmin, addDoctor)
adminRouter.post('/all-doctors',authAdmin, allDoctors)
adminRouter.post('/change-availability',authAdmin, changeAvailability)

export default adminRouter