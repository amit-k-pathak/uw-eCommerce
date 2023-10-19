 function copyAddress() {
    if (document.getElementById("sameAddress").checked) {
      var billingAddressLine1 = document.getElementById("address1").value;
      var billingAddressLine2 = document.getElementById("address2").value;
      var billingCity = document.getElementById("city").value;
      var billingState = document.getElementById("state").value;
      var billingZipCode = document.getElementById("zipCode").value;
      var billingCountry = document.getElementById("country").value;
	  var billingContactPerson = document.getElementById("contactPerson").value;
	  var billingPhone = document.getElementById("phone").value;

      // Copy billing address to shipping address
      document.getElementById("shippingAddressLine1").value = billingAddressLine1;
      document.getElementById("shippingAddressLine2").value = billingAddressLine2;
      document.getElementById("shippingCity").value = billingCity;
      document.getElementById("shippingState").value = billingState;
      document.getElementById("shippingZipCode").value = billingZipCode;
      document.getElementById("shippingCountry").value = billingCountry;
	  document.getElementById("shippingContactPerson").value = billingContactPerson;
	  document.getElementById("shippingPhone").value = billingPhone;
    } else {
      // Clear shipping address
      document.getElementById("shippingAddressLine1").value = "";
      document.getElementById("shippingAddressLine2").value = "";
      document.getElementById("shippingCity").value = "";
      document.getElementById("shippingState").value = "";
      document.getElementById("shippingZipCode").value = "";
      document.getElementById("shippingCountry").value = "";
	  document.getElementById("shippingContactPerson").value = "";
	  document.getElementById("shippingPhone").value = "";
    }
  }