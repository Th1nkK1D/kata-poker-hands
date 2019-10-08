const PokerHand = require('../src/pokerhand')

test('Should be able to classify all same suit', () => {
    const hand = "1C 1C 4C 5C 7C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllSameSuit()).toBe(true)
})

test('Should be able to classify not all same suit', () => {
    const hand = "1C 1C 1A 5D 7C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllSameSuit()).toBe(false)
})

test('Should be able to classify all consecutive value', () => {
    const hand = "5C 6D 7C 8C 9C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllConsecutiveValue()).toBe(true)
})

test('Should be able to classify not all consecutive value', () => {
    const hand = "5C 6D 7C 9C 9C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.isAllConsecutiveValue()).toBe(false)
})

test('Should be able to group value', () => {
    const handA = "5C 5C 5D 9C 9C"
    const handB = "1C 2D 2C 3C 4C"

    const pokerhandA = new PokerHand(handA)
    const pokerhandB = new PokerHand(handB)

    expect(pokerhandA.getGroupsOfValue()).toEqual([3, 2])
    expect(pokerhandB.getGroupsOfValue()).toEqual([1, 2, 1, 1])

})

test('Should be able to classify straight flush', () => {
    const hand = "1C 2C 3C 4C 5C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(8)
})

test('Should be able to classify flush', () => {
    const hand = "1C 2C 7C 9C 10C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(5)
})


test('Should be able to classify straight', () => {
    const hand = "1C 2H 3C 4D 5C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(4)
})

test('Should be able to classify four of a kind', () => {
    const hand = "1C 2H 2C 2C 2D"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(7)
})

test('Should be able to classify full house', () => {
    const hand = "1C 1H 2C 2C 2D"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(6)
})

test('Should be able to classify three of a kind', () => {
    const hand = "1C 2C 2C 2D 4H"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(3)
})

test('Should be able to classify two pairs', () => {
    const hand = "1C 1H 2C 3D 3C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(2)
})

test('Should be able to classify pair', () => {
    const hand = "1C 2H 2C 3D 4C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(1)
})

test('Should be able to classify high card', () => {
    const hand = "1C 2H 3D 4C 9C"

    const pokerhand = new PokerHand(hand)

    expect(pokerhand.getRank()).toEqual(0)
})

test('Should be able to parse string of cards to array of cards object', () => {
    const stringOfCardsA = "2C 8H 10C QS AS"
    const stringOfCardsB = "1H 6D JC KS AD"

    const pokerhand = new PokerHand("")

    expect(pokerhand.parseStringOfCardsToArrayOfCardsObject(stringOfCardsA)).toEqual([
        { value: 2, suit: 'C' },
        { value: 8, suit: 'H' },
        { value: 10, suit: 'C' },
        { value: 12, suit: 'S' },
        { value: 14, suit: 'S' }
    ])

    expect(pokerhand.parseStringOfCardsToArrayOfCardsObject(stringOfCardsB)).toEqual([
        { value: 1, suit: 'H' },
        { value: 6, suit: 'D' },
        { value: 11, suit: 'C' },
        { value: 13, suit: 'S' },
        { value: 14, suit: 'D' }
    ])
})

test('Should be able to parse string of card to card object', () => {
    const stringOfCardA = "1H"
    const stringOfCardB = "JC"

    const pokerhand = new PokerHand("")

    expect(pokerhand.parseStringOfCardToCardObject(stringOfCardA)).toEqual({
        value: 1,
        suit: 'H'
    })

    expect(pokerhand.parseStringOfCardToCardObject(stringOfCardB)).toEqual({
        value: 11,
        suit: 'C'
    })
})

test('Should be able to get card numeric value from string of value', () => {
    const stringOfValueOne = '1'
    const stringOfValueTen = '10'
    const stringOfValueJack = 'J'
    const stringOfValueAce = 'A'

    const pokerhand = new PokerHand("")

    expect(pokerhand.getCardNumericValueFromString(stringOfValueOne)).toBe(1)
    expect(pokerhand.getCardNumericValueFromString(stringOfValueTen)).toBe(10)
    expect(pokerhand.getCardNumericValueFromString(stringOfValueJack)).toBe(11)
    expect(pokerhand.getCardNumericValueFromString(stringOfValueAce)).toBe(14)
})
