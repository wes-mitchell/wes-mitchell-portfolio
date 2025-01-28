import React from 'react';

const ExternalLinkButton = ({ url, buttonText }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
      {buttonText}
    </a>
  );
};

export default ExternalLinkButton;
