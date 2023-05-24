import Chip from "../../assets/chip.png";
import Wifi from "../../assets/wifi.png";
import { RiMastercardFill } from "react-icons/ri";
import { IoReceipt } from "react-icons/io5";

const CardInfo = () => {
  return (
    <section className="card-img">
      <div className="block"></div>
      <div className="debit-card">
        <div className="chip-and-wifi">
          <img className="chip" src={Chip} alt="chip" />
          <img className="wifi" src={Wifi} alt="wifi" />
        </div>

        <div className="info">
          <h2>Jonathan Michael</h2>
          <div className="pin">
            <span className="inv"> **** </span>
            <span> 1234 </span>
          </div>

          <div className="exp">
            <span className="exp-date"> 09 / 22 </span>
            <span className="mc-logo">
              {" "}
              <RiMastercardFill size={35} />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="details">
          <div className="details-content">
            <ul>
              <li>
                <h3>Company</h3> <span>Apple</span>
              </li>
              <li>
                <h3>Order Number</h3> <span>12345</span>
              </li>
              <li>
                <h3>Product</h3> <span>Macbook</span>
              </li>
              <li>
                <h3>VAT (20%)</h3> <span>$1200</span>
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
                $1200<span>.99</span>{" "}
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
