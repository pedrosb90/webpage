const validName = (value = "") => {
  if (!isNaN(value) || !/^\d+$/.test(value)) {
    return `${value} has to be alphabetical.`;
  }
  if (value.length > 35) {
    return `Please choose a shorter ${value} form.`;
  }
};
module.exports = {
  validName,
};
