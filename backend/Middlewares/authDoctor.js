import jwt from "jsonwebtoken";

//doctor authentication middleware

const authDoctor = async (req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("HEADERS:", req.headers);

  try {
    // Use let so we can reassign
    let dtoken = req.headers.dtoken || req.headers.authorization;

    // If using 'Bearer <token>' format, split it
    if (dtoken && dtoken.startsWith("Bearer ")) {
      dtoken = dtoken.split(" ")[1];
    }

    if (!dtoken) {
      return res.json({
        success: false,
        message: "Not authorized, Login Again!",
      });
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);
    console.log(decoded);

    req.docId = decoded.id; // attach userId to request
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Authentication Failed",
    });
  }
};

export default authDoctor;