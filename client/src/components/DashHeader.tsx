import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const DashHeader = () => {
  return (<>

    <header>
      <nav className="bg-white pb-10 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-transparent">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <span className="pr-3 pt-2">
              <button >
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </button>
            </span>
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Finance Buddy
            </span>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/dashboard">
                  <button
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Dashboard
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/DashFeatures">
                  <button

                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/DashAbout">
                  <button

                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/DashContact">
                  <button

                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>)
}

export default DashHeader;

