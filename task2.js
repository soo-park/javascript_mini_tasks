/*
person
- first name, last name should not be empty
- email should not be empty
- email whould validate one @ character
- email should have one of 64 chars on both sides
- .@. valid
- @exampl.com not valid

company
- company_name should not be empty
- phone should not be empty
- digits, dash, space only
- at least six digits

returns
Boolean indicating whether the form is valid or not

Use HTML5
there is only one form in the doc with right fields
length of HTML should not exceed 4KB
jQuery 2.1 supported
access dom by using
document.getElementById
or by using jQury
$('some_tag')
*/

function solution() {

  if($('#type_person').is(':checked')) {
    console.log("person is checked");

    if ($('#first_name').val() === "" ||
        $('#last_name').val() === "" ||
        $('#email').val() === "") {
      return false;
    }
    
    // write email validation
    console.log("email box value is ", $('#email').val())

  } else if ($('#type_company').is(':checked')) {
    
    console.log("company is checked");
    console.log("company name box value is ", $('#company_name').val())
    console.log("phone box value is ", $('#phone').val())

   }
}

console.log(solution());