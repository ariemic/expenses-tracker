import { Chart } from "react-google-charts";

function ExpensesCircle({ data }) {
  const chartData = [
    ["Category", "Amount"],
    ...data.map(item => [item.category, item.budget])
  ];

  const options = {
    titleTextStyle: {
      fontSize: 18,
      bold: true
    },
    pieHole: 0.4,
    pieSliceText: "value",
    colors: [
      '#EF4444', // red-500
      '#3B82F6', // blue-500
      '#10B981', // emerald-500
      '#F59E0B', // amber-500
      '#8B5CF6', // violet-500
      '#EC4899', // pink-500
      '#14B8A6', // teal-500
      '#F97316', // orange-500
      '#64748B', // slate-500
      '#A855F7'  // purple-500
    ],
    legend: {
      position: 'labeled',
      textStyle: {
        fontSize: 14
      }
    },
    chartArea: {
      width: '90%',
      height: '90%'
    }
  };

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default ExpensesCircle;