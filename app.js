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



const employeeImages = document.querySelectorAll('.employee-image');

employeeImages.forEach(function(image) {
  image.style.backgroundColor = 'grey';
  image.style.border = '2px solid ';
});

const ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior', 'assets/Ghazi.jpg');
const lana = new Employee('Lana Ali', 'Finance', 'Senior', 'assets/Lana.jpg');
const tamara = new Employee('Tamara Ayoub', 'Marketing', 'Senior', 'assets/Tamara.jpg');
const safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior', 'assets/Safi.jpg');
const omar = new Employee('Omar Zaid', 'Development', 'Senior', 'assets/Omar.jpg');
const rana = new Employee('Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg');
const hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg');

employees.push(ghazi, lana, tamara, safi, omar, rana, hadi);

function renderEmployees() {
  const employeeContainer = document.getElementById('employee-container');
  employeeContainer.innerHTML = ''; // Clear existing content
// Rest of the existing code

function addEmployee() {
  const fullName = document.getElementById('fullName').value;
  const department = document.getElementById('department').value;
  const level = document.getElementById('level').value;
  const imageFile = document.getElementById('imageFile').files[0];

  if (!fullName || !department || !level || !imageFile) {
    alert('Please fill in all the fields');
    return;
  }

  const reader = new FileReader();
  reader.onload = function() {
    const imageURL = reader.result;
    const newEmployee = new Employee(fullName, department, level, imageURL);
    employees.push(newEmployee);
    renderEmployees();
  };
  reader.readAsDataURL(imageFile);

  // Reset the form
  document.getElementById('fullName').value = '';
  document.getElementById('department').value = '';
  document.getElementById('level').value = '';
  document.getElementById('imageFile').value = '';
}

// Add event listener to the add employee button
const addEmployeeButton = document.getElementById('addEmployeeButton');
addEmployeeButton.addEventListener('click', addEmployee);

// Rest of the existing code

  // Group employees by department
  const employeesByDepartment = {};
  employees.forEach(function(employee) {
    const department = employee.department;
    if (!employeesByDepartment[department]) {
      employeesByDepartment[department] = [];
    }
    employeesByDepartment[department].push(employee);
  });

  // Render employees in separate columns by department
  for (const department in employeesByDepartment) {
    const departmentEmployees = employeesByDepartment[department];
    const columnContainer = document.createElement('div');
    columnContainer.classList.add('employee-column');

    departmentEmployees.forEach(function(employee) {
      employee.render();
      columnContainer.appendChild(employeeContainer.lastElementChild);
    });

    employeeContainer.appendChild(columnContainer);
  }
}

renderEmployees();