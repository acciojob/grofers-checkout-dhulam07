const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	// Add your code here
	
  // Get all price elements - works with both .price and .prices classes
  const priceElements = document.querySelectorAll('.prices, .price');
  
  // Convert text content to numbers and sum
  let total = 0;
  priceElements.forEach(element => {
    const value = parseInt(element.textContent.trim(), 10);
    if (!isNaN(value)) {
      total += value;
    }
  });
  
  // Get table and remove existing total row
  const table = document.querySelector('table');
  const existingTotal = table.querySelector('#ans');
  if (existingTotal) {
    existingTotal.parentElement.remove();
  }
  
  // Create new total row
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.id = 'ans';
  totalCell.colSpan = 2;
  totalCell.textContent = total.toString();  // Just the number for test
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';
  
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
