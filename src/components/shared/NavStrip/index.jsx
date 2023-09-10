import { BsTelephone } from "react-icons/bs";
import "./navstrip.css";

const Navstrip = () => {
  return (
    <div className="navstrip-parent">
      <div className="navstrip-tele">
        <span>
          <BsTelephone />
        </span>{" "}
        <p>+001234567890</p>
      </div>
      <div className="">
        <p>Get 50% Off on Selected Items</p>
      </div>
    </div>
  );
};

export default Navstrip;
