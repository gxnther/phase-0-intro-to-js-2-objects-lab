const employee = {
    name: "Gunther",
    streetAddress: "2 Howard Dr., Greenbush, ME  04418",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeInfo = { ...employee } ;
    
    newEmployeeInfo[key] = value;

    return newEmployeeInfo;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway"
);

updateEmployeeWithKeyAndValue;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const updatedAdress = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "12 Broadway");

destructivelyUpdateEmployeeWithKeyAndValue;

function deleteFromEmployeeByKey(employee, key) {
    const employees = { ...employee };
    employees[key] = employees.name;
    delete employees.name;
    return employees;
}
deleteFromEmployeeByKey;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = employee.name;
    delete employee.name
    return employee;
}

destructivelyDeleteFromEmployeeByKey;