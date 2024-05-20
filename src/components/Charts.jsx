import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";
import "../index.css";

const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }));

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }));
  console.log(salesData);
  return (
    <>
  
      <AreaChart 
        className=" custom-chart sales-chart h-80  bg-blue-100 shadow-lg rounded-lg p-4 mt-5"
        data={salesData}
        index="date"
        categories={["amount"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />

      <AreaChart 
        className="custom-chart purchases-chart h-80  bg-red-100 shadow-lg rounded-lg p-4 mt-5"
        data={purchasesData}
        index="date"
        categories={["amount"]}
        colors={["red"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />
    </>
  );
};
export default Charts;
