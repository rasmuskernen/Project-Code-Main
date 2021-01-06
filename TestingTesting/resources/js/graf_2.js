const data =  [12, 19, 10];

var ctx = document.getElementById("diversity");
var diversity = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Män", "Kvinnor", "Annat"],
    datasets: [
      {
        label: "Diversity",
        data: data,
        //Ändra färger här för bakgrund
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        //Ändra färger här för kanter
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});