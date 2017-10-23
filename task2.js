function solution() {

  var numbers = [];
  for (var i = 0; i < 10; i++) {
    numbers.push(i.toString());
  }

  if($('#type_person').is(':checked')) {
    if ($('#first_name').val() === "" ||
        $('#last_name').val() === "" ||
        $('#email').val() === "") {
      return false;
    }

    // email validator
    function emailValidator(email) {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'
      var alpha_lower = alphabet.split('');
      var alpha_upper = alphabet.toUpperCase().split('');
      var available = alpha_lower.concat(alpha_upper).concat(numbers).concat(["."]);
      var emailSplit = email.split("@");

      if(emailSplit.length === 2 &&
        emailSplit[0].length !== 0 &&
        emailSplit[1].length !== 0 &&
        emailSplit[0].length <= 64 &&
        emailSplit[1].length <= 64) {

        emailSplit = emailSplit.join('');
        for (let i = 0; i < emailSplit.length; i++) {
          if (available.indexOf(emailSplit[i]) === -1) {
            return false;
          }
        }
      } else {
        return false;
      }
      return true;
    }

    // write email validation
    return emailValidator($('#email').val());

  } else if ($('#type_company').is(':checked')) {
    if ($('#company_name').val() === "" ||
        $('#phone').val() === "") {
      return false;
    }

    // phone number validator
    function phoneNumberValidator(phone) {
      var available = numbers.concat(["-", " "]);
      var numberCounter = 0;
      
      for (let i = 0; i < phone.length; i++) {
        if(available.indexOf(phone[i]) === -1) {
          return false;
        }
        if (phone[i] !== "-" && phone[i] !== " " ) {
          numberCounter++;
        }
      }

      if (numberCounter < 6) {
        return false;
      }
      return true;
    }

    // write phone validataion
    return phoneNumberValidator($('#phone').val());
   }
}

console.log(solution());