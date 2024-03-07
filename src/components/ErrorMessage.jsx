import { useState } from 'react';

const ErrorMessage = ({ error }) => {
  const [errorMessage, setErrorMessage] = useState(error);
  setTimeout(() => {
    setErrorMessage(null);
  }, 5000);
  return (
    <>
      {errorMessage && (
        <div className='text-xs font-semibold text-red-600'>{errorMessage}</div>
      )}
    </>
  );
};

export default ErrorMessage;
