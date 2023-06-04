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

const ghazi = {
  id: generateUniqueEmployeeID(),
  fullName: 'Ghazi Samer',
  department: 'Administration',
  level: 'Senior',
  imageURL: 'assets/1.jpg',
  salary: calculateSalary('Senior'),
  render: function() {
    const employeeContainer = document.getElementById('employee-container');

    const employeeCard = document.createElement('div');
    employeeCard.classList.add('employee-card');

    const employeeImage = document.createElement('img');
    employeeImage.src = this.imageURL;
    employeeImage.alt = this.fullName;
    employeeImage.classList.add('employee-image');
    employeeCard.appendChild(employeeImage);

    const employeeInfoContainer = document.createElement('div');
    employeeInfoContainer.classList.add('employee-info-container');

    const employeeID = document.createElement('p');
    employeeID.textContent = `Employee ID: ${this.id}`;
    employeeID.classList.add('employee-info');
    employeeInfoContainer.appendChild(employeeID);

    const employeeName = document.createElement('p');
    employeeName.textContent = `Employee name: ${this.fullName}`;
    employeeName.classList.add('employee-info');
    employeeInfoContainer.appendChild(employeeName);

    const employeeDepartment = document.createElement('p');
    employeeDepartment.textContent = `Employee department: ${this.department}`;
    employeeDepartment.classList.add('employee-info');
    employeeInfoContainer.appendChild(employeeDepartment);

    const employeeSalary = document.createElement('p');
    employeeSalary.textContent = `Employee salary: ${this.salary.toFixed(0)}`;
    employeeSalary.classList.add('employee-info');
    employeeInfoContainer.appendChild(employeeSalary);

    employeeCard.appendChild(employeeInfoContainer);
    employeeContainer.appendChild(employeeCard);
  }
};

// Create other employee objects using object literals
const lana = {
  id: generateUniqueEmployeeID(),
  fullName: 'Lana Ali',
  department: 'Finance',
  level: 'Senior',
  imageURL: 'assets/2.jpg',
  salary: calculateSalary('Senior'),
  render: function() {
    // Render logic for Lana
  }
};

// Add employee objects to the array
employees.push(ghazi, lana);

function renderEmployees() {
  const employeeContainer = document.getElementById('employee-container');
  employeeContainer.innerHTML = ''; // Clear existing content

  employees.forEach(function(employee) {
    employee.render();
  });
}

renderEmployees();
