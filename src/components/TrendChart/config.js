export const chartConfig =  {
    xAxes: [
      {
        type: "CategoryAxis",
        dataFields: {
          category: "SalesWeek"
        }
      }
    ],
    yAxes: [
      {
        type: "ValueAxis",
        renderer: {
          opposite: true
        }
      }
    ],
    legend: {
      maxWidth: 300,
      useDefaultMarker: true
    },
    series: [
      {
        type: "LineSeries",
        name: "This Year",
        dataFields: {
          valueY: "SalesLastYear",
          categoryX: "SalesWeek"
        }
      },
      {
        type: "LineSeries",
        name: "Last Year",
        stroke: "#CDA2AB",
        strokeWidth: 3,
        strokeDasharray: "8,4",
        dataFields: {
          valueY: "SalesThisYear",
          categoryX: "SalesWeek"
        }
      }
    ],
    data: [
      {
        SalesWeek: "Tue",
        SalesLastYear: 95,
        SalesThisYear: 110
      },
      {
        SalesWeek: "Wed",
        SalesLastYear: 70,
        SalesThisYear: 78
      },
      {
        SalesWeek: "Thu",
        SalesLastYear: 60,
        SalesThisYear: 70
      },
      {
        SalesWeek: "Fri",
        SalesLastYear: 40,
        SalesThisYear: 50
      },
      {
        SalesWeek: "Sat",
        SalesLastYear: 65,
        SalesThisYear: 70
      },
      {
        SalesWeek: "Sun",
        SalesLastYear: 80,
        SalesThisYear: 90
      },
      {
        SalesWeek: "Mon",
        SalesLastYear: 100,
        SalesThisYear: 115
      }
    ]
  };
  