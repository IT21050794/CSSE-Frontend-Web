import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="cards">
      <div className="unresolved">
        <div className="cards-default4" />
        <b className="total-buses">Total Buses</b>
        <b className="b">60</b>
      </div>
      <div className="overdue">
        <div className="cards-hover">
          <div className="stroke" />
          <div className="sheet9" />
        </div>
        <b className="overcrowd">OverCrowd</b>
        <b className="b1">200</b>
      </div>
      <div className="open">
        <div className="cards-default4">
          <b className="b2">40</b>
        </div>
        <b className="seating-capacity">Seating capacity</b>
      </div>
      <div className="on-hold">
        <div className="cards-default6">
          <div className="sheet10" />
        </div>
        <b className="needed-extra-buses">Needed Extra Buses</b>
      </div>
      <b className="b3">5</b>
    </div>
  );
};

export default FormContainer;
