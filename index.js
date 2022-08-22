// ----- Function, Datatype, Varibles, Condition, Looping 

//Prim
//string, boolean, number, undefined, null
//non-prim
//array,object,regexp

//variable ----- let, var, const

//Condition 
//1. If  2. if else 3. if elseif 4. if elseif else 5. switch 6. ternary condition

// function PersonalDetails(name,age,gender){
//     let dob= 2022-age;
//     dob = dob +' Aug'
//     var sex= gender?'Male':'Female';

//     console.log("My name is "+name);
//     console.log("My age is "+age);
//     console.log("My DOB is "+dob);
//     console.log("My Gender is "+sex);
// }

var  arrowPersonalDetails =   (name,age,gender)=>{
    let dob= 2022-age;

    var sex= gender?'Male':'Female';

    age= age>20? (age > 25 ?30: 25):18;


// if(name==='Jaga' || name==='Sasi' && age >20){
//     sex= 'Male';
//     dob = dob +' Aug';
// }else if(name==='Keerthi'){
//     sex= 'Female';
//     dob = dob +' Oct';

// }else {
//     sex= 'Other';
//     dob = dob;
// }


// switch(name){

//     case 'Jaga':
//         sex= 'Male';
//         dob = dob +' Aug';
//         break;
//     case 'Sasi':
//         sex= 'Male';
//         dob = dob +' Sep';
//         break;
//     case 'Keerthi':
//         sex= 'Female';
//         dob = dob +' Oct';
//         break;

// }


    console.log("My name is "+name);
    console.log("My age is "+age);
    console.log("My DOB is "+dob);
    console.log("My Gender is "+sex);
}



arrowPersonalDetails("Jaga",15,true);
arrowPersonalDetails('Keerthi',23,false);
arrowPersonalDetails('Sasi',28,true);
arrowPersonalDetails();