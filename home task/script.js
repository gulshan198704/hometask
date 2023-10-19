/// Task 1 ///

1.
// var result = 12 * 8;
// console.log(result);

2.
// var result = 10 / 2;
// var x = result;
// console.log(x);

3.
// let num1 = 20;
// let num2 = 17;
// let sum = num1 + num2;
// console.log("The sum of num1 and num2 is: " + sum);

4.
// const name = 'Gulshan';
// const surname = 'Huseynzade';
// const birthyear = '1987';
// const info = name + ' ' + surname + ' ' + birthyear;
// console.log(info);

5.
// let remainder = 17 % 12;
// console.log(remainder);

6.

// let cityName = "Baku";
// cityName = "Gence";
// console.log(cityName);


///Task 2///

// let a = 1, b = 1;
// let c = ++a; 
// let d = b++; 

// console.log(c); 
// console.log(d);
// console.log(b); 


/// Task 3 ///

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); 


/// Task 4 ///

// console.log('test1', test);       //test is  not defined
// {
//     let test = "CS401"
//     console.log('test2', test);    // test2 CS401
// }
// console.log('test3', test);     // test is  not defined




// console.log('test1', test);         // test is undefined
// {
//     var test = "CyberSecurity"
//     console.log('test2', test);        //test2 CyberSecurity
// }
// console.log('test3', test);         //  test3 CyberSecurity    


///Task 5///

// let name = "Gulshan"
// let surname = "Huseynzade"
// let year1 = 1987
// year2 = "1987"
// let city;
// let qualification = null
// let obj = { name: 'gulshan' }
// let arr = ['a', 'b', 'c']

// console.log(typeof name)
// console.log(typeof surname)
// console.log(typeof year1)
// console.log(typeof year2)
// console.log(typeof city)
// console.log(typeof qualification)
// console.log(typeof obj.name); 
// console.log(Array.isArray(arr)); 

///Task 6 ///

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// arr1.sort((a, b) => a - b);
// arr1.sort((a, b) => b - a);
// const minNumber = Math.min(...arr1);
// const maxNumber = Math.max(...arr1);
// const sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// arr1.push(10, 88);
// arr1.pop();
// arr1.pop();
// console.log (arr1)
// arr1.unshift(0, 9, 11);
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()

// console.log( arr1);
// console.log( arr1);
// console.log( minNumber);
// console.log( maxNumber);
// console.log( sum);
// console.log(arr1);
// console.log( arr1);
// console.log( arr1);
// console.log( arr1);

///Task 7 ///
// 
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 1.Console values from "Rufet" to "Fuad"
// 2.Add Rovshen between Gulshen and Nermin
// 3.Revers "arr2"
// 4.Sort "arr2" ascending
// 5.Console each name with for loop
// 6.Console only names which is Anar
// 7.Console all names where name is Anar change it to "Perviz"
// 8.Console second to last value of arr2
// 9.Console length of arr2\

// for( i=0;i<arr2.length;i++){
// if(arr2[i]==="Rufet"){
//     arr2[i]="Fuad"
//     console.log(arr2[i])
//     }}
// console.log(arr2)


// arr2.splice(5,0,"Rovshen")
// console.log(arr2)


// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"].reverse()
// console.log(arr2)


// console.log(arr2.sort())

// for(i=0;i<arr2.length;i++){
//     if(arr2[i]==="Anar")
//     arr2[i]="Perviz"
//     console.log(arr2[i])
// }

// console.log(arr2.at(-2))

// console.log(arr2.length)


///Task 8 ///

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
1.
// const numbersOnly = arr3.filter(item => typeof item === 'number');
// console.log(numbersOnly);

2.
// const trueValues = arr3.filter(item => item === true);
// console.log(trueValues);

3.
// const falseValues = arr3.filter(item => item === false);
// console.log(falseValues);

4.
// const stringsOnly = arr3.filter(item => typeof item === 'string');
// console.log(stringsOnly);


///Task 8 ///
1.
// for (i = 0; i <= 100; i++) {
//     console.log(i);
//   }
  
2.
//  for (i = 2; i <= 20; i+=2) {
//         console.log(i);
//     }
    
   
3.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


/// Task 9 ///
1.

// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]


// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr4[i]);
// }
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// arr4.forEach(item => {
//   console.log(item);
// });


// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// const modifiedArr = arr4.map((value) => {
//   if (typeof value === 'number') {
//     return value + 10;
//   } else if (typeof value === 'string') {
//     return value + ' is string';
//   } else if (!value) {
//     return 'return ' + value + ' is falsy value';
//   } else {
//     return value; // for other cases, keep the value unchanged
//   }
// });

// console.log(modifiedArr); 

2.
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// const sum = arr4.reduce((accumulator, current) => {
//   if (typeof current === 'number') {
//     return accumulator + current;
//   } else if (!isNaN(current)) {
//     return accumulator + Number(current);
//   }
//   return accumulator;
// }, 0);

// console.log(sum); 

3.

// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// let trueCount = 0;

// for (const value of arr4) {
//   if (value === true) {
//     trueCount++;
//   }
// }

// console.log("Count of true values: " + trueCount);


4.
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// let stringCount = 0;

// for (const value of arr4) {
//   if (typeof value === 'string') {
//     stringCount++;
//   }
// }

// console.log("Count of string values: " + stringCount);
// 5.
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// const countFalseValues = arr4.reduce((count, value) => {
//   if (value === false) {
//     return count + 1;
//   }
//   return count;
// }, 0);

// console.log(countFalseValues);



///// Task 10 ////

1.
2.

// const objectname = {
//   name:          "Gulshan",
//   surname:        "Huseynzade",
//   age:            36,
//   changedName :   "John",
//   info:    { 
//   city:           "Baku"
//   }
// }

//  console.log (objectname.name)
//  console.log (objectname.surname)
//  console.log (objectname.age)
//  console.log ( objectname.info.city)
//  console.log(objectname.changedName);

// const obj = {
//   email: 'gulshanhuseynzade@gmail.com',
//   info: {
//       gender: 'Female',
//       loc: {
//           city: "Baku",
//           street: 'Y.Huseynov',
//           education: {
//               "uni name": "AZTU",
//           }
//       }
//   }
// }

// // 3.
// console.log (obj.info.gender)
// // 4.
// console.log (obj.info.loc.city)
// // 5.
// console.log (obj.info.loc.education)



