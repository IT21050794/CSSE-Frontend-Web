import "./CrowdedCard.css";

const CrowdedCard = () => {
  return (
    <div className="full-graph">
      <img
        className="horizontal-lines-icon"
        alt=""
        src="/horizontal-lines.svg"
      />
      <div className="hours">
        <div className="div7">0</div>
        <div className="div7">1</div>
        <div className="div7">2</div>
        <div className="div7">3</div>
        <div className="div7">4</div>
        <div className="div7">5</div>
        <div className="div7">6</div>
        <div className="div7">7</div>
        <div className="div7">8</div>
        <div className="div7">9</div>
        <div className="div17">10</div>
        <div className="div17">11</div>
        <div className="div17">12</div>
        <div className="div17">13</div>
        <div className="div17">14</div>
        <div className="div17">15</div>
        <div className="div17">16</div>
        <div className="div17">17</div>
        <div className="div17">18</div>
        <div className="div17">19</div>
        <div className="div17">20</div>
        <div className="div17">21</div>
        <div className="div17">22</div>
        <div className="div17">23</div>
      </div>
      <div className="values">
        <div className="div31">0</div>
        <div className="div32">10</div>
        <div className="div33">20</div>
        <div className="div34">30</div>
        <div className="div35">40</div>
        <div className="div36">50</div>
        <div className="div37">60</div>
      </div>
      <div className="graphic-main">
        <img
          className="divider-graph-vertical"
          alt=""
          src="/divider--graph--vertical.svg"
        />
        <div className="graphic-mask">
          <img className="mask-group-icon" alt="" src="/mask-group.svg" />
          <img
            className="yesterday-graph-icon"
            alt=""
            src="/yesterday-graph.svg"
          />
          <img className="today-graph-icon" alt="" src="/today-graph.svg" />
          <div className="pointer">
            <div className="circle-pointer-2" />
            <div className="circle-pointer-1" />
            <div className="value">
              <img className="sheet-icon" alt="" src="/sheet.svg" />
              <b className="pointer-value">Over Crowding</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdedCard;
