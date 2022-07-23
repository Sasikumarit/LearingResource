
// //-----------variable starts
// var sample1='Sample Program'; //-- type String --- 128GB
// let sample2='S'; //-- type Character
// const sample3=3; //-- type Number
// //-----------variable end


// //-----------function starts
// function displayname(opt,input1,input2){

//     ///-----------Conditions ------------------
//     //    if(opt==='a'){  add(input1,input2)}
//     //    else if(opt==='s')  sub(input1,input2)
//     //    else if(opt==='m')  mul(input1,input2)
//     //    else if(opt==='d')  div(input1,input2)
//     //    else console.log("Error: This function is not valid.")

//     //    switch(opt){
//     //     case 'a':
//     //     add(input1,input2);
//     //     break;
//     //     case 's':
//     //     sub(input1,input2);
//     //     break;
//     //     case 'm':
//     //     mul(input1,input2);
//     //     break;
//     //     case 'd':
//     //     div(input1,input2);
//     //     break;
//     //     default:
//     //     console.log("Error: This function is not valid.")
//     //     break;
//     //    }

//     // let output= opt==='a'?add(input1,input2):sub(input1,input2);
//     // console.log(output);
//     //--------- Condition end 
// }
// function add(inp1,inp2){
//     //return inp1+inp2
//     console.log("Addition Value is:",inp1+inp2);
// }
// function sub(inp1,inp2){
//     //return inp1-inp2
//     console.log("Subtraction Value is:",inp1-inp2);
// }
// function mul(inp1,inp2){
//     //return inp1*inp2
//     console.log("Multipication Value is:",inp1*inp2);
// }
// function div(inp1,inp2){
//    // return inp1/inp2
//    console.log("Division Value is:",inp1/inp2);
// }

// displayname('a',20,10);
// displayname('s',20,10);
// displayname('m',20,10);
// displayname('d',20,10);
// displayname('f',20,10);

// // -----------function end

// // -----------Object Starts
// var sampleobject= { name:'Sample Program',age:4,gender:'M' }
// sampleobject={...sampleobject,Address:'Cbe'}
// console.log(sampleobject)
// // -----------Object end


//---------Datatypes
var age=28;
var name='Sasikumar';
var gender=true
var pincode=null
var city=['Coimbatore','Mettupalayam'];
var Objectsample={name:'sasikumar',age:28,gender:true,pincode:641017,city:['Coimbatore','Mettupalayam']}

var dynamicarray=[{name:'sasikumar',age:28,gender:true,pincode:641017,city:['Coimbatore','Mettupalayam']},
{name:'Keerthi',age:28,gender:false,pincode:641017,city:['Coimbatore','Mettupalayam']},
{name:'Gokila',age:28,gender:false,pincode:641017,city:['Coimbatore','Mettupalayam']}]

dynamicarray.push({name:'System'})

dynamicarray.splice(0,3)
console.log("dynamicarray",dynamicarray)