import { useState } from 'react'

const ShareButton = () => {
  const [buttonText, setButtonText] = useState('Share');

  const copyUrlToClipboard = () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
      .then(() => {
        setButtonText('Copied!');
        setTimeout(() => {
          setButtonText('Share');
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying URL: ', error);
      });
  };

  return (
    <button onClick={copyUrlToClipboard} className='button w-20 h-7'><span className='button__text'>{buttonText}</span></button>
  );
};

export default ShareButton;