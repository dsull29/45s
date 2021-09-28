import "./play.css";

const PlayLog = ({bookInfo}) => {

    let book;
    function DisplayLog() {
        let x = [];
    
        for (book of bookInfo) {
          x.push(
            <div className="playboardlogentry">
              {book.bookNum}:{" "}
              {`${
                book.winningPlayer === "You" || book.winningPlayer === "Partner"
                  ? "Team 1"
                  : "Team 2"
              }`}{" "}
              {book.highCard} {book.winningPlayer}
            </div>
          );
        }
    
        return <div>{x}</div>;
      }

    return ( 
        <div className="playboardlog">
        <div className="playboardheader">Play Log</div>
        {bookInfo && DisplayLog()}
        
        </div>
     );
}
 
export default PlayLog;