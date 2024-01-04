export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  function* employeeIterator() {
    while (currentDepartmentIndex < departments.length) {
      const currentDepartment = departments[currentDepartmentIndex];

      if (currentEmployeeIndex < currentDepartment.length) {
        yield currentDepartment[currentEmployeeIndex];
        currentEmployeeIndex += 1;
      } else {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}
