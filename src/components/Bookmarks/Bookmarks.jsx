import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="w-1/3 ml-6  mt-8 rounded-xl">
      <div className="px-12 py-6 border-2 border-[#6047EC] rounded-lg text-2xl font-bold text-[#6047EC] bg-[#6047EC1A]">
        <h1>Spent Time on Read : {readingTime} min </h1>
      </div>
      <div className="bg-[#1111110D] rounded-xl space-y-8 mb-8">
        <h2 className="ml-5 mt-8 text-2xl font-bold mb-8">
          Book Marks {bookmarks.length}{" "}
        </h2>

        <div className="mb-8">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmarks={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};
export default Bookmarks;
