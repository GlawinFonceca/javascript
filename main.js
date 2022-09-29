// //while loop
// let i=0;
// while(i<=10){
//     console.log(i);
//     if(i===3)
//     break;
//     i++;

// }

// //  do while
// let j=0;
// do{
//     console.log(j);
//     j++
// }
// while(j<10);

// //for loop

// for(let i=0;i<5;i++){
//     for(let j=1;j<i+1;j++)
//     {
//         console.log(j );
//     }
//  console.log(`\n`)
// }

// for(let i=0;i<4;i++){
//     for(let j=i+1;j>0;j--)
//     {
//         console.log(j );
//     }
//  console.log(`\n`)
// }


// for(let i=0;i<4;i++){
//     for(let j=1;j<i+1;j++)
//     {
//         if(j==3) {
//             console.log(j*j)
//             break;
//         }
//         console.log(j);
        
//     }
//  console.log(`\n`)
// }

// let x=2;
// switch(x){
//     case 1:
//        console.log("its monday");
//         break;
//     case 2:
//        console.log("its tuesday");
//         break;
//     case 3:
//        console.log("its wednesday");
//         break;
//     case 4:
//        console.log("its thursday");
//         break;
//     case 5:
//        console.log("its friday");
//         break;
//     case 6:
//        console.log("its saturday");
//         break;
//     case 7:
//        console.log("its sunday");
//         break;
//     default:
//        console.log("invalid input");
//         break;
// }
// //function
// let say=function(){
//     alert("hello world");
// }
// say();

// let ask=function(question,yes,no){
//   if(confirm(question)) yes()
//   else
//   no()
// }
//   function showok(){
//     alert("you agreed");

//   }
//   function showno(){
//     alert("you disagreed")
//   }
// ask("do you agree" ,showok, showno)

// //arrow function

// let sum=(a,b)=>{

// return a+b;
// }
// console.log(sum(10,5));
// let a=3.4;
// console.log(Math.round(a));


// console.log(parseInt('pr433'));

// //arrays

// let fruits = ["Apple", "Orange", "Plum"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
// for(let fruit in fruits){
//     console.log(fruits[fruit])
// }


//objects
// function object1(name,age){
//     let obj=new Object();
//     obj.name=name;
//     obj.age=age;
    

// console.log(obj.name);
// console.log(obj.age);
// }
// object1('john',32);


// function person(name,age,place){
//     this.Name=name;
//     this.Age=age;
//     this.city=place;

//     console.log(Name);
//     console.log(Age);
//     console.log(city);

// }person('john',23,'mangaluru');

// //date

// let date=new Date();
// console.log(date.getDate());

// let date1=new Date(2012,12,23);
// alert(date1)

// const student=[
// {       
//     id:1,
//     name:"john",
//     age:"23",
//     course:"html,css,java",
//     city:"mangaluru"
// },
//     {
//     id:2,
//     name:"ravi",
//     age:"25",
//     course:"php,html,css,java",
//     city:"mangaluru"

// }
// ];

// console.log(JSON.stringify(student));


// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
//   }
//  console.log(pow(3,2));
//  console.log(pow.name);
//  console.log(pow.length)

// function hello(){
//     alert("say hello");
//     hello.counter++;
// }
// hello.counter=0;
// hello();hello();
// alert(`called  ${hello.counter} times`);


// let fun=new function(a=10,b=5,c=87,d=65)
// {
//     console.log( a+b*(c-d));   
// }


// function call(from,to){
// let current=from;

// setTimeout(function go(){
//     alert(current)
//     if(current<to){
//         setTimeout(go,1000)
//         current++;
//     }
// },1000)

// }
// call(2,5)


// let user=
// {
//     name:"john",
//     age:23
// }
// const des=Object.getOwnPropertyDescriptor(user,'age');
// alert(JSON.stringify(des));



let user1={
    name:"john",
    surname:"smith",

get Fullname(){
    return (`first name is : ${this.name} and surname is : ${this.surname}`);
},
set Fullname(value){
    [this.name,this.surname]=value.split(" ")

}

}
user1.Fullname="alice cooper"
alert(user1.name);
alert(user1.surname);
