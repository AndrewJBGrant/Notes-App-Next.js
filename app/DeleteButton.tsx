import { ImBin } from "react-icons/im";

const DeleteButton = (onClick: any) => {


return (
    <button onClick={onClick}
      // className=" bg-[#4F5480] hover:bg-accent text-[#FBF6EE] font-bold py-2 px-4 rounded"
    className="text-[#FBF6EE] bg-accent hover:bg-blue-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
    >
      <ImBin />
    </button>
  );
}

export default DeleteButton;
