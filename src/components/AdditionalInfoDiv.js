import "./AdditionalInfoDiv.css";

const AdditionalInfoDiv = () => {
  return (
    <div className="additional-info">
      <div className="bus-root">Bus Root</div>
      <b className="b4">138</b>
      <img
        className="divider-line-vertical"
        alt=""
        src="/divider--line--vertical.svg"
      />
      <img
        className="divider-line-horizontal18"
        alt=""
        src="/divider--line--horizontal1.svg"
      />
      <div className="total-passengers">Total Passengers</div>
      <b className="b5">4260</b>
      <img
        className="divider-line-horizontal19"
        alt=""
        src="/divider--line--horizontal1.svg"
      />
      <div className="average-passengers-per">Average Passengers per Day</div>
      <b className="b6">5500</b>
      <img
        className="divider-line-horizontal20"
        alt=""
        src="/divider--line--horizontal1.svg"
      />
      <div className="total-revenue-from">Total revenue from root(RS)</div>
      <b className="b7">300,000</b>
      <img
        className="divider-line-horizontal21"
        alt=""
        src="/divider--line--horizontal1.svg"
      />
    </div>
  );
};

export default AdditionalInfoDiv;
