import { useState } from "react";
import AddOptions from "./AddOptions";
import { LoadingButton } from "./LoadingButton";
import { Button } from "react-bootstrap";

export default function OrderFood() {
  const [selected, setSelected] = useState("breakfast");
  const [showOptions, setShowOptions] = useState(false);
  const [drink, setDrink] = useState(true);
  const [spicy, setSpicy] = useState(true);
  const [pickles, setPickles] = useState(true);
  const [salad, setSalad] = useState(true);

  const handleOnSubmit = (event) => {
    // some logic, such as sending to the server the new order details.
    event.preventDefault();
  };

    const onSubmitOrder = async () => {
        await new Promise((x) => setTimeout(x, 500));
        console.log({
            meal: selected,
            options1: drink ? "drink" : "no drink",
            options2: spicy ? "spicy" : "no spicy",
            options3: pickles ? "pickles" : "pickles",
            options4: salad ? "salad" : "no salad",
        })
    }
  return (
    <>
          <form onSubmit={handleOnSubmit}>        
              <label htmlFor="selectID"> בחר ארוחה </label>
              <br/>
              <select
                  className="form-select"
          id="selectID"
          value={selected}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
        >
          <option value="breakfast"> ארוחת בוקר </option>
          <option value="launch"> ארוחת צהריים </option>
          <option value="dinner"> ארוחת ערב </option>
        </select>
              <br />
              <br />
              
        <Button variant="danger"
          onClick={() => {
            setShowOptions(true);
          }}
        >
          אופציות נוספות
              </Button>
              
        <AddOptions
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          drink={drink}
          setDrink={setDrink}
          spicy={spicy}
          setSpicy={setSpicy}
          pickles={pickles}
          setPickles={setPickles}
          salad={salad}
          setSalad={setSalad}
        ></AddOptions>
        <br /> 
        
        <LoadingButton loadingTxt={"שולח הזמנה"} onClick={onSubmitOrder}> הזמן </LoadingButton>
      </form>
    </>
  );
}
