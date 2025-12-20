import jwt from "jsonwebtoken";

// user authentication middleware
// const authUser = async (req, res, next) => {
//   console.log("METHOD:", req.method);
//   console.log("URL:", req.originalUrl);
//   console.log("HEADERS:", req.headers);

//   try {
//     const { token } = req.headers;

//     const authHeader = req.headers.authorization;

//     if (authHeader && authHeader.startsWith("Bearer ")) {
//       token = authHeader.split(" ")[1]; // Extract token from Bearer
//     }


//     if (!token) {
//       return res.json({
//         success: false,
//         message: "Not authorized, Login Again!",
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);
//     req.userId = decoded.id;

//     next();
//   } catch (error) {
//     console.log(error);
//     return res.json({
//       success: false,
//       message: "Authentication Failed",
//     });
//   }
// };

// export default authUser;

// user authentication middleware
const authUser = async (req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("HEADERS:", req.headers);

  try {
    // Use let so we can reassign
    let token = req.headers.token || req.headers.authorization;

    // If using 'Bearer <token>' format, split it
    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized, Login Again!",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.userId = decoded.id; // attach userId to request
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Authentication Failed",
    });
  }
};

export default authUser;

