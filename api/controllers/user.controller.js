import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req, body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    // Assuming you have user ID stored in the request object after authentication middleware
    const userIdFromToken = req.user.id; // This should come from your authentication middleware
    const userIdToDelete = req.params.id;

    // Check if the user is authorized to delete their own account
    if (userIdFromToken !== userIdToDelete) {
      return next(errorHandler(401, "You can only delete your own account"));
    }

    // Proceed with deleting the user
    await User.findByIdAndDelete(userIdToDelete);

    // Clear cookie and send response
    res.clearCookie("access_token");
    res.status(200).json({ message: "User has been deleted..." });
  } catch (error) {
    next(error);
  }
};
