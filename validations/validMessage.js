const validMessage = (value = "") => {
  if (!value) {
    return "";
  }
  if (value.length > 200) {
    return `Please shorten your message up to 300 characters..`;
  }
  if (value.length < 10) {
    return `Please write a relevant message up to 300 characters..`;
  }
  return null;
};
module.exports = { validMessage };
