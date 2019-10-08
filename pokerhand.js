const STRING_TO_NUMERIC = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
}

const GROUPS_RANK = {
    fourOfAKind: [1, 4],
    fullHouse: [2, 3],
    threeOfAKind: [1, 1, 3],
    twoPairs: [1, 2, 2],
    pair: [1, 1, 1, 2]
}
 
class PokerHand {
    constructor(hand) {
        this.hand = this.parseStringOfCardsToArrayOfCardsObject(hand)
    }

    parseStringOfCardsToArrayOfCardsObject(stringOfCards) {
        return stringOfCards.split(' ').map(cardString => this.parseStringOfCardToCardObject(cardString))
    }

    parseStringOfCardToCardObject(stringOfCard) {
        return {
            value: this.getCardNumericValueFromString(stringOfCard.slice(0, -1)),
            suit: stringOfCard.slice(-1)
        }
    }

    getCardNumericValueFromString(stringOfValue) {
        return parseInt(stringOfValue) || STRING_TO_NUMERIC[stringOfValue]
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

                if(this.isEqualGroup(groups, GROUPS_RANK.fourOfAKind)) {
                    return 7
                } else if(this.isEqualGroup(groups, GROUPS_RANK.fullHouse)) {
                    return 6
                } else if(this.isEqualGroup(groups, GROUPS_RANK.threeOfAKind)) {
                    return 3
                } else if(this.isEqualGroup(groups, GROUPS_RANK.twoPairs)) {
                    return 2
                } else if(this.isEqualGroup(groups, GROUPS_RANK.pair)) {
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
