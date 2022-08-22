
//Sample 1:
let jaga1=5;
do {
    console.log("--do",jaga1)
    jaga1++;  
} while (jaga1>=10);

//Sample 2:
let jaga2=5;
while(jaga2>=10){
    console.log("while",jaga2)
    jaga2++; 
}

//Sample 3:
for(let jaga=5;jaga<=10;jaga++){
    console.log("For",jaga)
}

//Sample 4:
const names = ['Sasi','Jaga','Keerthi','Gokila']
for(let count=0;count<names.length;count++){
    console.log("Your Name is ",names[count])
}