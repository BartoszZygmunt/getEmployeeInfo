// getEmployeeInfo.test.js

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

describe("Funkcja getEmployeeInfo", () => {
  test("zwraca imię pracownika", () => {
    expect(getEmployeeInfo(employee, "personalInfo.firstName")).toBe("John");
  });

  test("zwraca nazwisko pracownika", () => {
    expect(getEmployeeInfo(employee, "personalInfo.lastName")).toBe("Doe");
  });

  test("zwraca stanowisko pracownika", () => {
    expect(getEmployeeInfo(employee, "employmentDetails.position")).toBe(
      "Software Engineer"
    );
  });

  test("zwraca ulicę adresu", () => {
    expect(getEmployeeInfo(employee, "personalInfo.address.street")).toBe(
      "123 Main St"
    );
  });

  test("zwraca komunikat, gdy klucz nie istnieje", () => {
    expect(getEmployeeInfo(employee, "employmentDetails.salary")).toBe(
      "Klucz nie istnieje"
    );
  });
});
