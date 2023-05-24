import { IoIosWallet } from "react-icons/io";

const LogoAndCountdown = () => {
  return (
    <div className="logo-and-countdown">
      <div className="logo-container">
        <div className="logo-bg">
          <IoIosWallet color="white" />
        </div>
        <p className="logo-name">
          AceCoin<span>Pay</span>
        </p>
      </div>
      <div className="countdown">
        
          <p>0</p>
          <p>1</p>
          <span>:</span>
          <p>1</p>
          <p>9</p>
    
      </div>
    </div>
  );
};
export default LogoAndCountdown;
