import "./play.css";

const PlayLog = ({ bookInfo }) => {
  let book;
  function DisplayLog() {
    let x = [];

    for (book of bookInfo) {
      x.push(
        <div className="playboardlogentry">
          Book: {book.bookNum} {book.highCard} {book.winningPlayer}
        </div>
      );
    }

    return <div>{x}</div>;
  }

  return (
    <div className="playboardlog">
      <div className="playboardlogheader">Play Log</div>
      {bookInfo && DisplayLog()}
    </div>
  );
};

export default PlayLog;
