let lname = 'john';
console.log('Hello world '+lname);
// String concatenation 

console.log('Hello '+ '1231234');

// variables 

let myvale : boolean = true ;

let myage : number = 35;
let myname : string = 'Keren';

let address : any = '223 Batemane ave ';

// Arrays and for loops 

let reviews : number[] = [4.56,3.2,2.5,1.2,1.8,0.4];
reviews.push(2.5);
let total : number = 0;
console.log('Here are the reviews ')
for(let j=0; j < reviews.length; j++){
    console.log("value ="+reviews[j]);
    total += reviews[j];
}

let average = total/reviews.length;

console.log("Average of review "+average);

if(average > 4.5){
    console.log('Movie is blockbuster');
}else if (average< 4.5 && average > 2.5){
    console.log('Movie is hit');
}else{
    console.log('Movie is average');
}

let mysports : string[] = ['swimming', 'basketball', 'football'];



for(let myfav of mysports){
    console.log(myfav);
}

console.log(mysports.pop());

console.log(mysports);