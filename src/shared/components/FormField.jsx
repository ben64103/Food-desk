import { ErrorMessage, Field } from 'formik';

const FormField = ({ name, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className='text-xs text-gray-500 font-bold'>
        {label}
      </label>
      <Field
        type={name}
        name={name}
        className='w-full border border-slate-400/90 mt-1 ps-3 py-2.5 text-sm rounded-md focus:outline-none focus:border-orange-500'
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component='div'
        className='text-xs font-semibold text-red-600'
      />
    </div>
  );
};

export default FormField;
