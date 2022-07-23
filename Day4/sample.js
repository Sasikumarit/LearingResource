
//-----------variable starts
var sample1='Sample Program'; //-- type String
let sample2='S'; //-- type string
const sample3=3; //-- type Number

var sample4={ name:'Sample'} //-- type Object
var sample5=['Sample'] //-- type Array
//-----------variable end

//-----------function starts
function displayname(opt,input1,input2){

    ///-----------Conditions ------------------
    //    if(opt==='a'){  add(input1,input2)}
    //    else if(opt==='s')  sub(input1,input2)
    //    else if(opt==='m')  mul(input1,input2)
    //    else if(opt==='d')  div(input1,input2)
    //    else console.log("Error: This function is not valid.")

    //    switch(opt){
    //     case 'a':
    //     add(input1,input2);
    //     break;
    //     case 's':
    //     sub(input1,input2);
    //     break;
    //     case 'm':
    //     mul(input1,input2);
    //     break;
    //     case 'd':
    //     div(input1,input2);
    //     break;
    //     default:
    //     console.log("Error: This function is not valid.")
    //     break;
    //    }

    // let output= opt==='a'?add(input1,input2):sub(input1,input2);
    // console.log(output);
    //--------- Condition end 
}
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
// var sampleobject1= { name:'Sample Program',age:4,gender:'M' }
// var sampleobject2= {Address:'Cbe'}
// var sampleobject={...sampleobject1,...sampleobject2}
// console.log(sampleobject)
// // -----------Object end

//... -- Spreadopertor -- used to concat the string or data


function displayname(name,age,gender,city,state,pincode) {
    // if (gender == "Male") {
    //   console.log("Welcome My Boy..! Please verify your Details.");
    // }
    // else if (gender == "Female") {
    //     console.log("Welcome My Girl..! Please verify your Details.");
    //   }
    // else{
    //     console.log("Welcome My Gender..! Please verify your Details.");
    // }

    switch(gender){
        case 'Male':
        console.log("Welcome My Boy..! Please verify your Details.");
        break;
        case 'Female':
        console.log("Welcome My Girl..! Please verify your Details.");
        break;
        default :
        console.log("Welcome My Gender..! Please verify your Details.");
        break;
    }

  console.log("Name : " + name );
  console.log("Age : " + age );
  console.log("Gender : " + gender );
  console.log("City : " + city );
  console.log("State : " + state );
  console.log("Pincode : " + pincode );
  console.log("" );
}

var dynamicarray=[
{name:'sasikumar',age:28,gender:'Male',city:'Coimbatore',state:'Tamilnadu',pincode:641017},
{name:'Keerthi',age:28,gender:'Female',city:'Mettupalayam',state:'Tamilnadu',pincode:641301},
{name:'Gokila',age:28,gender:'Female',city:'Coimbatore',state:'Tamilnadu',pincode:641017},
{name:'Other',age:28,city:'Coimbatore',state:'Tamilnadu',pincode:641017}
]

// for(i=0;i<=dynamicarray.length-1;i++){
//   displayname(dynamicarray[i].name,dynamicarray[i].age,dynamicarray[i].gender,dynamicarray[i].city,dynamicarray[i].state,dynamicarray[i].pincode)
// }
