import { MdModeEdit } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
// import CardInput from "./CardInput";
import { useState } from "react";
import MCSymbol from "../../../assets/mc_symbol.svg";

const FormContent = () => {
  // const [cardNumber, setCardNumber] = useState("");

  const [ccInput, setCcInput] = useState("");

  const handleChange = (e) => {
    setCcInput(e.target.value);
  };

  function formatCreditCardNumber(input) {
    // Remove non-numeric characters
    const numericInput = input.replace(/\D/g, "").substr(0, 16);

    // Split the numeric input into groups of 4 digits
    const groups = numericInput.match(/.{1,4}/g);

    // Add a dash after every 4 digits
    const formattedInput = groups ? groups.join("-") : "";

    return formattedInput;
  }

  return (
    <section className="form-content">
      <form action="">
        <fieldset>
          <div className="">
            <div className="card-number">
              <label htmlFor="card-num" className="label-content">
                Card Number
                <span className="detail">
                  Enter the id-digit card number on the card.
                </span>
              </label>

              <div className="icon">
                <MdModeEdit height={16} width={16} color="#025fff" />
                <span>Edit</span>
              </div>
            </div>
            <div className="card-input input-style ">
              <img className="mc-logo" src={MCSymbol} alt="mc-logo" />
              <input
                onChange={handleChange}
                type="tel"
                required
                autoFocus
                placeholder="1234  -  5678  -  9012  -  3456"
                id="card-num"
                className="cc-input"
                value={formatCreditCardNumber(ccInput)}
              />
              <MdVerified color="#00a1f1" size={25} />
            </div>
          </div>

          {/* cvv  */}
          <div className="row-align">
            <div className="left">
              <label htmlFor="cvv" className="label-content">
                CVV Number
                <span className="detail">
                  Enter the 3 or 4 digit number on the card.
                </span>
              </label>
            </div>
            <div className="card-input cvv input-style ">
              <input placeholder="234" type="number" required id="cvv" />
              <TbGridDots color="#979eb0" size={25} />
            </div>
          </div>

          {/* expiry  */}

          <div className="row-align">
            <div className="left">
              <label htmlFor="date" className="label-content">
                Expiry Date
                <span className="detail">
                  Enter the expiry date on the card.
                </span>
              </label>
            </div>
            <div className="align-exp">
              <div className="card-input cvv input-style ">
                <input
                  type="tel"
                  placeholder="MM"
                  required
                  id="date"
                  maxLength="2"
                />
              </div>
              <span> / </span>
              <div className="card-input cvv input-style ">
                <input placeholder="YY" type="tel" required maxLength="2" />
              </div>
            </div>
          </div>

          {/* password  */}
          <div className="row-align">
            <div className="left">
              <label htmlFor="password" className="label-content">
                Password
                <span className="detail">Enter your dynamic password.</span>
              </label>
            </div>
            <div className="card-input  input-style ">
              <input
                placeholder="********"
                type="password"
                required
                id="password"
              />
              <TbGridDots color="#979eb0" size={25} />
            </div>
          </div>
        </fieldset>
        <button type="submit">Pay now</button>
      </form>
    </section>
  );
};
export default FormContent;
