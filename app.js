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

function Employee(fullName, department, level, imageURL) {
  this.id = generateEmployeeID();
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

  employeeCard.innerHTML = `
    <p>Employee ID: ${this.id}</p>
    <p>Employee name: ${this.fullName}</p>
    <p>Employee department: ${this.department}</p>
    <p>Employee salary: ${this.salary.toFixed(0)}</p>
    <img src="${this.imageURL}" alt="${this.fullName}" class="employee-image">
  `;

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
