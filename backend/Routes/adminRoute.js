import express from 'express'
import { addDoctor,loginAdmin } from '../Controllers/adminController.js'
import upload from '../Middlewares/multer.js'
import authAdmin from '../Middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor', upload.single('image'), authAdmin, addDoctor)
adminRouter.post('/Login', loginAdmin)

export default adminRouter