const validName = (value = "") => {
  const isAlphabetical = /^[a-zA-Z\s]+$/.test(value);
  const isNotAlpha = !/^\d+$/.test(value);

  if (value < 1) {
    return "";
  }
  if (!isAlphabetical || !isNotAlpha) {
    return `Name must contain alphabetical characters only.`;
  }
  if (value.length > 35) {
    return `Please choose a shorter name manner.`;
  }
  if (value.length < 4) {
    return `Please enter a full name.`;
  }
  return null;
};
module.exports = {
  validName,
};
