import {IoBookmarksOutline} from "react-icons/io5";

import PropTypes from "prop-types";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {
    title,
    id,
    cover,
    author_img,
    author,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="mt-8 space-y-4">
      <img
        className=" w-full h-[450px] rounded-md font-bold"
        src={cover}
        alt=""
      />
      <div className="flex justify-between">
        <div className="flex gap-6 mt-8 items-center">
          <div>
            <img className=" w-14 h-14 rounded-full" src={author_img} alt="" />
          </div>
          <div>
            <h4 className=" text-2xl font-bold">{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <span> {reading_time} min read </span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-2xl hover:text-green-500"
          >
            <IoBookmarksOutline></IoBookmarksOutline>
          </button>
        </div>
      </div>
      <h2 className="text-4xl ">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      {/* mark as read button */}
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-[#6047EC] text-xl font-semibold  underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
