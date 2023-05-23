const employees = [];
let nextEmployeeID = 1000;

function generateEmployeeID() {
  const id = nextEmployeeID;
  nextEmployeeID++;
  return id;
}

function calculateSalary(level) {
  let min, max;
  switch (level) {
    case 'Senior':
      min = 1500;
      max = 2000;
      break;
    case 'Mid-Senior':
      min = 1000;
      max = 1500;
      break;
    case 'Junior':
      min = 500;
      max = 1000;
      break;
    default:
      throw new Error(`Invalid employee level: ${level}`);
  }
  const salary = Math.floor(Math.random() * (max - min + 1)) + min;
  const netSalary = salary * (1 - 0.075); // 7.5% tax
  return netSalary;
}

function renderEmployee(employee) {
  const employeeContainer = document.getElementById('employee-container');

  const employeeCard = document.createElement('div');
  employeeCard.classList.add('employee-card');

  const employeeId = document.createElement('p');
  employeeId.textContent = `Employee ID: ${employee.id}`;
  employeeCard.appendChild(employeeId);

  const employeeName = document.createElement('p');
  employeeName.textContent = `Employee name: ${employee.fullName}`;
  employeeCard.appendChild(employeeName);

  const employeeLevel = document.createElement('p');
  employeeLevel.textContent = `Employee level: ${employee.level}`;
  employeeCard.appendChild(employeeLevel);

  const employeeDepartment = document.createElement('p');
  employeeDepartment.textContent = `Employee department: ${employee.department}`;
  employeeCard.appendChild(employeeDepartment);

  const employeeSalary = document.createElement('p');
  employeeSalary.textContent = `Employee salary: ${employee.salary.toFixed(0)}`;
  employeeCard.appendChild(employeeSalary);

  const employeeImage = document.createElement('img');
  employeeImage.src = employee.imageURL;
  employeeImage.alt = employee.fullName;
  employeeImage.classList.add('employee-image');
  employeeCard.appendChild(employeeImage);

  employeeContainer.appendChild(employeeCard);
}

function renderEmployees() {
  const employeeContainer = document.getElementById('employee-container');
  employeeContainer.innerHTML = ''; // Clear existing content

  employees.forEach(renderEmployee);
}

// Create employee objects using object literals
function Employee(fullName, department, level, imageURL) {
  this.id = generateEmployeeID();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = calculateSalary(level);
}

// Create employee objects using the constructor function
const ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior', 'assets/1.jpg');
const lana = new Employee('Lana Ali', 'Finance', 'Senior', 'assets/2.jpg');
const tamara = new Employee('Tamara Ayoub', 'Marketing', 'Senior', 'assets/Gir.jpg');
const safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior', 'assets/3.jpg');
const omar = new Employee('Omar Zaid', 'Development', 'Senior', 'assets/download.jpg');
const rana = new Employee('Rana Saleh', 'Development', 'Junior', 'assets/LA.jpg');
const hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/5.jpg');


// Add employees to the array
employees.push(ghazi, lana, tamara, safi, omar, rana, hadi, );




// Call the render function to display the employees
renderEmployees();
