class PokerHand {
    constructor(hand) {
        this.hand = hand.sort((cardA, cardB) => cardA.value - cardB.value)
    }

    isAllSameSuit() {
        for(let i = 1; i < this.hand.length; i++) {
            if (this.hand[i].suit !== this.hand[i-1].suit) {
                return false
            }
        }
    
        return true
    }
    
    isAllConsecutiveValue() {
        for(let i = 1; i < this.hand.length; i++) {
            if (this.hand[i].value - this.hand[i-1].value !== 1) {
                return false
            }
        }
    
        return true
    }
}

module.exports = PokerHand
