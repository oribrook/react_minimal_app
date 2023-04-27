import { Modal } from "react-bootstrap";

const AddOptions = (props) => {
  return (
    <Modal
      show={props.showOptions}
      onHide={() => {
        props.setShowOptions(false);
      }}
    >
      <div style={{ padding: "10%", direction: "rtl" }}>
        <input
          className="form-check-input mt-0"
          id="spicyID"
          type="checkbox"
          checked={props.spicy}
          onChange={(event) => {
            props.setSpicy(event.target.checked);
          }}
        />
        <label htmlFor="spicyID"> חריף </label>

        <br />
        <input
          className="form-check-input mt-0"
          id="drinkID"
          type="checkbox"
          checked={props.drink}
          onChange={(event) => {
            props.setDrink(event.target.checked);
          }}
        />
        <label htmlFor="drinkID"> שתיה </label>
        
              <br />
              
        <input
          className="form-check-input mt-0"
          id="picklesID"
          type="checkbox"
          checked={props.pickles}
          onChange={(event) => {
            props.setPickles(event.target.checked);
          }}
        />
        <label htmlFor="picklesID"> חמוצים </label>
        <br />

        <input
          className="form-check-input mt-0"
          id="saladID"
          type="checkbox"
          checked={props.salad}
          onChange={(event) => {
            props.setSalad(event.target.checked);
          }}
        />
        <label htmlFor="saladID"> סלט </label>
        <br />

        <button onClick={() => props.setShowOptions(false)}> בצע </button>
      </div>
    </Modal>
  );
};

export default AddOptions;
