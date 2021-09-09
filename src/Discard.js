import { useState } from "react";
import "./index.css";
import useFetch from "./useFetch";

const Discard = ({ deckUrl, player, sendDiscardData }) => {

    const [discard0, setDiscard0] = useState(false);
    const [discard1, setDiscard1] = useState(false);
    const [discard2, setDiscard2] = useState(false);
    const [discard3, setDiscard3] = useState(false);
    const [discard4, setDiscard4] = useState(false);
    const [stage, setStage] = useState({ mode: "Select" });
    const [redrawDone, setRedrawDone] = useState(false);

    const { data, isPending, error } = useFetch(deckUrl + "/pile/" + player + "/list/")

    const handleSubmit = (e) => {
        e.preventDefault();
        const discards = [discard0, discard1, discard2, discard3, discard4];
        var discardCodes = [];
        for (let i = 0; i < 5; i++) {
            discards[i] && discardCodes.push(data.piles[player].cards[i].code)
        }
        setStage({
            mode: "Discard",
            data: { discardCodes }
        });
    };

    async function discard(discardCodes) {
        const response = await fetch(deckUrl + "/pile/discard/add/?cards=" + discardCodes.toString())
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setStage({
                    mode: "Redraw",
                    data
                });
            })
        console.log(response)
        return response
    }

    async function redraw(count) {
        const response = await fetch(deckUrl + "/draw/?count=" + count)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setStage({
                    mode: "Assign",
                    data
                })
            })
        return response
    };

    async function assign(player, cards) {
        const response = await fetch(deckUrl + "/pile/" + player + "/add/?cards=" + cards.toString())

            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setStage({
                    mode: "Finish",
                    data
                });
            })
        return response
    }

    switch (stage.mode) {
        case "Select":
            break;
        case "Discard":
            discard(stage.data.discardCodes)
            break;
        case "Redraw":
            if (!redrawDone) {
                let count = (5 - stage.data.piles[player].remaining)
                redraw(count);
                setRedrawDone(true)
            }
            break;
        case "Assign":
            let cards = []
            if (stage.data.cards) {
                for (let i = 0; i < stage.data.cards.length; i++)
                    cards.push(stage.data.cards[i].code)
            }
            assign(player, cards);
            break;
        case "Finish":
            sendDiscardData(true);
            break;
        default:
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="discardHand">
                <input
                    type="checkbox"
                    name="card0"
                    onChange={(e) => setDiscard0(e.target.checked)}
                    checked={discard0}
                    className="dischardCheckBox">
                </input>
                <input
                    type="checkbox"
                    name="card1"
                    onChange={(e) => setDiscard1(e.target.checked)}
                    checked={discard1}>
                </input>
                <input
                    type="checkbox"
                    name="card2"
                    onClick={(e) => setDiscard2(e.target.checked)}
                    checked={discard2}>

                </input>
                <input
                    type="checkbox"
                    name="card3"
                    onChange={(e) => setDiscard3(e.target.checked)}
                    checked={discard3}>

                </input>
                <input
                    type="checkbox"
                    name="card4"
                    onChange={(e) => setDiscard4(e.target.checked)}
                    checked={discard4}
                ></input>
            </div>
            <button>Discard Selected</button>
        </form>
    );
}

export default Discard;