import React from 'react';

interface IAlertModal {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal = ({ isOpen, message, onConfirm, onCancel }:IAlertModal) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AlertModal);
