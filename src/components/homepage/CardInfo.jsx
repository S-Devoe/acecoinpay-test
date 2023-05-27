import Chip from "../../assets/chip.png";
import { IoReceipt } from "react-icons/io5";
import { DiApple } from "react-icons/di";
import MCLogo from "../../assets/mastercard-2.svg";
import { AiOutlineWifi } from "react-icons/ai";

const CardInfo = () => {
  return (
    <section className="card-img">
      <div className="block"></div>
      <div className="debit-card">
        <div className="chip-and-wifi">
          <img className="chip" src={Chip} alt="chip" />
          {/* <img className="wifi" src={Wifi} alt="wifi" /> */}
          <AiOutlineWifi size={32} color="#000a38" />
        </div>

        <div className="info">
          <h2>Jonathan Michael</h2>
          <div className="pin">
            <span className="inv"> **** </span>
            <span> 1234 </span>
          </div>

          <div className="exp">
            <span className="exp-date"> 09/22 </span>
            <span className="mc-logo">
              <img src={MCLogo} alt="mastercard" />
            </span>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="details">
          <div className="details-content">
            <ul>
              <li>
                <h3>Company</h3>
                <span>
                  <span>
                    <DiApple size={19} color="#101d47" />
                  </span>
                  Apple
                </span>
              </li>
              <li>
                <h3>Order Number</h3> <span>12345</span>
              </li>
              <li>
                <h3>Product</h3> <span>Macbook Air</span>
              </li>
              <li>
                <h3>VAT (20%)</h3> <span>$100.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <div className="text-and-receipt">
            <div className="text">
              <h4>You have to pay</h4>
              <p className="">
                549<span>.99</span>
                <span className="currency">USD</span>
              </p>
            </div>

            <div className="receipt">
              <IoReceipt size={30} color="#4e5878" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardInfo;
