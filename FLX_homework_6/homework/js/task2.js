function discPrice() {
    var amount = parseFloat(prompt("Please, enter an amount of money"));
    var discount = parseFloat(prompt("And your discount percentage is?"));
  
    if ( !isNaN(amount) && !isNaN(discount) && (amount >= 0 && discount >= 0 && (amount <= 9999999 && discount < 99))
    ) {
      const savings = (amount / 100) * discount;
      const discounted = amount - savings;
      return `
          Price without discount: ${+amount.toFixed(2)}
          Discount: ${+discount.toFixed(2)}%
          Price with discount: ${+discounted.toFixed(2)}
          Saved: ${+savings.toFixed(2)}`;
    } else {
      alert("Incorrect input data");
    }
  }
  alert(discPrice());