const ViewDraw = ({ draw, drawer }) => {
  return (
    <div className="playermessagebox">
      {draw && (
        <div>
          <div className="playermessageboxheader">{drawer}</div>
          <div className="playermessageboxtext">Draws {draw}</div>
        </div>
      )}
      {!draw && (
        <div>
          <div className="playermessageboxheader">{drawer}</div>
          <div className="playermessageboxtext">&nbsp;</div>
        </div>
      )}
    </div>
  );
};

export default ViewDraw;
