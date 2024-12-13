import React from 'react';

interface IAlertModal {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<IAlertModal> = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="alert-modal__overlay">
      <div className="alert-modal__container">
        <h3 className="alert-modal__title">{title}</h3>
        <p className="alert-modal__message">{message}</p>
        <div className="alert-modal__actions">
          <button className="alert-modal__button alert-modal__button--confirm" onClick={onConfirm}>
            Confirm
          </button>
          <button className="alert-modal__button alert-modal__button--cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
