const students = [
{
    id: 1,
    username: "Anar",
    gender:   "Male",
    age:   20

},
   { id: 2,
     username: "Gulshan",
     gender:   "Female",
     age:   36


},

  {    id: 3,
    username: "Fuad",
    gender:   "Male",
    age:   18

},
{
    id: 4,
    username: "Narmin",
    gender:   "Female",
    age:   20
},


    
]
    // const female= students.filter(student => student.gender === 'Female');
    // console.log(female);


    // const greater = students.filter(student => parseInt(student.age) > 22);
    // console.log(greater);


    //  let sum = 0;

  
    // for (let i = 0; i < students.length; i++) {
    //   sum += students[i].age;
    // }
 
    // console.log (sum);  

      
      const arry = [8,2,4,true,undefined,"string", 9, false, 9, 9, 8]
      let sum=0
      for (let i = 0; i < arry.length; i++) {

      if(typeof arry[i]=="number"){
        sum+=arry[i]
       }} console.log(sum)