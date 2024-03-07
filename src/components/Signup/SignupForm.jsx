import { useFormik } from 'formik';
import FormField from '../../shared/components/FormField';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'email is required';
  }

  if (!values.password) {
    errors.password = 'password is required';
  } else if (values.password.length < 8) {
    errors.password = 'minimum password length is 8 characters';
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='space-y-2.5'>
      <FormField
        type='email'
        name='email'
        label='Email Address'
        placeholder='demo@example.com'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <FormField
        type='password'
        name='password'
        label='Password'
        placeholder='Enter password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <div className='flex items-center py-5 space-x-2.5'>
        <input
          type='checkbox'
          name='remember'
          checked={formik.values.remember}
          className='checked:bg-orange-500'
          value={formik.values.remember}
          onChange={formik.handleChange}
        />
        <label htmlFor='remember' className='text-sm text-gray-500 font-semibold'>
          Remember my preference
        </label>
      </div>

      <button
        type='submit'
        className='w-full bg-orange-500 py-3 text-white font-semibold rounded-lg hover:bg-orange-600'>
        Sign Me in
      </button>
    </form>
  );
};

export default SignupForm;
