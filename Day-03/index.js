const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here


    return (
        parseFloat ( num.toString().split('').reverse().join('')
        )
    )
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
