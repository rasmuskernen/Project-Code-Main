const data = {
    year: ['2019', '2020', '2021'],
    data: [176000, 480600, 1250000]
}
const i = 0;

var ctx = document.getElementById("utveckling");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.year,
        datasets: [{
            label: "",
            data: data.data,
            backgroundColor: "rgba(220, 60, 10, 0.1)",
            borderColor: "rgba(220, 60, 10, 0.4)",
        }]
    },
    options: {
        title: false,
    }
});