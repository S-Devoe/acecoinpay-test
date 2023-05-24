import { MdModeEdit } from "react-icons/md";
import { RiMastercardFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
// import CardInput from "./CardInput";
import { useState } from "react";

const FormContent = () => {
  // const [cardNumber, setCardNumber] = useState("");

  const [ccInput, setCcInput] = useState("");

  const handleChange = (e) => {
    setCcInput(e.target.value);
  };

  function creditCardFormat(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join("   -   ") : value;
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
              {/* <CardInput /> */}
              <div className="icon">
                <MdModeEdit height={16} width={16} color="#025fff" />
                <span>Edit</span>
              </div>
            </div>
            <div className="card-input input-style ">
              <RiMastercardFill size={25} />
              <input
                onChange={handleChange}
                type="text"
                required
                autoFocus
                id="card-num"
                className="cc-input"
                value={creditCardFormat(ccInput)}
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
              <input type="number" required id="cvv" />
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
                  type="text"
                  placeholder="MM"
                  required
                  id="date"
                  maxLength="2"
                />
              </div>
              <span> / </span>
              <div className="card-input cvv input-style ">
                <input
                  placeholder="YY"
                  type="text"
                  required
                  id="date"
                  maxLength="2"
                />
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
              <input type="password" required id="password" />
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
