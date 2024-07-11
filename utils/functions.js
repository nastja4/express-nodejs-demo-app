/* eslint-disable no-undef */
const validateFields = (body) => {
  const requiredFields = ["title", "status"];
  const receivedFields = Object.keys(body);
  const areValidFields = receivedFields.every((field) => {
    return requiredFields.includes(field);
  });
  console.log("areValidFields", areValidFields);

  return areValidFields;
};

module.exports = {
  validateFields,
};
