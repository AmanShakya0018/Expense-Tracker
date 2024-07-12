import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashHeader from "../../components/DashHeader";
import { FinancialRecordForm } from "../../dashComponent/financial-record-form";
import { FinancialRecordList } from "../../dashComponent/financial-record-list";

export const Dashboard = () => {
  const { isLoaded, user } = useUser();
  const { records } = useFinancialRecords();
  const navigate = useNavigate();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  useEffect(() => {
    if (isLoaded && !user) {
      navigate("/");
    }
  }, [isLoaded, user, navigate]);

  if (!isLoaded || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div
        className="flex-grow p-3 border border-black rounded-lg shadow overflow-auto"
        style={{ background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)" }}
      >
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
