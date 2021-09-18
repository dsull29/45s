//var dealers = ["player1", "player2", "player3", "player4"]
const trumpValues = [-35, -21, -18, -13, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
const offSuitValues = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const offSuitValuesNonLead = [27,26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14];

const heartTrumpOrder = ["5H", "JH", "AH", "KH", "QH", "0H", "9H", "8H", "7H", "6H", "4H", "3H", "2H"];
const diamondTrumpOrder = ["5D", "JD", "AH", "AD", "KD", "QD", "0D", "9D", "8D", "7D", "6D", "4D", "3D", "2D"];
const spadesTrumpOrder = ["5S", "JS", "AH", "AS", "KS", "QS", "2S", "3S", "4S", "6S", "7S", "8S", "9S", "0S"];
const clubsTrumpOrder = ["5C", "JC", "AH", "AC", "KC", "QC", "2C", "3C", "4C", "6C", "7C", "8C", "9C", "0C"];
  
const heartOffSuitOrder = ["2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H", "JH", "QH", "KH"];
const diamondOffSuitOrder = ["AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D", "JD", "QD", "KD"];
const spadesOffSuitOrder = ["0S", "9S", "8S", "7S", "6S", "5S", "4S", "3S", "2S", "AS", "JS", "QS", "KS"];
const clubsOffSuitOrder = ["0C", "9C", "8C", "7C", "6C", "5C", "4C", "3C", "2C", "AC", "JC", "QC", "KC"];



export function getDealer(dealers) {
    let order = dealers
    let dealer = order.shift()
    // TODO fix the order here
    order.push(dealer)
    return { dealer, order }
}

export function bidding(cards, bidders) {
    let bestBid, highBidder
    var highBid = 0
    for (let i = 0; i < 3; i++) {
        bestBid = getBid(evaluteHand(cards[i]))
        if (bestBid > highBid) {
            highBid = bestBid
            highBidder = bidders[i]
        }
    }
    return { highBid, highBidder }
}

function getBid(handValues) {
    var bestHandVal = handValues.sort(function (a, b) { return a - b; })[0];
    var playerBid = null
    if (bestHandVal < (0 - 25)) {
        playerBid = "20"
    } else if (bestHandVal < (0 - 5)) {
        playerBid = "15"
    };
    return playerBid
};

export function dealHand(cards) {

    const hand1 = [cards[0].code, cards[1].code, cards[2].code, cards[12].code, cards[13].code];
    const hand2 = [cards[3].code, cards[4].code, cards[5].code, cards[14].code, cards[15].code];
    const hand3 = [cards[6].code, cards[7].code, cards[8].code, cards[16].code, cards[17].code];
    const hand4 = [cards[9].code, cards[10].code, cards[11].code, cards[18].code, cards[19].code];

    return [hand1, hand2, hand3, hand4]
};

export function evaluteHand(cards) {


    var hval = 0;
    var dval = 0;
    var cval = 0;
    var sval = 0;
    var heartHandVal = 0;
    var diamondHandVal = 0;
    var spadeHandVal = 0;
    var clubHandVal = 0;

    for (let i = 0; i < 5; i++) {
        var card = cards[i]
        heartHandVal += getHeartValue(card);
        diamondHandVal += getDiamondValue(card);
        spadeHandVal += getSpadeValue(card);
        clubHandVal += getClubValue(card);
    }

    return [heartHandVal, diamondHandVal, spadeHandVal, clubHandVal]
};

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
    return (trumpValues[heartTrumpOrder.indexOf(card)] ||
        offSuitValues[diamondOffSuitOrder.indexOf(card)] ||
        offSuitValues[clubsOffSuitOrder.indexOf(card)] ||
        offSuitValues[spadesOffSuitOrder.indexOf(card)]);
};

function getDiamondValue(card) {
    return (trumpValues[diamondTrumpOrder.indexOf(card)] ||
        offSuitValues[heartOffSuitOrder.indexOf(card)] ||
        offSuitValues[clubsOffSuitOrder.indexOf(card)] ||
        offSuitValues[spadesOffSuitOrder.indexOf(card)]);
};

function getSpadeValue(card) {
    return (trumpValues[spadesTrumpOrder.indexOf(card)] ||
        offSuitValues[diamondOffSuitOrder.indexOf(card)] ||
        offSuitValues[clubsOffSuitOrder.indexOf(card)] ||
        offSuitValues[heartOffSuitOrder.indexOf(card)]);
};

function getClubValue(card) {
    return (trumpValues[clubsTrumpOrder.indexOf(card)] ||
        offSuitValues[diamondOffSuitOrder.indexOf(card)] ||
        offSuitValues[heartOffSuitOrder.indexOf(card)] ||
        offSuitValues[spadesOffSuitOrder.indexOf(card)]);
};

export function getWorstCard(cards, trump) {
    var worstCard = null;
    var worstCardVal = (0-50);

    for (let i = 0; i < cards.length; i++) {
        var curCardVal = getCardValue(cards[i].code, trump)
        if (curCardVal > worstCardVal) {
            worstCardVal = curCardVal;
            worstCard = i;
        }
    };
    return cards[worstCard]
}

export function getBestCard(cards, trump) {
    var bestCard = null;
    var bestCardVal = 50;

    for (let i = 0; i < cards.length; i++) {
        var curCardVal = getCardValue(cards[i].code, trump)
        if (curCardVal < bestCardVal) {
            bestCardVal = curCardVal;
            bestCard = i;
        }
    };

    return cards[bestCard]
}

export function getPlayerHand(url, player) {

    var tempData
    console.log("psr",url)
    const playerHand = fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data for that resource');
            }
            return res.json();
        })
        .then(data => {
            console.log("cinco",data)
        })
    console.log("deets",tempData)
    console.log("lenny", playerHand)
    playerHand.then(data => {
        console.log("carti:", data)
        return data
        // let cards = data.piles[player].cards
        // let codes = []
        // let tempData = null
        // for (let i = 0; i < cards.length; i++) {
        //     codes.push(cards[i].code)
        // }
        // tempData = {
        //     player: player,
        //     cards,
        //     codes
        // }
        // return tempData
    });


    console.log("jesus", tempData)
    return tempData
}

// TODO compress the FETCHs down to a string of THENs
export async function getNewCards(deckUrl,discardCodes,player, sendDiscardData) {
        const discardData = await discard(deckUrl,discardCodes);
        
        const redrawCount = 5 - discardData.piles[player].remaining;
        const redrawData = await redraw(deckUrl, redrawCount);

        let cards = [];
            if (redrawData.cards) {
           for (let i = 0; i < redrawData.cards.length; i++)
             cards.push(redrawData.cards[i].code);
         }

         const assignData = await assign(deckUrl,player, cards)

         sendDiscardData(true)

};

async function discard(deckUrl,discardCodes) {
    const response = await fetch(deckUrl + "/pile/discard/add/?cards=" + discardCodes.toString())
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
         return data;
        });

    console.log("discRes",response)
    return response;
  }

async function redraw(deckUrl,count) {
     const response = await fetch(deckUrl + "/draw/?count=" + count)
       .then((res) => {
         if (!res.ok) {
           throw Error("Could not fetch data for that resource");
         }
         return res.json();
       })
       .then((data) => {
            return data;
       });

       console.log("redrawRes", response)
       return response;
   }

async function assign(deckUrl, player, cards) {
    const response = await fetch(deckUrl + "/pile/" + player + "/add/?cards=" + cards.toString())
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        return data;
      });
        
      console.log("assignRes", response);
      return response;
  }
