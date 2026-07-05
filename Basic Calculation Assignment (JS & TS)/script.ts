/* 1. The Four Outputs: Write a TypeScript program that displays a welcome
message using all four output methods covered in class: console.log(),
document.write(), alert(), and innerHTML. */

console.log("============ 1. ============\n");

console.log("Hello Welcome to typescript");

document.write(`<h1>Welcome</h1>`);

alert("Hello from TypeScript!");

document.getElementById("heading2")!.innerHTML = "Prince";

/*2. Data Type Declaration: Declare four variables explicitly using TypeScript data
types: a string (name), a number (age), a boolean (isStudent), and an any
(dynamic value), then initialize and print them.*/

console.log("============ 2. ============\n");

var username: string = "Alice";
var age:number = 19;
var isStudent:boolean = true;

console.log(username);
console.log(age);
console.log(isStudent);

/*3. ES5 vs ES6 Scope: Write a program that demonstrates the difference between
var (ES5) and let/const (ES6) regarding block scope by showing which
variables are accessible inside and outside a { } block.*/

console.log("============ 3. ============\n");

// ES5
var x:number = 10;
if (true) {
    var x = 2; // Overwrites the x above!
}
console.log(x); // Outputs 2


// ES6
// let y = 10;      <-- Can't redeclare out of scope.
if (true) {
    let y:number = 2; // This is a completely separate variable
    console.log(y); // Outputs 2
}
// console.log(y);  <-- Unaccessible out of scope.


/*4. Const Mutation: Declare an object or array using const and demonstrate that
while you cannot reassign the variable itself, you can change its internal
properties or elements. */

console.log("============ 4. ============\n");

{
    const ary = [1, 2, 3, 4, 5]
    
    // var ary = ["a", "b", "c"] <-- Can't Reassign.
    // You can change it's internal properties or elements. like this...
    
    console.log(ary);
    
    ary[2] = 8
    
    console.log(ary);
    
}

/* 5. Simple Swapping (With Temp): Write a TypeScript program to swap the
values of two variables using a third temporary variable, displaying the
"Before" and "After" values using innerHTML.*/

console.log("============ 5. ============\n");

{
    let firstNo:number = 10
    let secondNo:number = 20
    
    console.log(`Before swapping :- First Number = ${firstNo}, Second Number = ${secondNo}`);
    
    let temp:number = firstNo
    firstNo = secondNo
    secondNo = temp
    
    console.log(`After swapping :- First Number = ${firstNo}, Second Number = ${secondNo}`);
}

/* 6. Advanced Swapping (Without Temp): Swap two numbers without using a third
variable (using addition and subtraction logic), and output the results using
console.log().*/

console.log("============ 6. ============\n");

{
    let firstNo:number = 7
    let secondNo:number = 2
    
    console.log(`Before swapping :- First Number = ${firstNo}, Second Number = ${secondNo}`);
    
    firstNo = ((2*firstNo) + secondNo) - firstNo
    secondNo = firstNo - secondNo
    firstNo = firstNo - secondNo
    
    console.log(`Before swapping :- First Number = ${firstNo}, Second Number = ${secondNo}`);
}

/* 7. Calculator Basics: Declare two number variables and perform addition,
subtraction, multiplication, division, and modulus on them, displaying the
results via document.write().*/

console.log("============ 7. ============\n");

{
    let no1 = 5
    let no2 = 10
    
    let addition:number = no1 + no2
    let substraction:number = no1 - no2
    let multiplication = no1 * no2
    let division:number = no1 / no2
    let modulus:number = no2 % no1
    
    console.log("<-----   Output is in document.");
    
    document.write(`<h2>No1 = ${no1} & No2 = ${no2}</h2><br>`)
    document.write(`<h3>Addition = ${addition}</h3><br>`)
    document.write(`<h3>Substraction = ${substraction}</h3><br>`)
    document.write(`<h3>Multiplication = ${multiplication}</h3><br>`)
    document.write(`<h3>Division = ${division}</h3><br>`)
    document.write(`<h3>Modulus = ${modulus}</h3><br>`)
    
}
/* 8. Area of a Circle: Write a program to calculate the area of a circle by declaring
the radius as a number and PI as a const (3.14159).*/

console.log("============ 8. ============\n");
{
    let radius:number = 12.5
    const PI:number = 3.14159
    
    console.log(`The Radius of circle is :- ${radius}`);
    console.log(`The Area of a circle is :- ${PI*radius*radius}`);
    
}

/* 9. Simple Interest: Calculate simple interest by defining variables for Principal,
Rate, and Number of years using the formula: (P * R * N) / 100. */

console.log("============ 9. ============\n");

{
    let prAmmount:number = 200000
    let rateOfinterest:number = 12    // in percentage(%)
    let timeInyears:number = 1.5
    
    let simpleInterest = (prAmmount * rateOfinterest * timeInyears) / 100
    
    console.log(`Principle Ammount is :- ${prAmmount}\nRate Of Interest :- ${rateOfinterest}\nTime Period :- ${timeInyears}`);
    console.log(`Simple Interest is :- ${simpleInterest}.`);
    
}

/*10. Temperature Converter: Convert a temperature from Celsius to Fahrenheit
using the formula (C * 9/5) + 32 and display the result using an alert(). */

console.log("============ 10. ============\n");

{
    let tempinCelsius = 27  // in Degree(°)
    let tempinFahrenheit = (tempinCelsius *(9/5)) + 32
    
    alert(`Temperature in Celsius = ${tempinCelsius}\nTemperature in Fahrenheit = ${tempinFahrenheit}`)
    
    console.log("Output in Alert Box.");
    
}

/*11. Basic Restaurant Bill: Declare variables for the prices of three food items,
calculate the subtotal, add a 5% GST using arithmetic operators, and display
the final bill using innerHTML.*/

console.log("============ 11. ============\n");

{
    let fooditem1_price = 200
    let fooditem2_price = 310
    let fooditem3_price = 475
    let totalitem_price = fooditem1_price + fooditem2_price + fooditem3_price
    let gst = totalitem_price * (0.05)
    
    let rest_finalBill = totalitem_price + gst
    
    document.getElementById("restBill")!.innerHTML = `Final Bill is :- ${rest_finalBill}`
    
    console.log("<----  Output at document file.");
    
}

/*12. Discount Calculation: Calculate the final selling price of a product by
declaring its original price and applying a 15% discount. */
console.log("============ 12. ============\n");

{
    let productPrice = 120
    let discount = 15
    
    let totalPrice = productPrice - (productPrice * 0.15)
    
    console.log(`Product Price is :- ${productPrice}/-\nApplied Discount is :- ${discount}%`);
    console.log(`Total Price is :- ${totalPrice}/-`);
    
}

/*13. Employee Salary (Simple): Calculate an employee's Gross Salary by adding
HRA (10% of basic) and DA (5% of basic) to a predefined Basic Salary.
14. Employee Salary (With Deductions): Extend the previous salary program to
calculate Provident Fund (12% of Basic) and determine the Net Salary (Gross -
PF), outputting the slip to console.log(). */

console.log("============ 13 & 14 ============");

{
    let baseSalary = 30000
    let hra = baseSalary * 0.1
    let da = baseSalary * 0.05
    let proFund = baseSalary * 0.12
    let grossSalary = baseSalary + hra + da - proFund
    
    console.log(`Base Salary :- ${baseSalary}`);
    console.log(`HRA :- ${hra}`);
    console.log(`DA :- ${da}`);
    console.log(`Provident Fund :- ${proFund}`);
    console.log(`Gross Salary :- ${grossSalary}`);
    
}

/*15. Days Converter: Convert a given total number of days (e.g., 400) into Years,
Months, and remaining Days using arithmetic and modulus operators.*/

console.log("============ 15 ============");
{
    let tDays = 87346
    let years = tDays / 365
    let months = (tDays % 365) / 30
    let rDays = (tDays % 365) % 30
    
    console.log(`Total Days :- ${tDays}`);
    
    console.log(`Years :- ${Math.trunc(years)}\nMonths :- ${Math.trunc(months)}\nDays :- ${rDays}`);
}

/*16. Type Conversion (String to Number): Declare two numeric strings (e.g., "10"
and "25"), convert them to actual numbers, add them together, and print the
result to demonstrate proper conversion vs. concatenation.*/
console.log("============ 16 ============");
{
    let strtoNum1 = "10"
    let strtoNum2 = "25"
    console.log("Conversion :-------------------------");
    
    console.log(`String "10" in number :- ${Number("10")}`);
    console.log(`String "25" in number :- ${Number("25")}`);
    
    console.log("Concatenation :-------------------------");
    
    console.log(`Result("10" + "25") = ${strtoNum1 + strtoNum2}`);
}

/*17. Even or Odd: Use the modulus operator (%) and comparison operators to
check if a given number is even or odd, storing and displaying the boolean
result.*/

console.log("============ 17 ============");
{
    let oddEvenNums = [1, 22, 35, 4, 5]
    console.log(`This the array :- ${oddEvenNums}`);
    
    for(let i of oddEvenNums){
        if(i % 2 == 0) {
            console.log(`${i} Even :- ${false}`);
        }
        else{
            console.log(`${i} Odd :- ${true}`);
        }
    }
}

/*18. Maximum of Two: Use comparison operators and the ternary operator (? :) to
find and print the maximum value between two numbers.*/

console.log("============ 18 ============");
{
    let value1 = 23
    let value2 = 45
    console.log(`Value 1 is :- ${value1}\nValue 2 is :- ${value2}`);
    
    value1 > value2 ? console.log(`Value 1 is Max.`) : console.log(`Value 2 is Max.`);
}

/*19. Student Grade Logic: Take a student's marks in 3 subjects, calculate the total
and percentage, and use logical operators (&&) to set a boolean flag to true if
the percentage is above 75.*/
console.log("============ 19 ============");

{
    let mathMarks = 90
    let scienceMarks = 85
    let engMarks = 91
    
    let totalMarks = mathMarks + scienceMarks + engMarks
    let stuPercentage = totalMarks / 3
    
    console.log(`Student Marks is :-\nMaths :- ${mathMarks}\nScience :- ${scienceMarks}\nEnglish :- ${engMarks}`);
    console.log(`Student Percentage :- ${stuPercentage}`);
    if((mathMarks > 75) && (scienceMarks > 75) && (engMarks > 75) && (stuPercentage > 75)){
        console.log(`Result :- PASS (${true})`);
    }   
}

/*20. Leap Year Checker: Check if a year is a leap year (divisible by 4 but not by
100, OR divisible by 400) using logical operators, and display the boolean
result.*/
console.log("============ 20 ============");
{
    let leapOrnotyear = 2000

    if(((leapOrnotyear % 4 == 0) && (leapOrnotyear % 100 != 0)) || (leapOrnotyear % 400 == 0)){
        console.log(`Leap Year(${leapOrnotyear}) :- ${true}`);
    }
    else{
        console.log(`Not Leap Year (${leapOrnotyear}) :-  ${false}`);
    }
}