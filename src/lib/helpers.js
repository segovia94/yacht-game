import { score } from './score-engine'

export const categories = {
  ones: 'Ones',
  twos: 'Twos',
  threes: 'Threes',
  fours: 'Fours',
  fives: 'Fives',
  sixes: 'Sixes',
  'full house': 'Full House',
  'four of a kind': 'Four-of-a-Kind',
  'little straight': 'Little Straight',
  'big straight': 'Big Straight',
  choice: 'Choice',
  yacht: 'Yacht'
}

export const categoriesArr = Object.keys(categories)

/**
 * Add up all the scores for a player.
 *
 * @param {array} scores - list of scores to add together.
 *
 * @return {number} The total score for a player.
 */
export const sumTotal = scores => {
  return scores.reduce((prev, current) => prev + current, 0)
}

/**
 * Get the totals for each player.
 *
 * @param {object} players - List of players and their scores with each key as the name of the player
 *   and the value as an objects of scores.
 *
 * @return {object} Each player as an object with name and total.
 */
export const playerTotals = players => {
  return Object.keys(players).map(person => {
    const values = Object.values(players[person])
    return {
      name: person,
      total: sumTotal(values)
    }
  })
}

/**
 * Get the next player from the list of players.
 *
 * @param {object} players - the list of players with each key as the name of the player.
 * @param {string} currentPlayer - the current player.
 *
 * @return {string} The name of the next player.
 */
export const nextPlayer = (players, currentPlayer) => {
  const playerNames = Object.keys(players)
  const next = playerNames.indexOf(currentPlayer) + 1
  let nextPlayer = playerNames[0]

  if (playerNames[next]) {
    nextPlayer = playerNames[next]
  }

  return nextPlayer
}

/**
 * Determine all possible scores for remaining categories.
 *
 * If there are no possible scores available then every category which a player does
 * Not currently have a score for should show a possible score of Zero.
 *
 * @param {object} player - A player's list of current scores.
 * @param {array} diceRoll - The number showing on each of the 5 dice rolled Ex: [2, 1, 3, 6, 4].
 *
 * @return {object} A key of each category not currently scored with a value of the possible score.
 *   Ex. { threes: 6, 'little straight': 30 }
 *   If no possible scores then all values are zero Ex. { threes: 0, 'little straight': 0 }
 */
export const possibleScores = (player, diceRoll) => {
  const scores = {}

  categoriesArr.forEach(cat => {
    if (player[cat] === undefined) {
      // Freeze the diceRoll so it doesn't get mutated by a sort.
      const possibleScore = score([...diceRoll], cat)
      if (possibleScore !== 0) {
        scores[cat] = possibleScore
      }
    }
  })

  // If there are no possible scores, then set each remaining category to a
  // possible score of zero.
  if (Object.keys(scores).length === 0) {
    categoriesArr.forEach(cat => {
      if (player[cat] === null || player[cat] === undefined) {
        scores[cat] = 0
      }
    })
  }

  return scores
}

/**
 * Roll the dice to get 5 numbers. But only roll dice which have not been locked.
 *
 * @param {array} lockedDice - The indexes of locked dice which cannot be changed.
 * @param {array} oldRoll - The old roll of dice Ex: [2, 1, 3, 6, 4].
 *
 * @return {array} The new 5 dice numbers that have been rolled.
 */
export const rollDice = (lockedDice, oldRoll) => {
  const roll = []
  for (let i = 0; i < 5; i++) {
    // Use the old dice roll number if it has been locked.
    if (lockedDice.includes(i)) {
      roll.push(oldRoll[i])
    } else {
      const randomNum = Math.floor(Math.random() * 6) + 1
      roll.push(randomNum)
    }
  }

  return roll
}
