import { ErrorMessage } from 'formik';
import React from 'react';
// import ErrorMessage from '../../components/ErrorMessage';

const FormField = ({ type, name, label, placeholder, value, error, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className='text-xs text-gray-500 font-bold'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className='w-full border border-slate-400/90 ps-3 py-2.5 text-sm rounded-md focus:outline-none focus:border-orange-500'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* <ErrorMessage name={name} /> */}
    </div>
  );
};

export default FormField;
