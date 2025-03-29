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
    colors: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B'],
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