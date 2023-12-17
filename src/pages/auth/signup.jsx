import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="bg-white h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Connect with 2k+ farmers across Africa
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    PlaceHolder{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Placeholder{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Placehiolder{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Lorem Ipsuum{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up to AllInFarm
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to={"signin"}
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Fist name{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your first name"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bgWhite caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Last name{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your last name"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bgWhite caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>

                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>{" "}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Type of Farming{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                      <svg
                        fill="none"
                        className="w-5 h-5"
                        viewBox="0 0 14 14"
                        stroke="currentColor"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m 3.0380378,1 c -0.066717,0 -0.1365,0.02237 -0.1875,0.07337 L 1.595103,2.328804 c -0.102,0.102 -0.102,0.264848 0,0.366848 l 1.0027174,0.994565 a 0.26229866,0.26229866 0 0 0 0.089674,0.08967 L 4.1548857,5.255431 C 4.1921897,5.098387 4.2757988,4.956083 4.3994509,4.847822 L 4.4402119,4.807062 4.2364075,4.603258 5.1249945,3.714671 5.3858641,3.983693 5.7771684,3.633149 4.3016249,2.157606 a 0.26089565,0.26089565 0 0 0 -0.032609,-0.04076 l -0.024457,-0.0163 A 0.26089565,0.26089565 0 0 0 4.2037979,2.067936 L 3.2173856,1.07337 C 3.1663856,1.02237 3.1047552,1 3.0380378,1 Z m 7.9239132,0 c -0.06672,0 -0.128348,0.02237 -0.179348,0.07337 L 9.755429,2.100543 a 0.26089565,0.26089565 0 0 0 -0.07337,0.07337 L 8.222819,3.633152 8.614124,3.983696 8.874993,3.714674 9.76358,4.603261 9.559776,4.807065 9.600536,4.847825 C 9.724449,4.956347 9.807797,5.09839 9.845101,5.255434 L 11.30434,3.788042 a 0.26229866,0.26229866 0 0 0 0.08967,-0.08967 l 1.01087,-1.002718 c 0.102,-0.102 0.102,-0.264848 0,-0.366848 L 11.149451,1.07337 C 11.098451,1.02237 11.028668,1 10.961951,1 Z M 3.0380378,1.627717 3.706516,2.304348 2.8260813,3.184783 2.1494508,2.516304 3.0380378,1.627717 Z m 7.9239132,0 0.888587,0.888587 -0.676631,0.668479 -0.880434,-0.880435 0.668478,-0.676631 z M 4.081516,2.671196 4.7499943,3.347826 3.8695595,4.228261 3.1929291,3.559783 4.081516,2.671196 Z m 5.836957,0 0.888587,0.888587 -0.676631,0.668478 -0.880435,-0.880435 0.668479,-0.67663 z m -2.9184787,0.67663 c -0.061304,0 -0.1220217,0.02217 -0.1711956,0.06522 l -2.013587,1.76087 4.3695653,0 L 7.17119,3.413046 C 7.122016,3.37 7.0612987,3.347826 6.9999943,3.347826 Z M 4.6358639,5.695652 4.1304291,12.722826 c -0.00522,0.07226 0.024065,0.142696 0.07337,0.195652 C 4.253103,12.971435 4.3187769,13 4.3912987,13 L 9.60869,13 c 0.07226,0 0.138456,-0.02857 0.1875,-0.08152 0.0493,-0.05296 0.07859,-0.123391 0.07337,-0.195652 l -0.505435,-7.027174 -4.7282611,0 z M 6.7391247,7 l 0.5217392,0 0,0.782609 -0.5217392,0 0,-0.782609 z M 3.9510813,7.904891 1.595103,10.26087 c -0.102,0.102 -0.102,0.264847 0,0.366847 l 1.2554348,1.255435 c 0.050869,0.05087 0.1207174,0.07337 0.1875,0.07337 0.066783,0 0.1284782,-0.0225 0.1793478,-0.07337 l 0.4891304,-0.48913 0.097826,-1.38587 -0.611413,-0.611413 0.6766304,-0.668478 0.024457,0.0163 0.057065,-0.839674 z m 6.0978257,0 0.05707,0.839674 0.02446,-0.0163 0.676631,0.668478 -0.611414,0.611413 0.09783,1.38587 0.48913,0.48913 c 0.05087,0.05061 0.112565,0.07337 0.179348,0.07337 0.06678,0 0.13663,-0.0225 0.1875,-0.07337 l 1.255435,-1.255435 c 0.102,-0.102 0.102,-0.264847 0,-0.366847 L 10.048918,7.904895 Z M 2.8260813,9.771739 3.706516,10.652174 3.0380378,11.328804 2.1494508,10.440217 2.8260813,9.771739 Z m 8.3478257,0 0.676631,0.668478 -0.888587,0.888587 -0.668478,-0.67663 0.880434,-0.880435 z m -4.1739127,0.619565 c 0.4322609,0 0.7826087,0.350348 0.7826087,0.782609 l 0,1.304348 -1.5652174,0 0,-1.304348 c 0,-0.432261 0.3503478,-0.782609 0.7826087,-0.782609 z" />
                      </svg>
                    </div>

                    <select
                      id="farming"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    >
                      <option selected>Select an option</option>
                      <option value="livestock">Livestock</option>
                      <option value="crop">Crop</option>
                      <option value="aqua">Aquaculture</option>
                      <option value="horticulture">Horticulture</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>

                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
