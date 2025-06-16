class User {
  constructor({ id, username, email, password }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
  validatePassword() {
    if (this.password.length < 4)
      return false;
    if (!hasNumber(this.password))
      return false;
    return true;
  }
  validateUsername() {
    if (this.username.length < 1)
      return false;
    if (this.username === "AfonsoBrandao")
      return false;
    return true;
  }
  validateEmail() {
    if (this.email.includes("@"))
      return true;
    else
      return false;
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

module.exports = User;
