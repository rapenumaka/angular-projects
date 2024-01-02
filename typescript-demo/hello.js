var lname = 'john';
console.log('Hello world ' + lname);
// String concatenation 
console.log('Hello ' + '1231234');
// variables 
var myvale = true;
var myage = 35;
var myname = 'Keren';
var address = '223 Batemane ave ';
// Arrays and for loops 
var reviews = [4.56, 3.2, 2.5, 1.2, 1.8, 0.4];
reviews.push(2.5);
var total = 0;
console.log('Here are the reviews ');
for (var j = 0; j < reviews.length; j++) {
    console.log("value =" + reviews[j]);
    total += reviews[j];
}
var average = total / reviews.length;
console.log("Average of review " + average);
if (average > 4.5) {
    console.log('Movie is blockbuster');
}
else if (average < 4.5 && average > 2.5) {
    console.log('Movie is hit');
}
else {
    console.log('Movie is average');
}
var mysports = ['swimming', 'basketball', 'football'];
for (var _i = 0, mysports_1 = mysports; _i < mysports_1.length; _i++) {
    var myfav = mysports_1[_i];
    console.log(myfav);
}
console.log(mysports.pop());
console.log(mysports);
