import { Form, Formik } from 'formik';

import RememberMe from './RememberMe';
import ForgotPassword from './ForgotPassword';
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
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        remember: false,
      }}
      validate={validate}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}>
      {({ errors, touched }) => (
        <Form className='space-y-2.5'>
          <FormField name='email' label='email address' placeholder='demo@example.com' />
          <FormField name='password' label='password' placeholder='enter password' />
          <div className='space-y-2 pb-1'>
            <RememberMe />
            <ForgotPassword />
          </div>

          <button
            type='submit'
            className='w-full bg-orange-500 py-3 text-white font-semibold rounded-lg hover:bg-orange-600'>
            Sign Me in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
