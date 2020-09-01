import { score } from '@/lib/score-engine'

export const categories = [
  'ones',
  'twos',
  'threes',
  'fours',
  'fives',
  'sixes',
  'full house',
  'four of a kind',
  'little straight',
  'big straight',
  'choice',
  'yacht'
]

export const categoriesLabeled = {
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

/**
 * Add up all the scores for a player.
 * 
 * @param {array} scores - list of scores to add together.
 * 
 * @return {array} The total score for a player.
 */
export const calculateTotal = (scores) => {
  return scores.reduce((prev, current) => prev + current, 0)
}

/**
 * Get the totals for each player.
 * 
 * @param {object} players - List of players and their scores.
 * 
 * @return {array} Each player as an object with name and total.
 */
export const playerTotals = (players) => {
  return Object.keys(players).map(person => {
    const values = Object.values(players[person])
    return {
      name: person,
      total: calculateTotal(values)
    }
  })
}

/**
 * Get the next player from the list of players.
 * 
 * @param {object} players - the list of players with key as the name of the player.
 * @param {string} currentPlayer - the current player.
 * 
 * @return {string} The name of the next player.
 */
export const nextPlayer = (playersObj, currentPlayer) => {
  const players = Object.keys(playersObj)
  let next = players.indexOf(currentPlayer) + 1
  let nextPlayer = players[0]

  if (players[next]) {
    nextPlayer = players[next]
  }

  return nextPlayer
}

/**
 * Determine all possible scores for remaining categories.
 * 
 * @param {object} player - A player's list of current scores.
 * @param {array} diceRoll - The number showing on each of the 5 dice rolled.
 */
export const possibleScores = (player, diceRoll) => {
  const scores = {}
  
  categories.forEach(cat => {
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
    categories.forEach(cat => {
      if (player[cat] === null) {
        scores[cat] = 0
      }
    })
  }

  return scores
}
