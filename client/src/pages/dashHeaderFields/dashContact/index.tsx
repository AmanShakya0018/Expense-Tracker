import DashHeader from "../../../components/DashHeader";

export const DashContact = () => {
  return (<>

    <div className="w-screen h-screen p-3 border border-black rounded-lg shadow [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <DashHeader />
      <div className="flex justify-center items-center pt-8">
        <div className="w-3/5 p-6 bg-white  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700">

          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us:</h3>
          <p className="mt-8 text-gray-700 dark:text-gray-400">
            Thank you for visiting Finance Buddy! For further inquiries and updates, please feel free to reach out to us through the following channels:
            <br />
            <br />
            Connect with us on X:
            <a
              href="https://x.com/AmanShakya0018"
              className="text-blue-500 hover:underline pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @AmanShakya0018
            </a>
          </p>

          <p className="mt-8 p-1 text-gray-700 dark:text-gray-400">
            Connect with us on LinkedIn:

            <a
              href="https://www.linkedin.com/in/aman-shakya-463647291/"
              className="text-blue-500 hover:underline pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aman Shakya
            </a>
          </p>
        </div>
      </div>
    </div>

  </>)
};
