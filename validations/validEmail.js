const validEmail = (value = "") => {
  const regularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    return `Please add your e-mail address so I can reach you back.`;
  }

  if (!value.match(regularEx)) {
    return "Invalid email format. Please review your e-mail address.";
  }

  return null;
};
module.exports = { validEmail };
