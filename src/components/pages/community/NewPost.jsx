import { useState } from 'react';
import SearchHandle from './SearchHandle';
import 'react-quill/dist/quill.snow.css';
import { imagePicker } from '../../../assets/images';
import NeedHelp from '../../../utils/cards/NeedHelp';
import TextEditor from './TextEditor';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const CommunityPost = () => {
  const [value, setValue] = useState(0);
  const [image, setImage] = useState('');

  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <div className="1500px:w-[85%] mx-auto">
      <SearchHandle
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
        navigate={navigate}
      />

      <h3 className="my-5 1500px:text-[24px] 1500px:leading-[36px]">
        Home {'>'}{' '}
        <span className="1500px:text-[24px] 1500px:leading-[36px] text-[#00FEA8] ">
          New post
        </span>
      </h3>

      <p className="1500px:text-[32px] 1500px:leading-[48px] font-[600] font-poppins">
        Create New Topic
      </p>

      <div
        className="1500px:w-full 1500px:h-[694px] border border-[#3a3a3a3b] p-5 rounded-[5px] "
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
      >
        <p
          className="1500px:text-[18px] 1500px:leading-[22px] "
          style={{ fontFamily: 'Source Sans Pro' }}
        >
          Title *Required*
        </p>

        <input
          type="text"
          className="mt-1 1500px:w-[95%] py-3 px-2 rounded-[5px] outline-none border border-[#3a3a3a3b] "
        />

        <p
          className="mt-5 1500px:text-[18px] 1500px:leading-[22px] "
          style={{ fontFamily: 'Source Sans Pro' }}
        >
          Tags
        </p>

        <input
          type="text"
          className="mt-1 1500px:w-[95%] py-3 px-2 rounded-[5px] outline-none border border-[#3a3a3a3b] "
        />

        <p
          className="mt-5 1500px:text-[18px] 1500px:leading-[22px] "
          style={{ fontFamily: 'Source Sans Pro' }}
        >
          Contents
        </p>

        <TextEditor value={value} setValue={setValue} />

        <div>
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file"
            className={`absolute p-3 flex items-center cursor-pointer ${
              dragging ? 'bg-blue-500' : 'bg-transparent'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {image ? (
              <div className="flex gap-8">
                <img
                  src={image}
                  alt=""
                  className="mt-[-50px] 1500px:w-[80px] 1500px:h-[80px] object-contain "
                />

                <div onClick={() => setImage('')}>
                  <MdDelete size={20} className="text-red-500" />
                </div>
              </div>
            ) : (
              <span className="flex items-center gap-3">
                <img
                  src={imagePicker}
                  alt=""
                  className="1500px:w-[18px] 1500px:h-[19px]"
                />
                <p> Drag files here to attach, or choose files...</p>
              </span>
            )}
          </label>
        </div>

        <div className="1500px:w-[95%] 1500px:mt-[100px] 1500px:flex 1500px:items-center 1500px:justify-end">
          <button className="button text-[#fff] 1500px:!w-[146px] 1500px:!h-[50px] 1500px:!text-[18px] 1500px:leading-[22px]">
            Post Topic
          </button>
        </div>
      </div>
      <p className="mt-[100px] 1500px:text-[24px] 1500px:leading-[52px] font-[600] ">
        Need More help?
      </p>

      <NeedHelp />
    </div>
  );
};

export default CommunityPost;
