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

    //3.1 Aassignment operator 
        var myVar1 = 5
        var myVar2 =5
    
    important output 
    console.log("Is two variable equal "+ myVar1===myVar2)
    //Is two variable equal false 
    //because the additing will be performed first , thus the result will be false 
    
    //so always use new mehtod
    console.log(`Is two variable equal ${myVar1 === myVar2}`)

    ________________________________________________________________________________________________


   //3.2 Arithematic operators 
    It take two operands and give one output
    console.log(3+5) //8
    console.log(7-2) //5
    console.log(14/2) //7
    console.log(7*7) //49
    console.log(12%10) //2 remainder

    ________________________________________________________________________________________________

    //3.3 Increament and Decrement operator prefix(++i) postfix(i++)

    var num = 5
    var new_num = num++;
    console.log(num) // 6
    console.log(new_num) //5

    var num = 5
    var new_num = ++num;
    console.log(num); // 6
    console.log(new_num) //6

    ________________________________________________________________________________________________

    //3.4 Comparison operator 

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

    //3.5 Logical Operator returns(true/false)

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

/*
===============================================================================================================
4. Controll statements and loops
    4.1 if else statement

        var isRaining = true;
        if(isRaining)
        {
            console.log("Take Umbrella");
        }
        else
        {
            console.log("No Need to take Umbrella");
        }
     ________________________________________________________________________________________________
    4.2 ternary Operator  (condition)?"true":"false"
        var age = 18;
        console.log((age>=18)? "You  are eligible ":"Not Eligible")
        //you are eligible
     ________________________________________________________________________________________________
    4.3 Switch Statements
     
        var poption = 3;

        switch(poption)
        {
            case 1:
                    console.log("You choosed option 1");
                    break;
            case 2:
                console.log("You choosed option 2");
                break;
            case 3:
                console.log("You choosed option 3");
                break;
            default:
                console.log("You didn't selected defined option ")
                break;

        }
     ________________________________________________________________________________________________

    4.4 While loop
        var c = 10
        while(c--)
        {
            console.log("Hello world")
        }

     ________________________________________________________________________________________________

    4.5 do while // it will run minimum 1 time

        var num =1;

        do {
            console.log(num++);
        }while(num<=10)
     ________________________________________________________________________________________________
    4.6 For Loop
    for(var i=1;i<=10;i++)
    {
        console.log(`2 X ${i} = ${2*i} `)
    }

*/
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
6. ECMA Script

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
7. Arrays 
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
    ________________________________________________________________________________________________

    7.3 Sort an array 
        It converts elements in string and then sort

        const array = ['Hello', 'shaban', 24,'male','manoj', 25, 'male'];
        array.sort();
        console.log(array) // [ 24,       25, 'Hello',  'male','male',   'manoj', 'shaban']


        const array = [12, 34,12200,1233,12 , 6];
        array.sort();
        console.log(array) // [ 12, 12, 12200, 1233, 34, 6 ]

        //on sorting numbers it will produce an incorrect method
    ________________________________________________________________________________________________

     7.4 map() 

     ->returns a new array containing all the results.
     -> difference between map() and forEach()
            -map() is chaninable i.e we can add multiple chain on map().filter().sort()
             but we can't do that in forEach 
             - forEach() returns undefine 

    const array = [1,4,9,16,25];

    const newArray = array.map((currElement , index, arr)=>
    {
        return `Current element is ${currElement} and it's index is ${index}  from array ${arr} `; 
    })
    console.log(array); //[ 1, 4, 9, 16, 25 ]
    console.log(newArray);
    [
        "Current element is 1 and it's index is 0  from array 1,4,9,16,25 ",
        "Current element is 4 and it's index is 1  from array 1,4,9,16,25 ",
        "Current element is 9 and it's index is 2  from array 1,4,9,16,25 ",
        "Current element is 16 and it's index is 3  from array 1,4,9,16,25 ",
        "Current element is 25 and it's index is 4  from array 1,4,9,16,25 "
    ]

    ________________________________________________________________________________________________

    7.5 reduce()

        -> use to flatten an array , which means it is use to convert a 
            2d and 3d array into single dimenssion array

        -> it is also use to find the single value like sum, average of an array 

        const arr1 = [4,9,16,25,36,49];
        const sum = arr1.reduce((accumulator, ele, index, array)=> accumulator+=ele );
        console.log(sum) // 139


        const array = [[5,4,2,1],[2,0,12],[17,9,8]];
        console.log(array)
        const flatArray = array.reduce((acc,ele)=> acc.concat(ele) )
        console.log(flatArray); //[  5,  4,  2, 1, 2, 0, 12, 17, 9, 8  ]
    _______________________________________________________________________________________________

    
*/


//Q.5 Perform following operation on this array using only 'splice(starting number , delete count number , data )'

// ->splice() method returns the array of elements which id deleted 

// const array = ['January', 'march', 'April','June', 'July'];

// // -> add "December" at the end 


// const newMonth = array.splice(array.length, 0,'November');
// const newNextMonth = array.splice(array.length, 0,'December');
// console.log(array); // [ 'January',  'march','April','June', 'July','November','December']

// console.log(newMonth);// []
// console.log(newNextMonth) //[] 



// // -> update 'march' to march 

// const updateMonth = array.splice(array.indexOf('march'),1,"March");// 
// console.log(updateMonth) // [ 'march' ]
// console.log(array)  // [ 'January',  'March','April','June', 'July','November','December']



//Q.6  (i)find the square root of each element of the arr1
    // const arr1 = [4,9,16,25,36,49];

    // // const newarr1 = arr1.map((ele)=>
    // // {
    // //     return Math.sqrt(ele)
    // // })
    // //console.log(newarr1); // [ 2, 3, 4, 5, 6, 7 ]

    // //(ii) Multiply each element by 2 , and returns only those element which are greater by 10

    // const newArray = arr1.map((ele)=> ele *2 ).filter((ele)=> ele>10 )
    // console.log(newArray) //[ 18, 32, 50, 72, 98 ]

    
/*===============================================================================================================
8. Strings

->Strings can be declred using single or double quote sign or tamplete letrals``

    //8.1 length 

    const str = "Hello , I'am Shaban Khan";
    console.log(str) // 
    console.log(str.length) //24

    ________________________________________________________________________________________________


    //8.2 Escape Characters

    const str = "This is a \"string \" which is using ecape character ";
    console.log(str) // This is a "string " which is using ecape character 

    ________________________________________________________________________________________________


    //8.3 finding string in a string and search()

    const str = "Hello , I'am Shaban Khan";
    console.log(str.indexOf("Shaban")); //13
    console.log(str.indexOf("Play")); // -1 (not found)


    console.log(str.indexOf("a")) // 10
    //finding a character after 13th place 
    console.log(str.indexOf("a",13)) //15

    console.log(str.search("Shaban"))// 13
    ________________________________________________________________________________________________

    //8.4 Extracting String parts slice(start,end) , 

    ->slice() includes the starting point but excludes the end point

    var str = "Apple, Banana , Kiwi";

    var res = str.slice(0,5);
    console.log(res) // Apple
    console.log(str.slice(7,-2)) // Banana , Ki

    ->substring() it is similar to slice(), but it doesn't takes 
        negative value 

        console.log(str.substring(0,5)) //Apple
        console.log(str.substring(8,-1)) // Apple, B
    
    -> substr() we cann't add negative in range 
        we can use it to extracting from last position
        
        console.log(str.substr(-4)) // Kiwi

_______________________________________________________________________________________________


//Q.7 display only 280 characters of string  
//    const mytext = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus reiciendis pariatur fuga sapiente cumque voluptates minima quis eaque quibusdam impedit, perspiciatis quam incidunt sequi possimus aperiam? Impedit alias culpa earum!
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum explicabo vero alias corrupti quod, consequuntur porro laboriosam quis error optio totam! Quo aliquam dignissimos ipsa iste, reiciendis dolorem impedit!
//    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro soluta rem reprehenderit aliquam labore sunt maiores fugit inventore expedita suscipit qui, tempora nostrum repudiandae temporibus blanditiis dolorem unde in ducimus.
//    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cumque natus possimus, sunt nihil provident doloribus harum cupiditate odit, quis maxime, animi adipisci perferendis accusamus quo mollitia error debitis eos.`;

//    const shortText =mytext.slice(0,280);
//    console.log(shortText);
//    console.log(shortText.length); //280

_______________________________________________________________________________________________

    //8.5 Replacing string contents
    
    ->replace() , this function returns a new string by changing the first occurance of the word
    ->this is a case sensitive 

    const text = `Shaban , Hello wrold this is Shaban Khan`;
    let replacedText = text.replace('Shaban','playshaban');
    console.log(replacedText); // playshaban, Hello world this is Shaban khan

    ________________________________________________________________________________________________


    //8.6 finding character at a position
    ->charAt(index_position) returns a charater


    const text = `Shaban , Hello wrold this is Shaban Khan`;
    console.log(text.charAt(10)); // e


    ________________________________________________________________________________________________


    //8.7 finding character unicode at a position
    -> it does not accepts the negative value

    const text = `Shaban , Hello wrold this is Shaban Khan`;
    console.log(text.charCodeAt(10)); // 101


    ________________________________________________________________________________________________


    //8.8 changing cases of string 
    -> toUpperCase()
    -> toLowerCase()

    const text = `Shaban , Hello wrold this is Shaban Khan`;
    console.log(text.toUpperCase()); // SHABAN , HELLO WROLD THIS IS SHABAN KHAN
    console.log(text.toLowerCase()) // shaban , hello wrold this is shaban khan

    ________________________________________________________________________________________________


    //8.9 concatination of strings
    -> str1.concat(str2)

    let text = `Shaban , Hello wrold this is Shaban Khan`;
    let newText = text.concat(". Rule the world")
    console.log(newText) // Shaban , Hello wrold this is Shaban Khan. Rule the world

    //8.10 removing blank spaces form start and end of an string 
    ->str.trim()

    let text = `    Shaban , Hello wrold this is Shaban Khan    `;
    console.log(text.trim()) // `Shaban , Hello wrold this is Shaban Khan. Rule the world`

    ________________________________________________________________________________________________
    //8.11 converting a stirng into an array 

    str.split('breaking_character');

    let text = `Shaban , Hello wrold this is Shaban Khan`;

    console.log(text.split(" ")) // [ 'Shaban',  ',' , 'Hello',  'wrold', 'this',   'is', 'Shaban', 'Khan' ]



===============================================================================================================
*/

