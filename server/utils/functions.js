/* eslint-disable no-undef */
const validateFields = (body) => {
  const requiredFields = ["title", "status", "owner"];
  const receivedFields = Object.keys(body);

  const areValidFields = receivedFields.every((field) => {
    return requiredFields.includes(field);
  });
  console.log("areValidFields", areValidFields);

  return areValidFields;
};

const getErrorMessage = ({ status, message } = {}) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

module.exports = {
  validateFields,
  getErrorMessage,
};
