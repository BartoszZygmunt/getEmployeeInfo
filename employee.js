const { getEmployeeInfo } = require("./getEmployeeInfo");

// Przykładowy obiekt employee
const employee = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "NY",
      postalCode: "12345",
    },
  },
  employmentDetails: {
    position: "Software Engineer",
    department: "Engineering",
    startDate: "2022-01-01",
    endDate: null,
    manager: {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
    },
  },
};

// Testy
console.log(getEmployeeInfo(employee, "personalInfo.firstName")); // "John"
console.log(getEmployeeInfo(employee, "personalInfo.lastName")); // "Doe"
console.log(getEmployeeInfo(employee, "employmentDetails.position")); // "Software Engineer"
console.log(getEmployeeInfo(employee, "personalInfo.address.street")); // "123 Main St"
console.log(getEmployeeInfo(employee, "employmentDetails.salary")); // "Klucz nie istnieje"
