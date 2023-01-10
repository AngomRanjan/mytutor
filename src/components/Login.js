import axios from 'axios';
import NovaFormInput from './shared/NovaFormInput';

/* eslint-disable no-alert, no-console, no-restricted-syntax, max-len */
const Login = () => {
  const BaseUrl = 'http://localhost:3001/';
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    await axios.post(`${BaseUrl}users/sign_in`, loginData).then((response) => {
      const token = response.headers.authorization;
      if (token && token !== '') {
        console.log(token);
      }
    }).catch((err) => {
      console.log(`${err.response ? err.response.data : err.message}!`);
    });
    e.target.reset();
  };
  return (
    <div className="flex flex-col bg-[url('../asset/sp-bg.svg')] w-full bg-cover shadow-md items-center justify-center border-solid border-[1px] border p-4 sm:w-[600px]">
      <h2>Sign in to your NOVA account</h2>
      <form action="submit" onSubmit={handleSubmit} className="grid pt-4 pb-1 items-center space-y-6 w-full">
        <NovaFormInput cId="user[username]" cMinLen="2" cPlaceholder="Enter your name" isRequired />
        <NovaFormInput cType="password" cId="user[password]" cMinLen="6" cPlaceholder="Enter your Password" isRequired />
        <button type="submit" className="opacity-90 w-full py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-300 rounded-md hover:bg-lime-200 focus:outline-lime-500">Login</button>
      </form>
      <div className="tracking-wide text-sm font-light text-center text-gray-700">
        Don&apos;t have an account?
        <a
          href="/#"
          className="ml-1 font-medium hover:underline hover:border-lime-200 hover:ring-lime-200 focus:border-lime-200 outline-none"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
