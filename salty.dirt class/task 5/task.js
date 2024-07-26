// let person = {
//     name = ehsan
//     ex2 = 20
// }

// let moreabout = {
//     ex3 = 30
//     ex4 = 2

// // // average function with class
const av = class {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    average(){
        return (this.x+this.y+this.z)/3;
    }

}
// // // num
const av1 = new av(17, 15, 10);

// // // average function call
console.log(av1.average());

// // // variance and average function
function Ave(x, y, z) {

    let ave = (x+y+z)/3
    console.log (ave)

    let varx = (x-ave)
    let vary = (y-ave)
    let varz = (z-ave)

    let x2 = varx * varx
    let y2 = vary * vary
    let z2 = varz * varz

    let sum = x2+y2+z2
    let variance = sum/2

    console.log (variance)
}
// // // function call
console.log (Ave(17, 15, 10))

// // // max and min 
let num1 = 17;
let num2 = 15;
let num3 = 10;
let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);

console.log("Maximum number:", max);
console.log("Minimum number:", min);


