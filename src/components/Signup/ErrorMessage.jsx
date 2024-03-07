import { useState } from 'react';

const ErrorMessage = ({ error }) => {
  const [errorMessage, setErrorMessage] = useState(error);
  setTimeout(() => {
    setErrorMessage(null);
  }, 5000);
  return (
    <>{error && <div className='text-xs font-semibold text-red-600'>{error}</div>}</>
  );
};

export default ErrorMessage;
