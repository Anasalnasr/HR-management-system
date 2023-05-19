const employees = [
    {
      id: 1000,
      fullName: 'Ghazi Samer',
      department: 'Administration',
      level: 'Senior',
      imageURL: 'assets/1.jpg',
      salary: calculateSalary('Senior')
    },
    {
      id: 1001,
      fullName: 'Lana Ali',
      department: 'Finance',
      level: 'Senior',
      imageURL: 'assets/2.jpg',
      salary: calculateSalary('Senior')
    },
    {
      id: 1002,
      fullName: 'Tamara Ayoub',
      department: 'Marketing',
      level: 'Senior',
      imageURL: 'assets/Gir.jpg',
      salary: calculateSalary('Senior')
    },
    {
      id: 1003,
      fullName: 'Safi Walid',
      department: 'Administration',
      level: 'Mid-Senior',
      imageURL: 'assets/3.jpg',
      salary: calculateSalary('Mid-Senior')
    },
    {
      id: 1004,
      fullName: 'Omar Zaid',
      department: 'Development',
      level: 'Senior',
      imageURL: 'assets/download.jpg',
      salary: calculateSalary('Senior')
    },
    {
      id: 1005,
      fullName: 'Rana Saleh',
      department: 'Development',
      level: 'Junior',
      imageURL: 'assets/LA.jpg',
      salary: calculateSalary('Junior')
    },
    {
      id: 1006,
      fullName: 'Hadi Ahmad',
      department: 'Finance',
      level: 'Mid-Senior',
      imageURL: 'assets/5.jpg',
      salary: calculateSalary('Mid-Senior')
    }
  ];
  
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
  
  // Call the render function to display the employees
  renderEmployees();
  