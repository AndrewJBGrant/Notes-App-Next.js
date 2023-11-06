import { ImBin } from "react-icons/im";

// specifying the onClick prop with its type, which is a function that takes no arguments and returns nothing
const DeleteButton = ({ onClick }: { onClick: () => void}) => {


return (
    <button onClick={onClick}
      // className=" bg-[#4F5480] hover:bg-accent text-[#FBF6EE] font-bold py-2 px-4 rounded"
    className="text-[#FBF6EE] bg-slate-800 hover:bg-slate-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
    >
      <ImBin />
    </button>
  );
}

export default DeleteButton;
