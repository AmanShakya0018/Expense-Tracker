import Header from "../../../components/Header";

export const Features = () => {
  return (<>
    <div className="w-screen h-screen p-3 border border-black rounded-lg shadow [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header></Header>
      <div className="flex justify-center items-center pt-8">

        <div className="w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700">

          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Track Your Expenses Effortlessly</h3>
          <p className="mt-8 p-3 text-gray-700 dark:text-gray-400"><b>Currently, our platform offers a single feature: the ability to record your daily expenses.</b><br />
            Start managing your finances with ease using Finance Buddy's powerful expense tracking feature. Whether you're budgeting for personal expenses or managing household finances, our intuitive website allows you to keep a detailed record of your spending habits. Gain insights into where your money goes and make informed financial decisions. Begin your journey towards financial clarity today with Finance Buddy!
          </p>
        </div>
      </div>
    </div>

  </>)
};
