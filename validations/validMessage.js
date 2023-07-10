const validMessage = (value = "") => {
  if (!value) {
    return `Message is required please. You can add any other contact info. you prefer.`;
  }
  if (value.length > 200) {
    return `Please shorten your message up to 300 characters..`;
  }
  return null;
};
module.exports = { validMessage };
