let num=['sai','aash','7'];
let num1=['ammu','goodu','niki'];
let num3=[];
console.log(num.length) //it finds length of specified array
console.log(num[0]) //gives word of an array
console.log(num3.length)
console.log(num1[1][2]) //gives 2index letter in 1 index word
console.log([1,2,3,4].length) //directly with  array wee are finding length
console.log(num[2]='paskula') //it replaces the 2nd index word
console.log(num) //prints an array
console.log(num1[10]='navya') //inserts a word at specified index
console.log(num1)
console.log(num1[5])
num.push('siri') //adds an element at last
console.log(num)// printing statement
num.pop() //removes element from last 
console.log(num) 
num.shift() //removes an element from first
console.log(num)
num.unshift('anna') // adds element at first
console.log(num) 
console.log(num.indexOf("aash"))
num4=num+num1; //merges in the form of string
console.log(num4)
typeof(num4)
num4=num.concat(num1) //meges in an array
console.log(num4)
typeof(num4)
console.log(num.includes("7")) //it finds whether  element is present or not
console.log(num.slice(1,3)) //reemooves  elements frm index 1 to 3
console.log(num.slice(-2))//reemooves  elements  to-2
num1.splice(4,5) //from index 4 ,5 elements are deleted
console.log(num1)
num1.splice(3,2)
num1.splice(3,0,"minnie",'jann')//from index 2 ,no elements are deleted,adds string their
console.log(num1)
let num5=[8,3,6,9,0]
console.log(num5.sort())//sorts in decreasing order
console.log(num.sort())//sort in alphabetical order
console.log(num.reverse())//reverse the array
let a=[2,3,9,2]
let b=a // asx we gave same addreess/reference if wwe change in one it also changes in anther array 
let c=[2,3,9,2] //it doesn't effects array a beacause they belong to dofferent adreesss

console.log(a==b)
console.log(a===b)
console.log(a==c)
console.log(a===c)
a.push(2)
console.log(b)
console.log(c)
 
let ar=[[1,2,4],[5,6,7],[1,32,5]]// to form a 
console.log(ar)
const d=[2,3,4]
 d=[4,5]
console.log(d)