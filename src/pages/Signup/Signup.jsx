import SignupForm from '../../components/Signup/SignupForm';
import ContentDivider from '../../components/ContentDivider';
import SocialLoginOptions from '../../components/Signup/SocialLoginOptions';

const Signup = () => {
  return (
    <main className='min-h-screen bg-white'>
      <div className='mx-auto mt-5 w-full h-full px-6'>
        <div className='flex items-center justify-center'>
          <div className='w-full px-6'>
            <div className='flex h-[558px] mt-12'>
              <aside className='w-2/3 px-[15px] text-center'>
                <img
                  src='/src/assets/images/pic-5.7dba4fa4b2b813e643ad.jpg'
                  className='rounded-md w-full h-full object-cover'
                  alt='image of a hamburger'
                />
              </aside>
              <aside className='w-1/3 px-[15px] '>
                <div className='text-center mb-4'>
                  <div>
                    <img
                      src='/src/assets/logo.png'
                      width='204'
                      height='45'
                      className='mb-4 mx-auto'
                      alt='logo'
                    />
                    <h3 className='font-extrabold mb-2 text-[1.25rem]'>
                      Create an account
                    </h3>
                  </div>
                  <ContentDivider width='65%' content='Sign up' />
                </div>

                <SignupForm />
                <SocialLoginOptions />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
