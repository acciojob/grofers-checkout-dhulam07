const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	// Get all price elements using class selector (matches test case)
  const priceElements = document.querySelectorAll('.price');
  
  // Convert text content to numbers and calculate total
  let total = 0;
  priceElements.forEach(element => {
    total += parseInt(element.textContent, 10);
  });
  
  // Get the table
  const table = document.querySelector('table');
  
  // Remove existing total row if present (for multiple clicks)
  const existingTotalRow = table.querySelector('td[colspan="2"]');
  if (existingTotalRow) {
    existingTotalRow.parentElement.remove();
  }
  
  // Create new row for total with ID for test verification
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.id = 'ans';  // Required for Cypress test
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: Rs ${total}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';
  
  // Add total cell to row and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

