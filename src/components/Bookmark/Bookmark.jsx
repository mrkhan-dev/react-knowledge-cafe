import PropTypes from "prop-types";

const Bookmark = ({bookmarks}) => {
  const {title} = bookmarks;
  return (
    <div className="bg-white p-5 m-4 rounded-xl">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};

export default Bookmark;
