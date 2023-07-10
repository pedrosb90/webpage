const validName = (value = "") => {
  const isAlphabetical = /^[a-zA-Z]+$/.test(value);
  const isNotAlpha = !/^\d+$/.test(value);

  if (!value) {
    return `Please enter your name`;
  }
  if (!isAlphabetical || !isNotAlpha) {
    return `Name must contain alphabetical characters only.`;
  }
  if (value.length > 35) {
    return `Please choose a shorter name manner.`;
  }
  if (value.length < 5) {
    return `Please enter a full name.`;
  }
};
module.exports = {
  validName,
};
