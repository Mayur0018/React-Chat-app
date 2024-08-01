import { useState } from 'react';
import PropTypes from 'prop-types';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }
    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form flex items-center p-4 border-t" onSubmit={handleSubmit}>
      <input
        className="message-input flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button" className="mx-2 cursor-pointer">
        <span className="image-button">
          <PictureOutlined className="text-2xl text-gray-600 hover:text-gray-800" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <SendOutlined className="text-2xl" />
      </button>
    </form>
  );
};

MessageForm.propTypes = {
  chatId: PropTypes.number.isRequired,
  creds: PropTypes.object.isRequired
};

export default MessageForm;
