class PokerHand {
    constructor(hand) {
        this.hand = hand.sort((cardA, cardB) => cardA.value - cardB.value)
    }


    getCardNumericValueFromString(stringOfValue) {
        const stringToNumericMap = {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        }

        return parseInt(stringOfValue) || stringToNumericMap[stringOfValue]
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
    
    getGroupsOfValue() {
        let groups = [1]
    
        for(let i = 1; i < this.hand.length; i++) {
            if (this.hand[i].value - this.hand[i-1].value === 0) {
                groups[groups.length - 1]++
            } else {
                groups.push(1)
            }
        }
    
        return groups
    }

    getRank() {
        if(this.isAllSameSuit()) {
            if(this.isAllConsecutiveValue()) {
                return 8
            } else {
                return 5
            }       
        } else {
            if(this.isAllConsecutiveValue()) {
                return 4
            } else {
                const groups = this.getGroupsOfValue().sort()

                if(this.isEqualGroup(groups, [1, 4])) {
                    return 7
                } else if(this.isEqualGroup(groups, [2, 3])) {
                    return 6
                } else if(this.isEqualGroup(groups, [1, 1, 3])) {
                    return 3
                } else if(this.isEqualGroup(groups, [1, 2, 2])) {
                    return 2
                } else if(this.isEqualGroup(groups, [1, 1, 1, 2])) {
                    return 1
                } else {
                    return 0
                }
            }  
        }
    }

    isEqualGroup(a, b) {
        return JSON.stringify(a) === JSON.stringify(b)
    }
}

module.exports = PokerHand
