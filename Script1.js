document.getElementById("invoiceForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Capture form data
    const itemName = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const unitPrice = parseFloat(document.getElementById("price").value);
    const taxRate = parseFloat(document.getElementById("tax").value);
  
    // Calculate subtotal, taxes, and total
    const subtotal = quantity * unitPrice;
    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount;
  
    // Display invoice details on the page
    const invoiceHTML = `
      <h2>FEMA - THE CLOTHING BRAND</h2>

      <table  border="1">
      <tr>
      <td><strong>Description:</strong></td>
      <td>${itemName}</td>
      </tr>
      <tr>
      <td><strong>Quantity:</strong></td>
      <td>${quantity}</td>
      </tr>
      <tr>
      <td><strong>Unit Price:</strong></td>
      <td>${unitPrice.toFixed(2)}</td>
      </tr>
      <tr>
      <td><strong>Tax (${taxRate}%):</strong></td>
      <td>${taxAmount.toFixed(2)}</td>
      </tr>
      <tr>
      <td><strong>Total Amount:</strong></td>
      <td>${total.toFixed(2)}</td>
      </tr>
      </table>
      <br>
      <h4> THANK YOU </h4>
    `;
  
    document.getElementById("invoiceOutput").innerHTML = invoiceHTML;
  
    // Show download button
    document.getElementById("downloadBtn").style.display = "inline";
  });
  
  // PDF Generation Function
  document.getElementById("downloadBtn").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const itemName = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const unitPrice = parseFloat(document.getElementById("price").value);
    const taxRate = parseFloat(document.getElementById("tax").value);
  
    const subtotal = quantity * unitPrice;
    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount;
  
    // Add content to the PDF
    doc.setFontSize(18);
    doc.text("Invoice", 105, 10, null, null, "center");
  
    doc.setFontSize(12);
    doc.text(`Description: ${itemName}`, 10, 30);
    doc.text(`Quantity: ${quantity}`, 10, 40);
    doc.text(`Unit Price: ${unitPrice.toFixed(2)}`, 10, 50);
    doc.text(`Tax (${taxRate}%): ${taxAmount.toFixed(2)}`, 10, 70);
    doc.text(`Total: ${total.toFixed(2)}`, 10, 80);
  
    // Save the PDF
    doc.save("invoice.pdf");
  });
  