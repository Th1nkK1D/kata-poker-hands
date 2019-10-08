const PokerHand = require('./pokerhand')

test.skip('shouldBeAbleToClassifyAllSameSuit', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 5, suit: 'C' },
        { value: 7, suit: 'C' },
        { value: 1, suit: 'C' },
        { value: 4, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllSameSuit()).toBe(true)
})

test.skip('shouldBeAbleToClassifyNotAllSameSuit', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 5, suit: 'D' },
        { value: 7, suit: 'C' },
        { value: 1, suit: 'C' },
        { value: 1, suit: 'A' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllSameSuit()).toBe(false)
})

test.skip('shouldBeAbleToClassifyAllConsecutiveValue', () => {
    const hand = [
        { value: 5, suit: 'C' },
        { value: 6, suit: 'D' },
        { value: 7, suit: 'C' },
        { value: 8, suit: 'C' },
        { value: 9, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllConsecutiveValue()).toBe(true)
})

test.skip('shouldBeAbleToClassifyNotAllConsecutiveValue', () => {
    const hand = [
        { value: 5, suit: 'C' },
        { value: 6, suit: 'D' },
        { value: 7, suit: 'C' },
        { value: 9, suit: 'C' },
        { value: 9, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllConsecutiveValue()).toBe(false)
})

test.skip('shouldBeAbleToGroupValue 1', () => {
    const hand = [
        { value: 5, suit: 'C' },
        { value: 5, suit: 'D' },
        { value: 5, suit: 'C' },
        { value: 9, suit: 'C' },
        { value: 9, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getGroupsOfValue()).toEqual([3, 2])
})

test.skip('shouldBeAbleToGroupValue 2', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'D' },
        { value: 2, suit: 'C' },
        { value: 3, suit: 'C' },
        { value: 4, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getGroupsOfValue()).toEqual([1, 2, 1, 1])
})

test.skip('shouldBeAbleToClassifyStraightFlush', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'C' },
        { value: 3, suit: 'C' },
        { value: 4, suit: 'C' },
        { value: 5, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(8)
})

test.skip('shouldBeAbleToClassifyFlush', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'C' },
        { value: 7, suit: 'C' },
        { value: 9, suit: 'C' },
        { value: 10, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(5)
})


test.skip('shouldBeAbleToClassifyStraight', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'H' },
        { value: 3, suit: 'C' },
        { value: 4, suit: 'D' },
        { value: 5, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(4)
})

test.skip('shouldBeAbleToClassifyFourOfAKind', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'H' },
        { value: 2, suit: 'C' },
        { value: 2, suit: 'D' },
        { value: 2, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(7)
})

test.skip('shouldBeAbleToClassifyFullHouse', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 1, suit: 'H' },
        { value: 2, suit: 'C' },
        { value: 2, suit: 'D' },
        { value: 2, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(6)
})

test.skip('shouldBeAbleToClassifyThreeOfAKind', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 4, suit: 'H' },
        { value: 2, suit: 'C' },
        { value: 2, suit: 'D' },
        { value: 2, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(3)
})

test.skip('shouldBeAbleToClassifyTwoPairs', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 1, suit: 'H' },
        { value: 2, suit: 'C' },
        { value: 3, suit: 'D' },
        { value: 3, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(2)
})

test.skip('shouldBeAbleToClassifyPair', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'H' },
        { value: 2, suit: 'C' },
        { value: 3, suit: 'D' },
        { value: 4, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(1)
})

test.skip('shouldBeAbleToClassifyHighCard', () => {
    const hand = [
        { value: 1, suit: 'C' },
        { value: 2, suit: 'H' },
        { value: 9, suit: 'C' },
        { value: 3, suit: 'D' },
        { value: 4, suit: 'C' }
    ]

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(0)
})

test('shouldBeAbleToGetCardNumericValueFromStringOfValue', () => {
    const stringOfValueOne = '1'
    const stringOfValueTen = '10'
    const stringOfValueJack = 'J'
    const stringOfValueAce = 'A'

    const pokerhand = new PokerHand([])

    expect(pokerhand.getCardNumericValueFromString(stringOfValueOne)).toBe(1)
    expect(pokerhand.getCardNumericValueFromString(stringOfValueTen)).toBe(10)
    expect(pokerhand.getCardNumericValueFromString(stringOfValueJack)).toBe(11)
    expect(pokerhand.getCardNumericValueFromString(stringOfValueAce)).toBe(14)
})
