# HR-management-system

# convert-from-literal-object-to-constructor
<!--

 We start by defining an empty array called employees to store employee objects, and a variable nextEmployeeID which will be used to generate unique employee IDs.

The generateEmployeeID() function is created to generate a new employee ID based on the nextEmployeeID value. It increments nextEmployeeID after assigning it to the id variable and returns the generated ID.

The calculateSalary(level) function takes an employee level as an argument and calculates a random salary within a range based on the level. It uses a switch statement to set the minimum and maximum salary values based on the level. The calculated salary is then reduced by 7.5% for tax, and the net salary is returned.

The Employee constructor function is defined. It takes parameters for fullName, department, level, and imageURL and creates a new employee object. It assigns a unique ID using generateEmployeeID(), calculates the salary using calculateSalary(level), and assigns the other provided values to their respective properties.

The Employee.prototype.render() method is added to the Employee constructor's prototype. It creates and appends HTML elements to display the employee information on the web page. It fetches the employee-container element, creates and configures the necessary elements to display the employee's ID, name, department, and salary, and appends them to the container.

A few lines of code apply some initial styling to the .employee-image elements on the page by setting a gray background color and a border.

Several employee objects are created using the Employee constructor, providing the necessary information such as full name, department, level, and image URL. These objects are then added to the employees array.

The renderEmployees() function is defined. It clears the existing content of the employee-container element and then proceeds to group the employees by department using an object called employeesByDepartment. It iterates over the employees array, checks if the department key exists in employeesByDepartment, and adds the employee to the corresponding department array or creates a new array if it doesn't exist. This way, employees are grouped by their department.

Next, the function renders the employees in separate columns by department. It iterates over each department in the employeesByDepartment object, creates a container element for each column, and appends the rendered employee cards for each department to their respective column container.

The addEmployee() function is defined to handle the event when the "Add Employee" button is clicked. It retrieves the values from the input fields for full name, department, level, and image file. It checks if any of the fields are empty and displays an alert if so. Otherwise, it uses the FileReader API to read the image file asynchronously, and once it's loaded, it creates a new employee object with the provided information and adds it to the employees array. Finally, it calls renderEmployees() to update the displayed employees.

An event listener is added to the "Add Employee" button to trigger the addEmployee() function when clicked.

Lastly, the renderEmployees() function is called initially to display the existing employees on the web page.

-->
