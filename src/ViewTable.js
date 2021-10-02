import ViewBid from "./Bidding/ViewBid"
import ViewDraw from "./Drawing/ViewDraw"
import PlayCard from "./Play/PlayCard";
import "./viewTable.css";

const ViewTable = ({ stage, players, actions, bidData }) => {
  console.log(stage, players, actions);
  return (
    <div className="table">
      <div className="tablerowtop">
        <div className="tableplayerbox player3">
          <div className="playerslot">
            {
              (stage === "Bidding" && (
                <ViewBid bid={actions[2]} bidder={players[2]} />
              ))
            }
            {
              (stage === "Drawing" && (
                <ViewDraw draw={actions[2]} drawer={players[2]} />
              ))
            }

            {
              (stage === "Playing" && (
                <PlayCard card={actions[2]} player={players[2]}  />
              ))
            }

          </div>
        </div>
      </div>

      <div className="tablerowmid">
        <div className="tableplayerbox player2">
          <div className="playerslot">
            {
              (stage === "Bidding" && (
                <ViewBid bid={actions[1]} bidder={players[1]} />
              ))
            }
            {
              (stage === "Drawing" && (
                <ViewDraw draw={actions[1]} drawer={players[1]} />
              ))
            }
            {
              (stage === "Playing" && (
                <PlayCard card={actions[1]} player={players[1]}  />
              ))
            }

          </div>
        </div>
        <div className="tableplayerbox player4">
          <div className="playerslot">
            {
              (stage === "Bidding" && (
                <ViewBid bid={actions[3]} bidder={players[3]} />
              ))
            }
            {
              (stage === "Drawing" && (
                <ViewDraw draw={actions[3]} drawer={players[3]} />
              ))
            }
            {
              (stage === "Playing" && (
                <PlayCard card={actions[3]} player={players[3]} />
              ))
            }

          </div>
        </div>
      </div>

      <div className="tablerowbottom">
        <div className="tableplayerbox player1">
          <div className="playerslot">
            {
              (stage === "Bidding" && (
                <ViewBid bid={actions[0]} bidder={players[0]} />
              ))
            }
            {
              (stage === "Drawing" && (
                <ViewDraw draw={actions[0]} drawer={players[0]} />
              ))
            }
            {
              (stage === "Playing" && (
                <PlayCard card={actions[0]} />
              ))
            }

          </div>
        </div>
      </div>
      <div className="tablerowlog">
        <div className="tablelogbox">
          <div className="logslot"></div>
        </div>
      </div>



    </div>
  );
};

export default ViewTable;
