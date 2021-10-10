export function getDealer(dealers) {
  let order = dealers;
  let dealer = order.shift();
  // TODO fix the order here
  order.push(dealer);
  return { dealer, order };
}

export function getPlayerHand(url, player) {
  var tempData;

  const playerHand = fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {});
  playerHand.then((data) => {
    return data;
  });

  return tempData;
}

/** Moves the player's selected card to the discard pile and plays the card on the table
 * @param  {String} deckUrl URL to the deck being used
 * @param  {String} playerCard Card code of the card being played
 * @param  {Function} sendPlayerCard Calls back to play with the PlayerCard
 */
export async function playCardNow(deckUrl, playerCard, sendPlayerCard) {
  await fetch(
    deckUrl + "/pile/discard/add/?cards=" + playerCard.code
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      return playerCard;
    });
  sendPlayerCard(playerCard);
}

/** finds the players position
 * @param  {String} player handle of the player 
 * @param  {Array} order order of players
 */
 export function checkPlayerPosition(player, order) {
  let num = order.indexOf(player) + 1;
  return num;
}