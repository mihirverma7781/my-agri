import { BsTelephone } from "react-icons/bs";

const Navstrip = () => {
  return (
    <div className="bg-green-700 px-2 py-1 flex flex-row justify-between">
      <div className="flex items-center gap-1 text-white font-normal text-xs">
        <span>
          <BsTelephone />
        </span>{" "}
        <p>+001234567890</p>
      </div>
      <div className="text-white font-normal text-xs">
        <p>Get 50% Off on Selected Items</p>
      </div>
    </div>
  );
};

export default Navstrip;
