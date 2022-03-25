exports.index = (req, res) => {
  res.render("index", {
    title: "Login",
    loginFalse: false,
    api: require("./auth/api"),
  });
};

exports.login = (req, res) => {
  const email = "admin@mail.com";
  const password = "admin";
  const { email: inputEmail, password: inputPassword } = req.body;
  if (email === inputEmail && password === inputPassword) {
    res.redirect("/dashboard");
  }
  res.render("index", {
    title: "Login",
    loginFalse: true,
  });
};
