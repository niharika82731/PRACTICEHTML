const pig={
   name:"samsriya",
   place:"burdha",
   age:70

};
console.log(pig)
console.log("name:",pig.name)
console.log("age:",pig["age"])
pig.departmet="sleeping area ";
console.log(pig)
const students={
   student1:{
      name:"sai",
      age:30
   },
   student2:{
      name:"saii",
      age:40
   }
}
console.log(students) //   prints the both objects 
const person =[
    { name:'snmzk', age: 9},
   { name:'sadf', age: 23} //declaring many objects at a time
];
console.log(person)
console.log(person[1]["age"]) //prints age in obj 1
console.log(person[0]) //prints onlu 0th object 
console.log(Math.floor(23.545))//it prints without the decimal
console.log(Math.max(23.545))
console.log(Math.min(23.545))
console.log(Math.ceil(23.545)) //it gives greates nearest value
console.log(Math.pow(2))
console.log(Math.random()*10) //it gives random value upto 10 excluding 10
console.log(Math.cbrt(23.545))
console.log(Math.floor(Math.random()*10))//to avoid decimal numbers we use floor]