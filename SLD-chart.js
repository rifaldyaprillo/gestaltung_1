let color1 = 'rgba(255, 99, 132, 0.5)'
let color2 = 'rgb(255, 99, 132)'
let color3 = 'rgba(75, 192, 192, 0.5)'
let color4 = 'rgb(75, 192, 192)'
let color5 = 'rgba(255, 159, 64, 0.5)'
let color6 = 'rgb(255, 159, 64)'
let color7 = ['rgb(255, 205, 86)',
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
]
let color8 = ['rgba(255, 205, 86, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(201, 203, 207, 0.5)'
]

/* main data */
/*gesamt*/
var gmt  = [74, 80, 90, 85, 81, 65, 82];
var gmt1 = [269, 279, 313, 322, 340, 317, 328];
/*männlich*/
var mlh  = [61, 60, 69, 65, 59, 47, 57];
var mlh1 = [223, 233, 253, 261, 267, 256, 253];
/*weiblich*/
var wbl  = [13, 20, 21, 20, 22, 18, 25];
var wbl1 = [46, 46, 60, 61, 73, 61, 75];
/*deutsch*/
var deu  = [71, 71, 81, 76, 71, 59, 70];
var deu1 = [253, 254, 284, 293, 307, 285, 290];
/*ausländisch*/
var aus  = [3, 9, 9, 9, 10, 6, 12];
var aus1 = [16, 25, 29, 29, 33, 32, 38];
/*bildungsinländisch*/
var bin  = [74, 77, 84, 82, 78, 63, 76];
var bin1 = [266, 272, 303, 312, 328, 302, 309];
/*bildungsausländisch*/
var baus  = [0, 3, 6, 3, 3, 2, 6];
var baus1 = [3, 7, 10, 10, 12, 15, 19]
/*Jahreszahl*/
var jzhl  = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
var jzhl1 = ['Wise 2013/14', 'Wise 2014/15', 'Wise 2015/16', 'Wise 2016/17', 'Wise 2017/18', 'Wise 2018/19', "Wise 2019/20"];

const studienanfaenger = document.getElementsByClassName('studienanfängerinnen').item(0);
const studierenden = document.getElementsByClassName('studierenden').item(0);
const line = document.getElementsByClassName('line').item(0);
const bar = document.getElementsByClassName('bar').item(0);
const scatter = document.getElementsByClassName('scatter').item(0);
const doughnut = document.getElementsByClassName('doughnut').item(0);
const radar = document.getElementsByClassName('radar').item(0);
const polarArea = document.getElementsByClassName('polarArea').item(0);

studienanfaenger.addEventListener('click',changestudienanfaenger1)
studierenden.addEventListener('click', changestudierenden1)
line.addEventListener('click', changeline1)
bar.addEventListener('click', changebar1)
scatter.addEventListener('click', changescatter1)

var myChart1 = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(myChart1, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'gesamt',
            data: gmt,
            backgroundColor: color5,
            borderColor: color6,
            borderWidth: 1
        },{
            label: 'männlich',
            data: mlh,
            backgroundColor: color3,
            borderColor: color4,
            borderWidth: 1
        }, {
            label: 'weiblich',
            data: wbl,
            backgroundColor: color1,
            borderColor: color2,
            borderWidth: 1
        }],
        labels: jzhl
    },
    options: {
        title: {
            text: 'Studienanfänger*innen nach Geschlecht',
            display: true
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                    return value + "%"
                }
            },
            scaleLabel: {
                display: true,
                labelString: "Percentage"
            }
        }]
    }
});

function changeline1(){
    const updatetype = 'line';
    chart1.config.type = updatetype;
    chart1.update();
}
function changebar1(){
    const updatetype = 'bar';
    chart1.config.type = updatetype;
    chart1.update();
}
function changescatter1(){
    const updatetype = 'scatter';
    chart1.config.type = updatetype;
    chart1.update();
}

studienanfaenger.addEventListener('click',changestudienanfaenger2)
studierenden.addEventListener('click', changestudierenden2)
line.addEventListener('click', changeline2)
bar.addEventListener('click', changebar2)
scatter.addEventListener('click', changescatter2)

var myChart2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'gesamt',
            data: gmt,
            backgroundColor: color5,
            borderColor: color6,
            borderWidth: 1
        },{
            label: 'deutsch',
            data: deu,
            backgroundColor: color3,
            borderColor: color4,
            borderWidth: 1
        }, {
            label: 'ausländisch',
            data: aus,
            backgroundColor: color1,
            borderColor: color2,
            borderWidth: 1
        }],
        labels: jzhl
    },
    options: {
        title: {
            text: 'Studienanfänger*innen nach Nationalität',
            display: true
        }
    }
});

function changeline2(){
    const updatetype = 'line';
    chart2.config.type = updatetype;
    chart2.update();
}
function changebar2(){
    const updatetype = 'bar';
    chart2.config.type = updatetype;
    chart2.update();
}
function changescatter2(){
    const updatetype = 'scatter';
    chart2.config.type = updatetype;
    chart2.update();
}

studienanfaenger.addEventListener('click',changestudienanfaenger3)
studierenden.addEventListener('click', changestudierenden3)
line.addEventListener('click', changeline3)
bar.addEventListener('click', changebar3)
scatter.addEventListener('click', changescatter3)

var myChart3 = document.getElementById('myChart3').getContext('2d');
var chart3 = new Chart(myChart3, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'gesamt',
            data: gmt,
            backgroundColor: color5,
            borderColor: color6,
            borderWidth: 1
        },{
            label: 'bildungsinländisch',
            data: bin,
            backgroundColor: color3,
            borderColor: color4,
            borderWidth: 1
        }, {
            label: 'bildungsausländisch',
            data: baus,
            backgroundColor: color1,
            borderColor: color2,
            borderWidth: 1
        }],
        labels: jzhl
    },
    options: {
        title: {
            text: "Studienanfänger*innen nach Bildungsherkunft",
            display: true
        }
    }
})

function changeline3(){
    const updatetype = 'line';
    chart3.config.type = updatetype;
    chart3.update();
}
function changebar3(){
    const updatetype = 'bar';
    chart3.config.type = updatetype;
    chart3.update();
}
function changescatter3(){
    const updatetype = 'scatter';
    chart3.config.type = updatetype;
    chart3.update();
}

function changestudierenden1() {
    const updatelabels = jzhl1;
    const updatedata0 = gmt1;
    const updatedata1 = mlh1;
    const updatedata2 = wbl1;
    chart1.data.labels = updatelabels;
    chart1.config.data.datasets[0].data = updatedata0;
    chart1.config.data.datasets[1].data = updatedata1;
    chart1.config.data.datasets[2].data = updatedata2;
    chart1.update();
}

function changestudierenden2() {
    const updatelabels = jzhl1;
    const updatedata0 = gmt1;
    const updatedata1 = deu1;
    const updatedata2 = aus1;
    chart2.data.labels = updatelabels;
    chart2.config.data.datasets[0].data = updatedata0;
    chart2.config.data.datasets[1].data = updatedata1;
    chart2.config.data.datasets[2].data = updatedata2;
    chart2.update();
}

function changestudierenden3() {
    const updatelabels = jzhl1;
    const updatedata0 = gmt1;
    const updatedata1 = bin1;
    const updatedata2 = baus1;
    chart3.data.labels = updatelabels;
    chart3.config.data.datasets[0].data = updatedata0;
    chart3.config.data.datasets[1].data = updatedata1;
    chart3.config.data.datasets[2].data = updatedata2;
    chart3.update();
}


function changestudienanfaenger1() {
    const updatelabels = jzhl;
    const updatedata0 = gmt;
    const updatedata1 = mlh;
    const updatedata2 = wbl;
    chart1.data.labels = updatelabels;
    chart1.config.data.datasets[0].data = updatedata0;
    chart1.config.data.datasets[1].data = updatedata1;
    chart1.config.data.datasets[2].data = updatedata2;
    chart1.update();
}

function changestudienanfaenger2() {
    const updatelabels = jzhl;
    const updatedata0 = gmt;
    const updatedata1 = deu;
    const updatedata2 = aus;
    chart2.data.labels = updatelabels;
    chart2.config.data.datasets[0].data = updatedata0;
    chart2.config.data.datasets[1].data = updatedata1;
    chart2.config.data.datasets[2].data = updatedata2;
    chart2.update();
}

function changestudienanfaenger3() {
    const updatelabels = jzhl;
    const updatedata0 = gmt;
    const updatedata1 = bin;
    const updatedata2 = baus;
    chart3.data.labels = updatelabels;
    chart3.config.data.datasets[0].data = updatedata0;
    chart3.config.data.datasets[1].data = updatedata1;
    chart3.config.data.datasets[2].data = updatedata2;
    chart3.update();
}
