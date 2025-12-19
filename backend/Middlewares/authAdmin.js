import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("HEADERS:", req.headers);

  try {
    const atoken = req.headers.atoken;

    if (!atoken) {
      return res.json({
        success: false,
        message: "Not authorized, Login Again!",
      });
    }

    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    console.log(decoded);

    // ✅ CHECK ROLE, NOT EMAIL+PASSWORD STRING
    if (decoded.role !== "admin") {
      return res.json({
        success: false,
        message: "Authentication Failed",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Authentication Failed",
    });
  }
};

export default authAdmin;
