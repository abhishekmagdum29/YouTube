import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/Redux/appSlice";
import { SEARCH_TEXT_API } from "../utils/constants";

const ButtonList = ({ list }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  const fecthData = async (list) => {
    const response = await fetch(SEARCH_TEXT_API + list);
    const data = await response.json();
    dispatch(addVideos(data.items));
  };

  return (
    <div
      className={
        isMenuOpen
          ? "flex justify-center mr-7 mt-1 mb-2 "
          : "flex justify-center mt-1 mb-2"
      }
    >
      {list.map((list, i) => (
        <>
          <button
            onClick={() => fecthData(list)}
            className={
              "px-2 py-1 m-2 bg-gray-200 rounded-lg transition-all duration-200  hover:bg-gray-300 hover:text-red-600"
            }
          >
            {list}
          </button>
        </>
      ))}
    </div>
  );
};

export default ButtonList;
