import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../Models/doctorModel.js";
import jwt from "jsonwebtoken";

//API for adding doctor
const addDoctor = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({
        success: false,
        message: "Image file is required!",
      });
    }

    // checking for all data to add doctore
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing details!" });
    }

    // valid email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid Email!",
      });
    }

    //validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong Password!",
      });
    }

    // hashing doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor Added!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//login admin
const loginAdmin = async (req, res) => {
  try {
    console.log("Login request body:", req.body);

    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return res.status(200).json({
        success: true,
        token,
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid Credentials!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { addDoctor, loginAdmin };
