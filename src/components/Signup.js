import axios from 'axios';
import NovaFormInput from './shared/NovaFormInput';
/* eslint-disable no-alert, no-console, no-restricted-syntax */

const Signup = () => {
  const BaseUrl = 'http://localhost:3001/';
  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = new FormData(e.target);
    if (signupData.get('user[password]') !== signupData.get('user[cnf_password]')) {
      console.log('Password does not match');
      return;
    }
    signupData.delete('user[cnf_password]');
    await axios.post(`${BaseUrl}users`, signupData).then((response) => {
      const token = response.headers.authorization;
      if (token && token !== '') {
        console.log(token);
      }
    }).catch((err) => {
      console.log(err);
    });
    e.target.reset();
  };
  return (
    <div className="flex flex-col bg-[url('../asset/sp-bg.svg')] w-full bg-cover shadow-md items-center justify-center border-solid border-[1px] border p-4 sm:w-[600px]">
      <h2>Sign up a new NOVA account</h2>
      <form id="signup" action="submit" onSubmit={handleSubmit} className="grid pt-4 pb-1 items-center space-y-6 w-full">
        <NovaFormInput cId="user[username]" cMinLen="2" cPlaceholder="Enter your name" isRequired />
        <NovaFormInput cType="email" cId="user[email]" cPlaceholder="Enter your email" isRequired />
        <NovaFormInput cType="password" cId="user[password]" cMinLen="6" cPlaceholder="Enter your Password" isRequired />
        <NovaFormInput cType="password" cId="user[cnf_password]" cMinLen="6" cPlaceholder="Confirm your Password" isRequired />
        <button type="submit" className="opacity-90 w-full py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-300 rounded-md hover:bg-lime-200 focus:outline-lime-500">Register</button>
      </form>
      <div className="tracking-wide text-sm font-light text-center text-gray-700">
        Already have an account?
        <a
          href="/#"
          className="ml-1 font-medium hover:underline hover:border-lime-200 hover:ring-lime-200 focus:border-lime-200 outline-none"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Signup;
