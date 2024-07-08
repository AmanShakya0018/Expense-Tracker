import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";
import DashHeader from "../../components/DashHeader";
export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    // <div className="dashboard-container w-screen">
    // <div className="w-screen h-full p-3 border border-black rounded-lg shadow [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="flex-grow p-3 border border-black rounded-lg shadow overflow-auto" style={{ background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' }}>
        <DashHeader />
        <h3 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome {user?.firstName}! Here Are Your Finances:
        </h3>
        <div className="pl-6 pr-6">
          <FinancialRecordForm />
          <div className="text-m text-white font-medium">Total Monthly: ${totalMonthly}</div>
          <FinancialRecordList />
        </div>
      </div>
    </div>
  );
};
