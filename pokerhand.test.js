const PokerHand = require('./pokerhand')

test('shouldBeAbleToClassifyAllSameSuit', () => {
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

test('shouldBeAbleToClassifyNotAllSameSuit', () => {
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

test('shouldBeAbleToClassifyAllConsecutiveValue', () => {
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

test('shouldBeAbleToClassifyNotAllConsecutiveValue', () => {
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

test('shouldBeAbleToGroupValue 1', () => {
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

test('shouldBeAbleToGroupValue 2', () => {
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

test('shouldBeAbleToClassifyStraightFlush', () => {
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

test('shouldBeAbleToClassifyFlush', () => {
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


test('shouldBeAbleToClassifyStraight', () => {
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

test('shouldBeAbleToClassifyFourOfAKind', () => {
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

test('shouldBeAbleToClassifyFullHouse', () => {
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

test('shouldBeAbleToClassifyThreeOfAKind', () => {
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

test('shouldBeAbleToClassifyTwoPairs', () => {
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

test('shouldBeAbleToClassifyPair', () => {
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

test('shouldBeAbleToClassifyHighCard', () => {
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
