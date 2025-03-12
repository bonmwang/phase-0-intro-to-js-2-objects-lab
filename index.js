// Step 1: Initialize the employee object
const employee = {
        name: "Boniface Mwangi",
            streetAddress: "Thindigua"
    };

    // Step 2: Define teh functions

    // Function 1: Non-destructive update
    function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, // Spread operator to copy all properties from teh original object
        [key]: value // Overwrite or add the new key-value pair
    };
    };

    // Function 2: Destructive update
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original object
    return employee;
    };

    // Function 3: Non-destructive deletion
    function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = {
            ...employee
        }; // Create a copy of the original object
        delete newEmployee[key]; // Delete the specified key from teh copy
        return newEmployee;
    }; 

    // Function 4: Destructive deletion
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key]; // Mutate the original object by deleting the key
        return employee;
    };

    // Step 3: Test the functions

    // Test non-destructive update
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Software Engineer");
    console.log(updatedEmployee); //{name: "Boniface Mwangi", streetAddress: "Thindigua", position: "Software Engineer"}
    console.log(employee); // {name: "Boniface Mwangi", streetAddress: "Thindigua"}

    //Test destructive update
    destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Senior Software Engineer");
    console.log(employee); // {name: "Boniface Mwangi", streetAddress: "Thindigua", position: "Senior Software Engineer"}


    // Test non-destructive deletion
    const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
    console.log(employeeWithoutAddress); // {name: "Boniface Mwangi", position: "Senior Software Engineer"}
    console.log(employee); // {name: "Boniface Mwangi", streetAddress: "Thindigua", postion: "Senior Software Engineer"}
    
    // Test destructive deletion
    destructivelyDeleteFromEmployeeByKey(employee, "postion");
    console.log(employee); // {name: "Boniface Mwangi", streetAddress: "Thindigua"} (mutated)