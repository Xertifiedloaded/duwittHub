/* eslint-disable react/prop-types */

import ReactQuill from 'react-quill';

const TextEditor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      [{ align: '' }, { align: 'center' }, { align: 'right' }],
    ],
  };
  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        placeholder="Type comment here"
        onChange={(e) => setValue(e.target.value)}
        className="quill relative"
      />
    </div>
  );
};

export default TextEditor;
