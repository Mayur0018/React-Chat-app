import PropTypes from 'prop-types';

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
};

MyMessage.propTypes = {
  message: PropTypes.shape({
    attachments: PropTypes.arrayOf(PropTypes.shape({
      file: PropTypes.string,
    })),
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyMessage;
