### Task1
long text
upper lower space
no leading/trailing/double space

input
text

output
number of messages to send the entier text

constraints
can contain k chracters
each must be max length
don't split word
concatinating messages retrieve original text
space at the start and end of the messages are removed

be correct rather than care for the performance

### Task2
person
- first name, last name should not be empty
- email should not be empty
- email whould validate one @ character
- email should have one of 64 chars on both sides
- a~z, A~Z, 0~9, . 
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

### Task3

two non-negative numbers n and m

similar if their decimal representation can be obtained from each other by rearranging their digits. 

Note that a correct decimal representation does not contain leading zeroes

1234 is similar to 2431
1010 is similar to 1001
12 is similar to 12
123 is not similar to 234
113 is not similar to 133
100 is not similar to 10

Input: non-negative integer N
Output: number of non-negative integer similar to N

