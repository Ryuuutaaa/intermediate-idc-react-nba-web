// import { Link } from "react-router-dom";
// export default function Index() {
//   return (
//     <div>
//       Index
//       <Link to={"/user"}>Check User</Link>
//     </div>
//   );
// }

import Navbar from "../components/user/Navbar";

// const Index = () => {
//   return (
//     <div className="grid grid-cols-3 gap-3">
//       <div className="w-60 h-60 bg-red-800"></div>
//       <div className="w-60 h-60 bg-red-800"></div>
//       <div className="w-60 h-60 bg-red-800"></div>
//       {/* 2 */}
//       <div className="w-60 h-60 bg-red-800"></div>
//       <div className="w-60 h-60 bg-red-800"></div>
//       <div className="w-60 h-60 bg-red-800"></div>
//       {/* 3 */}
//       <div className="w-60 h-60 bg-red-800"></div>
//       <div className="w-60 h-60 bg-red-800"></div>
//       <div className="w-60 h-60 bg-red-800"></div>
//     </div>
//   );
// };

const TeamWest = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <h1 className="text-center my-10 font-bold text-5xl">West Tem</h1>
        </div>
        <div className="grid grid-cols-4 text-center place-items-center">
          <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-32 mx-auto"
              src="https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg"
              alt=""
            />
            <div className="p-3">
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Memphis Grizzlies
              </h5>

              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-32 mx-auto"
              src="https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg"
              alt=""
            />
            <div className="p-3">
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Los Angeles Lakers
              </h5>

              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-32 mx-auto"
              src="https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg"
              alt=""
            />
            <div className="p-3">
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Phoenix Suns
              </h5>

              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-32 mx-auto"
              src="https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg"
              alt=""
            />
            <div className="p-3">
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Golden State Warrior
              </h5>

              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center "
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamWest;
