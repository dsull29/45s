const trumpValues = [
    -35, -21, -18, -13, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
  ];
  const offSuitValues = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const offSuitValuesNonLead = [
    27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14,
  ];
  
  const heartTrumpOrder = [
    "5H",
    "JH",
    "AH",
    "KH",
    "QH",
    "0H",
    "9H",
    "8H",
    "7H",
    "6H",
    "4H",
    "3H",
    "2H",
  ];
  const diamondTrumpOrder = [
    "5D",
    "JD",
    "AH",
    "AD",
    "KD",
    "QD",
    "0D",
    "9D",
    "8D",
    "7D",
    "6D",
    "4D",
    "3D",
    "2D",
  ];
  const spadesTrumpOrder = [
    "5S",
    "JS",
    "AH",
    "AS",
    "KS",
    "QS",
    "2S",
    "3S",
    "4S",
    "6S",
    "7S",
    "8S",
    "9S",
    "0S",
  ];
  const clubsTrumpOrder = [
    "5C",
    "JC",
    "AH",
    "AC",
    "KC",
    "QC",
    "2C",
    "3C",
    "4C",
    "6C",
    "7C",
    "8C",
    "9C",
    "0C",
  ];
  
  const heartOffSuitOrder = [
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "0H",
    "JH",
    "QH",
    "KH",
  ];
  const diamondOffSuitOrder = [
    "AD",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "0D",
    "JD",
    "QD",
    "KD",
  ];
  const spadesOffSuitOrder = [
    "0S",
    "9S",
    "8S",
    "7S",
    "6S",
    "5S",
    "4S",
    "3S",
    "2S",
    "AS",
    "JS",
    "QS",
    "KS",
  ];
  const clubsOffSuitOrder = [
    "0C",
    "9C",
    "8C",
    "7C",
    "6C",
    "5C",
    "4C",
    "3C",
    "2C",
    "AC",
    "JC",
    "QC",
    "KC",
  ];

  export function evaluateHand(cards) {
    let heartHandVal, diamondHandVal, spadeHandVal, clubHandVal;
    heartHandVal = diamondHandVal = spadeHandVal = clubHandVal = 0;
  
    for (let i = 0; i < 5; i++) {
      var card = cards[i];
      heartHandVal += getHeartValue(card);
      diamondHandVal += getDiamondValue(card);
      spadeHandVal += getSpadeValue(card);
      clubHandVal += getClubValue(card);
    }
  
    return [heartHandVal, diamondHandVal, spadeHandVal, clubHandVal];
  }
  
  export function getCardValue(card, trump) {
    switch (trump) {
      case "Hearts":
        return getHeartValue(card);
      case "Diamonds":
        return getDiamondValue(card);
      case "Spades":
        return getSpadeValue(card);
      case "Clubs":
        return getClubValue(card);
      default:
        return 0;
    }
  }
  
  function getHeartValue(card) {
    return (
      trumpValues[heartTrumpOrder.indexOf(card)] ||
      offSuitValues[diamondOffSuitOrder.indexOf(card)] ||
      offSuitValues[clubsOffSuitOrder.indexOf(card)] ||
      offSuitValues[spadesOffSuitOrder.indexOf(card)]
    );
  }
  
  function getDiamondValue(card) {
    return (
      trumpValues[diamondTrumpOrder.indexOf(card)] ||
      offSuitValues[heartOffSuitOrder.indexOf(card)] ||
      offSuitValues[clubsOffSuitOrder.indexOf(card)] ||
      offSuitValues[spadesOffSuitOrder.indexOf(card)]
    );
  }
  
  function getSpadeValue(card) {
    return (
      trumpValues[spadesTrumpOrder.indexOf(card)] ||
      offSuitValues[diamondOffSuitOrder.indexOf(card)] ||
      offSuitValues[clubsOffSuitOrder.indexOf(card)] ||
      offSuitValues[heartOffSuitOrder.indexOf(card)]
    );
  }
  
  function getClubValue(card) {
    return (
      trumpValues[clubsTrumpOrder.indexOf(card)] ||
      offSuitValues[diamondOffSuitOrder.indexOf(card)] ||
      offSuitValues[heartOffSuitOrder.indexOf(card)] ||
      offSuitValues[spadesOffSuitOrder.indexOf(card)]
    );
  }