import React from 'react';

const NotificationModal = ({
  showModal,
  setShowModal,
  notificationMessage,
  setNotificationMessage,
}) => {
  const { message, isError } = notificationMessage;

  const handleModalToggle = () => {
    setShowModal(!showModal);
    setNotificationMessage({
      message: '',
      isError: false,
    });
  };

  const header = isError ? 'Error' : 'Success';

  return (
    <div className="modal" role="dialog" aria-hidden={!showModal}>
      <div className="modal-content">
        <h2 className={isError ? 'error-text' : 'success-text'}>{header}</h2>
        <div className="modal-body">
          <span>{message}</span>
          <button
            onClick={handleModalToggle}
            className="btn modal-btn close-btn notification"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
