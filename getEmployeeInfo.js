function getEmployeeInfo(employee, keyPath) {
  const keys = keyPath.split(".");
  let current = employee;

  for (const key of keys) {
    if (current && Object.hasOwnProperty.call(current, key)) {
      current = current[key];
    } else {
      return "Klucz nie istnieje";
    }
  }

  return current;
}

module.exports = { getEmployeeInfo };
