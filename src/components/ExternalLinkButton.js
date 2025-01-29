import React from 'react';

const ExternalLinkButton = ({ url, buttonText, className = '' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${className}`}
    >
      {buttonText}
    </a>
  );
};

export default ExternalLinkButton;
