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

module.exports = {
    STRING_TO_NUMERIC,
    GROUPS_RANK
}
