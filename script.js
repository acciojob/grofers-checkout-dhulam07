const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	// Get all price elements using class selector
  const priceElements = document.querySelectorAll('.price');
  
  // Convert text content to numbers and calculate total
  let total = 0;
  priceElements.forEach(element => {
    total += parseInt(element.textContent);
  });
  
  // Get the table
  const table = document.querySelector('table');
  
  // Create new row for total
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total: Rs ${total}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';
  
  // Add total cell to row and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

