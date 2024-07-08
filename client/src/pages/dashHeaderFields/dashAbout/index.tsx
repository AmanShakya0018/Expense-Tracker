import DashHeader from "../../../components/DashHeader";

export const DashAbout = () => {
  return (<>
    <div className="w-screen h-screen p-3 border border-black rounded-lg shadow [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <DashHeader />
      <div className="flex justify-center items-center pt-8">

        <div className="w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700">

          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to Finance Buddy: Your Free Financial Management Tool</h3>
          <p className="mt-8 p-3 text-gray-700 dark:text-gray-400">Discover the power of financial organization with Finance Buddy — your comprehensive, free tool for effortlessly managing your daily expenses. Whether you're tracking personal spending or managing a household budget, our user-friendly website provides all the features you need without any cost. Take control of your finances today with Finance Buddy!
          </p>
        </div>
      </div>
    </div>

  </>)
};
