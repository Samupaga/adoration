function showHowMuchILoveYou (amount) {
    if (typeof amount == 'number' && Number.isInteger(amount) && amount > 0){
    return `I love you th${'i'.repeat(amount)}s much`;
    } else {
        throw new Error("Not interested")
    }
    
}

module.exports = {showHowMuchILoveYou}

// manual tests:
// console.log(showHowMuchILoveYou(1))
// console.log(showHowMuchILoveYou(10))
