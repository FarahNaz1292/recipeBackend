const status = require("http-status");

const response = require("../utils/response");
const getToken = require("../utils/token");
const User = require("../model/UserModel");

const signup = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res
      .status(status.status.CREATED)
      .send(
        response.createSuccessResponse(
          status.status.CREATED,
          "User created Succesfully",
          result
        )
      );
  } catch (error) {
    res.status(
      response.createErrorResponse(
        status.status.INTERNAL_SERVER_ERROR,
        "An error occured while creating a user",
        error
      )
    );
  }
};
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user);

    if (!user) {
      return res
        .status(status.status.NOT_FOUND)
        .send(
          response.notFoundResponse(status.status.NOT_FOUND, "User not found")
        );
    }
    const isMatchPassword = await user.comparePassword(password);
    // console.log(isMatchPassword);

    if (!isMatchPassword) {
      return res
        .status(status.status.UNAUTHORIZED)
        .send(
          response.invalidPasswordResponse(
            status.status.UNAUTHORIZED,
            "Invalid password"
          )
        );
    }
    const token = getToken(user);
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 1000,
    });
    res
      .status(status.status.OK)
      .send(
        response.createSuccessResponse(
          status.status.OK,
          "User Logged in successfully",
          user
        )
      );
  } catch (error) {
    res.status(
      response.createErrorResponse(
        status.status.INTERNAL_SERVER_ERROR,
        "An error occured while logging in ",
        error
      )
    );
  }
};
const getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    
    res
      .status(status.status.OK)
      .send(
        response.createSuccessResponse(
          status.status.OK,
          "All users retrieved successfully",
          result
        )
      );
  } catch (error) {
    res
      .status(status.status.INTERNAL_SERVER_ERROR)
      .send(
        response.createErrorResponse(
          status.status.INTERNAL_SERVER_ERROR,
          "Error occurred while retriveing all users",
          error
        )
      );
  }
};
const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    if (!result) {
      return res
        .status(status.status.NOT_FOUND)
        .send(
          response.notFoundResponse(status.status.NOT_FOUND, "User not found")
        );
    }

    res
      .status(status.status.OK)
      .send(
        response.createSuccessResponse(
          status.status.OK,
          "User retrieved successfully",
          result
        )
      );
  } catch (error) {
    res.status(
      response.createErrorResponse(
        status.status.INTERNAL_SERVER_ERROR,
        "An error occured while retrieving the user",
        error
      )
    );
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = req.body;
    const result = await User.findByIdAndUpdate(id, updateUser, {
      new: true,
    });

    if (!result) {
      return res
        .status(status.status.NOT_FOUND)
        .send(
          response.notFoundResponse(status.status.NOT_FOUND, "User not found")
        );
    }

    res
      .status(status.status.OK)
      .send(
        response.createSuccessResponse(
          status.status.OK,
          "User updated successfully",
          result
        )
      );
  } catch (error) {
    res.status(
      response.createErrorResponse(
        status.status.INTERNAL_SERVER_ERROR,
        "An error occured while updating the user",
        error
      )
    );
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res
        .status(status.status.NOT_FOUND)
        .send(
          response.notFoundResponse(status.status.NOT_FOUND, "User not found")
        );
    }

    res
      .status(status.status.OK)
      .send(
        response.createSuccessResponse(
          status.status.OK,
          "User deleted successfully",
          result
        )
      );
  } catch (error) {
    res.status(
      response.createErrorResponse(
        status.status.INTERNAL_SERVER_ERROR,
        "An error occured while deleting the user",
        error
      )
    );
  }
};

module.exports = {
  signup,
  signin,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
