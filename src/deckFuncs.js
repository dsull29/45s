export function dealHand(cards) {
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