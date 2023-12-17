// console
// console.log("Shaban Khan JavaScript Notes December 2023 ...");

/*
===============================================================================================================
2. Data Types in JS

 var myName = "Shaban Khan";
console.log(myName);
console.log(typeof(myName));

var myAge = 24;
console.log(myAge);
console.log(typeof(myAge))

var isAdmin = true
console.log(isAdmin)
console.log(typeof(isAdmin)) 

*/

/*
===============================================================================================================
Challange 1 Guess the output

we are using typeof() for getting type of data

console.log(10+"20") //1020 
console.log(10*"20") // 200
console.log(10-"shaban") // NaN
console.log(10+"Shaban") // 10Shaban

Any arithematic operation perfromed between number_string other than '+' , will
be solved as integer operation , but '+' operation will act as concatination

console.log(typeof(10+"20")) // (string)

console.log(10-"20") //10 (int)
console.log("Shaban "+ "Khan"); // Shaban Khan (string )
console.log(" "+" ") //    (sting)
console.log(" "+0)  // 0 (string)
console.log("Shaban " - "Khan") // NaN

console.log(true+true) // 2 (int)
console.log(true+false) // 1 (int)
console.log(false+false) // 0 (int)
console.log(false-true) //-1 (int)

*/

/*
===============================================================================================================
Question 1 "What is the difference between "null" & "undefine"

var myVar;
console.log(typeof(myVar)) //undefine (undefine) because datatype not define

var myNull = null 
console.log(myNull) // null (object)
*/

/*
===============================================================================================================
Question 2 What is NaN (Not a Number )
Ans : if we want to perform any arithimatic operation between
(string & string), (string & integer) other than addition , it will return NaN value , which means it
can not be treated as number 

Although, if we want to perform operation between two strings which contains
numbers as string , then it'll perform the artithematic operation on numbers
Eg. ("9" - 5) = 4

To check if NaN we use 'isNan()'

Practice quesitons

console.log(NaN === NaN); // false 
console.log(Number.NaN === NaN) // false 
console.log(isNaN(NaN)); // true 
console.log(Number.isNaN(NaN)) //true

*/

/*
===============================================================================================================
3. Operators in JavaScript

    3.1 Aassignment operator 
        var myVar1 = 5
        var myVar2 =5
    
    important output 
    console.log("Is two variable equal "+ myVar1===myVar2)
    //Is two variable equal false 
    //because the additing will be performed first , thus the result will be false 
    
    //so always use new mehtod
    console.log(`Is two variable equal ${myVar1 === myVar2}`)

    ________________________________________________________________________________________________


   3.2 Arithematic operators 
    It take two operands and give one output
    console.log(3+5) //8
    console.log(7-2) //5
    console.log(14/2) //7
    console.log(7*7) //49
    console.log(12%10) //2 remainder

    ________________________________________________________________________________________________

    3.3 Increament and Decrement operator prefix(++i) postfix(i++)

    var num = 5
    var new_num = num++;
    console.log(num) // 6
    console.log(new_num) //5

    var num = 5
    var new_num = ++num;
    console.log(num); // 6
    console.log(new_num) //6

    ________________________________________________________________________________________________

    3.4 Comparison operator 

    var a =20
    var b=40 
    console.log(a==b) // false
    consol.log(a > b ) //false
    console.log(a<b) //true
    console.log(a!=b) //true


    var a ="40"
    var b=40 
    console.log(a==b) // true

    ________________________________________________________________________________________________

    3.5 Logical Operator returns(true/false)

    //&& (AND Operator) returns true only if both conditions satisfied
    var a ="40"
    var b=40 
    console.log(a==b && a<=b) // true


    // || (OR Operator) returns true if any one condition is true
    console.log(a==b || a!=b) // true  

    // ! (NOT operator) returns opposite 
    console.log(!(a==b)) // flase

    ________________________________________________________________________________________________
    3.5 String Operators

    //concatination operators (+)




*/

/*
Q.3 Outputs of the following 
    i. console.log(3**3) // 9
    ii. console.log(90+"shaban") // 90shaban
    iii. Write a program to swap two numbers

        function swapn(a , b)
        {
            a = a^b
            b = a^b
            a=a^b
            console.log(`${a} , ${b}`)
        }

*/

/*
Q.4 what is differance between ==  and ===
    == is losse comparision check 
    === is strict comparision check 
    var a = 5;
    var b = '5';
    console.log(a==b) //true
    console.log(a===b) // false

 */

// ===============================================================================================================
// 4. Controll statements and loops
//     4.1 if else statement

//         var isRaining = true;
//         if(isRaining)
//         {
//             console.log("Take Umbrella");
//         }
//         else
//         {
//             console.log("No Need to take Umbrella");
//         }
//      ________________________________________________________________________________________________
//     4.2 ternary Operator  (condition)?"true":"false"
//         var age = 18;
//         console.log((age>=18)? "You  are eligible ":"Not Eligible")
//         //you are eligible
//      ________________________________________________________________________________________________
//     4.3 Switch Statements
//      
//         var poption = 3;

//         switch(poption)
//         {
//             case 1:
//                     console.log("You choosed option 1");
//                     break;
//             case 2:
//                 console.log("You choosed option 2");
//                 break;
//             case 3:
//                 console.log("You choosed option 3");
//                 break;
//             default:
//                 console.log("You didn't selected defined option ")
//                 break;

//         }
//      ________________________________________________________________________________________________

//     4.4 While loop
//         var c = 10
//         while(c--)
//         {
//             console.log("Hello world")
//         }

//      ________________________________________________________________________________________________

//     4.5 do while // it will run minimum 1 time

//         var num =1;

//         do {
//             console.log(num++);
//         }while(num<=10)
//      ________________________________________________________________________________________________
//     4.6 For Loop
//     for(var i=1;i<=10;i++)
//     {
//         console.log(`2 X ${i} = ${2*i} `)
//     }

/*
===============================================================================================================
    5. Functions
    function sum2(a=0,b=0)
    {
        console.log(a+b);
    }
    sum2(); //0
    sum2(50,40); //90

    ________________________________________________________________________________________________

  5.1 function expression  
   Assinging a function to a variable 

   function sum2(a=0,b=0)
    {
        return a+b;
    }
    var funExp = sum2(50,40); // function expressions
    console.log(funExp); // 90
     ________________________________________________________________________________________________

    5.2 Anonymous function
    var funExp =  function(a=0,b=0)
    {
        return a+b;
    }

    console.log(funExp(20,30)); //50
*/

/*===============================================================================================================
// 6. ECMA Script

    6.1 "let" and  "const"
    

    var => function scope 
    let & const => block scope 

    function myfun()
    {
        if(true)
        {
            var fname = "Shaban";
        }
        console.log(fname); //shaban
    }
    myfun();


    function myfun()
    {
        if(true)
        {
            const fname = "Shaban";
            let lname ="khan"
        }
        console.log(fname); //error
        console.log(lname); //error
    }
    myfun();

    ________________________________________________________________________________________________

    6.2 Temple letrals

       -> if we want to write a statement with multiple of variables ,
       -> it can easily be done using templet letrals 

        e.g for(let i =1;i<=10;i++)
        {
            console.log("2 X "+i+" = "+ 2*i)// 2 X 1 = 2 ......
        }

        this console function can be simply be written as using templet letrals
            console.log(`2 X ${i} = ${2*i} `)

    ________________________________________________________________________________________________

    6.3 Default Paramenters

       -> providing a default value in a function's parameter

        function multi(a,b=5)
        {
            return a*b;
        }
        console.og(multi(5)) // 25

    ________________________________________________________________________________________________

    6.4 Fat Arrow function 

        -> fat arrow says to define a function before calling it.
        -> if a function has only one statement , then no need to write a return statement
        -> can not use "this" keyword

        
        const sum = (a,b) =>  `The sum of two numbers is ${a+b}`;
        console.log(sum(5,4)); //9
    ________________________________________________________________________________________________

    6.5 for in loop 
        -> it itrates over array and give the index 

        var empDAta = ['shaban',24,'male' , 'manoj', 25, 'male'];

        for (let ele in empDAta )
        {
            console.log(ele); //0 1 2 3 4 5 
        }

     ________________________________________________________________________________________________

    6.6 for of loop 
        ->it itrates over an array and gives the element of that index

        var empDAta = ['shaban',24,'male' , 'manoj', 25, 'male'];

        for(let ele of empDAta)
        {
            console.log(ele); // shaban 24 male manoj 25 male
        }
     ________________________________________________________________________________________________

     6.7 For Each loop

        ->It is a combination of both for-in and for-off, and it also
            shows every elements of aaray 
            var empDAta = ['shaban',24,'male' , 'manoj', 25, 'male'];

            empDAta.forEach(function (ele,index,array) {
                
                console.log(`${ele} , index = ${index} , Array elements = ${array}`)
            })

        -> OutPut 
        shaban , index = 0 , Array elements = shaban,24,male,manoj,25,male
        24 , index = 1 , Array elements = shaban,24,male,manoj,25,male
        male , index = 2 , Array elements = shaban,24,male,manoj,25,male
        manoj , index = 3 , Array elements = shaban,24,male,manoj,25,male
        25 , index = 4 , Array elements = shaban,24,male,manoj,25,male
        male , index = 5 , Array elements = shaban,24,male,manoj,25,male
*/



/*===============================================================================================================
// 7. Arrays 
    in js we can store different variables in same array 
    var empDAta = ['shaban',24,'male' , 'manoj', 25, 'male'];
    console.log(empDAta.length) // 3


    7.1 Searching And Filter in An Array 




    7.3 CRUD operations in array

        var empDAta = ['shaban',24,'male' , 'manoj', 25, 'male'];

            7.3.1 push()
            -> add an element from end of an array 
            -> returns the length of new array 

                var newArray = empDAta.push("World");

                console.log(empDAta); // ['shaban', 24,'male','manoj', 25, 'male','World']
                console.log(newArray); // 7
            
            7.3.2 unshift() 
                ->adds an element at start of an array
                ->returns the length of new array 

                var newArray = empDAta.unshift("Hello");

                console.log(empDAta); // ['Hello', 'shaban', 24,'male','manoj', 25, 'male','World']
                console.log(newArray); // 8
            
            7.3.4 pop()
                -> removes the element form the last position 
                -> returns the removed element 

                var newArray = empDAta.pop();
                
                console.log(empDAta); // ['Hello', 'shaban', 24,'male','manoj', 25, 'male']
                console.log(newArray); // world
            
            7.3.5 shift() 

                ->removed the element from the first position 
                -> returns the removed element 
                
                var newArray = empDAta.shift();
                
                console.log(empDAta); // ['shaban', 24,'male','manoj', 25, 'male']
                console.log(newArray); // Hello

            
*/
