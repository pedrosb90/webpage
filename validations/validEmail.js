const validEmail = (value = "") => {
  const regularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value < 1) {
    return null;
  }
  if (!value.match(regularEx)) {
    return "Please complete your e-mail address.";
  }

  return null;
};
module.exports = { validEmail };
