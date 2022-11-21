const userRegistration = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = {
      name,
      email,
      password,
      dob,
    };
    return res.status(201).json({ message: " User is created.", newUser });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "ripion@gmail.com" && password === "12345") {
      return res.status(201).send("Login success");
    } else {
      return res.status(400).send(error);
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { userRegistration, userLogin };
