import { MdPlayArrow, MdInfoOutline } from "react-icons/md";

import { SelectGenre } from "../select/SelectGenre";
import Button from "../button/Button";

const Featured = ({ type }) => {
  return (
    <div className="relative h-[95vh] w-full ">
      {/* Select */}
      {type && (
        <div className="text-white absolute z-[10000000] top-[80px] left-[120px] flex items-center space-x-4 w-64">
          <span className="text-3xl font-medium">{type === "movie" ? "Movie" : "Series"}</span>
          <SelectGenre />
        </div>
      )}

    {/*BG Img*/}
      <img
        className="h-full w-full object-cover"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="avatar"
      />

      <div className="absolute top-0 h-full text-white grid grid-cols-12 items-center">
        <div className="col-span-5 px-[80px]">
          <div className="mb-4">
            <img
              className="h-[160px] object-contain mb-4"
              src="https://www.indiewire.com/wp-content/uploads/2017/09/crouching-tiger-hidden-dragon-sword-of-destiny-2016.jpg?w=675"
              alt=""
            />
            <p>
              Lorem ipsum Impedit odio sequi asperiores earum ducimus explicabo consectetur modi, hic possimus iure itaque eius facere
              assumenda, in culpa expedita veritatis inventore praesentium deleniti aliquam perspiciatis sunt.
            </p>
          </div>

          {/* Buttons */}
          <div className="text-black flex space-x-4">
            <Button className="bg-white text-main-color" icon={<MdPlayArrow />} text="play" />
            <Button className="bg-gray-400 text-white " icon={<MdInfoOutline />} text="info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
