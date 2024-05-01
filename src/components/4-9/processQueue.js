export function getFinalState (baseState, queue) {
  let finalState = baseState;
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i]
    if (typeof item !== 'function') {
      finalState = item
    } else if (typeof item === 'function') {
      finalState = item(finalState)
    }
  }

  return finalState;
}
