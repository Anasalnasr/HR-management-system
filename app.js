const employees = [];

function generateUniqueEmployeeID() {
  let id;
  do {
    id = Math.floor(Math.random() * 9000) + 1000; // Generate a random four-digit number
  } while (employees.some(employee => employee.id === id)); // Check if the ID already exists in the array
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

function Employee(fullName, department, level, imageURL) {
  this.id = generateUniqueEmployeeID();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = calculateSalary(level);
}

Employee.prototype.render = function() {
  const employeeContainer = document.getElementById('employee-container');

  const employeeCard = document.createElement('div');
  employeeCard.classList.add('employee-card');

  const employeeImage = document.createElement('img');
  employeeImage.src = this.imageURL;
  employeeImage.alt = this.fullName;
  employeeImage.classList.add('employee-image');

  const employeeInfoContainer = document.createElement('div');
  employeeInfoContainer.classList.add('employee-info-container');

  const employeeID = document.createElement('p');
  employeeID.textContent = `Employee ID: ${this.id}`;
  employeeID.classList.add('employee-info');

  const employeeName = document.createElement('p');
  employeeName.textContent = `Employee name: ${this.fullName}`;
  employeeName.classList.add('employee-info');

  const employeeDepartment = document.createElement('p');
  employeeDepartment.textContent = `Employee department: ${this.department}`;
  employeeDepartment.classList.add('employee-info');

  const employeeSalary = document.createElement('p');
  employeeSalary.textContent = `Employee salary: ${this.salary.toFixed(0)}`;
  employeeSalary.classList.add('employee-info');

  employeeInfoContainer.appendChild(employeeID);
  employeeInfoContainer.appendChild(employeeName);
  employeeInfoContainer.appendChild(employeeDepartment);
  employeeInfoContainer.appendChild(employeeSalary);

  employeeCard.appendChild(employeeImage);
  employeeCard.appendChild(employeeInfoContainer);

  employeeContainer.appendChild(employeeCard);
};

const ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior', 'assets/1.jpg');
const lana = new Employee('Lana Ali', 'Finance', 'Senior', 'assets/2.jpg');
const tamara = new Employee('Tamara Ayoub', 'Marketing', 'Senior', 'assets/Gir.jpg');
const safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior', 'assets/3.jpg');
const omar = new Employee('Omar Zaid', 'Development', 'Senior', 'assets/download.jpg');
const rana = new Employee('Rana Saleh', 'Development', 'Junior', 'assets/LA.jpg');
const hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/5.jpg');

employees.push(ghazi, lana, tamara, safi, omar, rana, hadi);

function renderEmployees() {
  const employeeContainer = document.getElementById('employee-container');
  employeeContainer.innerHTML = ''; // Clear existing content

  employees.forEach(function(employee) {
    employee.render();
  });
}

renderEmployees();
