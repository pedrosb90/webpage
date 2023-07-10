const validMessage = (value = "") => {
  if (!value) {
    return `Message is required please. You can add any other contact info. you prefer.`;
  }

  return null;
};
module.exports = { validMessage };
