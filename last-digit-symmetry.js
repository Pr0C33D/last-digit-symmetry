// https://www.codewars.com/kata/59a9466f589d2af4c50001d8

function isPrime(number) {
    let start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function solve(a, b) {
    let count = 0;
    for (a; a < b; a++) {
        let sq = (a * a).toString();
        let str = a.toString();
        if (str.slice(-2) == sq.slice(-2) && isPrime(sq.slice(0, 2)) && isPrime(str.slice(0, 2))) {
            console.log(str + " - " + sq + " - " + isPrime(sq.slice(0, 2)));
            count++;
        }
    }
    return count;
}

solve(2, 100000);