let random = Math.floor(Math.random() * 100);
let count = 1;
let guess = prompt('Enter a number between 1 to 100');
while (guess != random) {
    console.log("the number is",random < guess   ? "less than" + guess : "grater than " + guess)
    guess = prompt('guess the number agian:')
    count = count + 1
}
console.log('number matched congratulations');
console.log('you took ' + count + " count");

//run this in your browser's console

