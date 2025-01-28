import React, { useState } from 'react';
import './ResumeModal.css';

const ResumeModal = ({ showModal, setShowModal }) => {
  const [fileType, setFileType] = useState('');

  const handleFileChange = (e) => {
    setFileType(e.target.value);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
    setFileType('');
  };

  const filePath = () => {
    const defaultPath = '/Wesley-Mitchell-Resume.pdf';
    switch (fileType) {
      case 'pdf':
        return defaultPath;
      case 'docx':
        return '/Wesley-Mitchell-Resume.docx';
      default:
        return defaultPath;
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select File Type</h2>
        <div className="modal-body">
          <select
            onChange={handleFileChange}
            value={fileType}
            className="dropdown"
          >
            <option value="">Select Format</option>
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
          </select>

          {fileType && (
            <div className="modal-actions">
              <a
                href={filePath()}
                download={`Wesley-Mitchell-Resume.${fileType}`}
              >
                <button className="btn modal-btn">Download {fileType}</button>
              </a>
              <button
                onClick={handleModalToggle}
                className="btn modal-btn close-btn"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
