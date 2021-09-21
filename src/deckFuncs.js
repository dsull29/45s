export async function dealHands(deckUrl,round,setIsPending,setHands,setRoundOrder) {
  const order = getRoundOrder(round);
  await fetch(deckUrl + "/shuffle/");
  const drawresponse = await fetch(deckUrl + "/draw/?count=20");
  const drawData = await drawresponse.json();
  let hands = hash(drawData.cards);
  console.log("handCheck",hands,drawData)
  await fetch(deckUrl + "/pile/" + order[0] + "/add/?cards=" + hands[0].toString())
  await fetch(deckUrl + "/pile/" + order[1] + "/add/?cards=" + hands[1].toString())
  await fetch(deckUrl + "/pile/" + order[2] + "/add/?cards=" + hands[2].toString())
  const done = await fetch(deckUrl + "/pile/" + order[3] + "/add/?cards=" + hands[3].toString())
  if (done) {
    setRoundOrder(order)
    setHands(hands)
    setIsPending(false)
  }
}

function hash(cards) {
  const hand1 = [
    cards[0].code,
    cards[1].code,
    cards[2].code,
    cards[12].code,
    cards[13].code,
  ];
  const hand2 = [
    cards[3].code,
    cards[4].code,
    cards[5].code,
    cards[14].code,
    cards[15].code,
  ];
  const hand3 = [
    cards[6].code,
    cards[7].code,
    cards[8].code,
    cards[16].code,
    cards[17].code,
  ];
  const hand4 = [
    cards[9].code,
    cards[10].code,
    cards[11].code,
    cards[18].code,
    cards[19].code,
  ];
  return [hand1, hand2, hand3, hand4];
}

export function getRoundOrder(round) {
  let val = (round-1) % 4 
  let order;
  if (val===0) {
    order =  ["player2", "player3", "player4", "player1"];
  } else if (val===1) {
    order = ["player3", "player4", "player1", "player2"];
  } else if (val===2) {
    order = ["player4", "player1", "player2", "player3"];
  } else if (val===3) {
    order = ["player1", "player2", "player3", "player4"];
  };
  return order
}// module.exports = { dealHand, asyncCall};
