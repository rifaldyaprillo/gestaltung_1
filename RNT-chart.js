studienanfaenger.addEventListener('click',changestudienanfaenger4)
studierenden.addEventListener('click', changestudierenden4)
doughnut.addEventListener('click', changedoughnut4)
radar.addEventListener('click', changeradar4)
polarArea.addEventListener('click', changepolarArea4)

var myChart4 = document.getElementById('myChart4').getContext('2d');
var chart4 = new Chart(myChart4, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'gesamt',
            data: gmt1,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        },{
            label: 'männlich',
            data: mlh1,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        }, {
            label: 'weiblich',
            data: wbl1,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        }],
        labels: jzhl
    },
    options: {
        title: {
            text: 'Studienanfänger*innen nach Geschlecht',
            display: true
        }
    }
});

function changedoughnut4(){
    const updatetype = 'doughnut';
    chart4.config.type = updatetype;
    chart4.update();
}
function changeradar4(){
    const updatetype = 'radar';
    chart4.config.type = updatetype;
    chart4.update();
}
function changepolarArea4(){
    const updatetype = 'polarArea';
    chart4.config.type = updatetype;
    chart4.update();
}

studienanfaenger.addEventListener('click',changestudienanfaenger5)
studierenden.addEventListener('click', changestudierenden5)
doughnut.addEventListener('click', changedoughnut5)
radar.addEventListener('click', changeradar5)
polarArea.addEventListener('click', changepolarArea5)

var myChart5 = document.getElementById('myChart5').getContext('2d');
var chart5 = new Chart(myChart5, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'gesamt',
            data: gmt,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        },{
            label: 'deutsch',
            data: deu,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        }, {
            label: 'ausländisch',
            data: aus,
            backgroundColor: color8,
            borderColor: color7,
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

function changedoughnut5(){
    const updatetype = 'doughnut';
    chart5.config.type = updatetype;
    chart5.update();
}
function changeradar5(){
    const updatetype = 'radar';
    chart5.config.type = updatetype;
    chart5.update();
}
function changepolarArea5(){
    const updatetype = 'polarArea';
    chart5.config.type = updatetype;
    chart5.update();
}

studienanfaenger.addEventListener('click',changestudienanfaenger6)
studierenden.addEventListener('click', changestudierenden6)
doughnut.addEventListener('click', changedoughnut6)
radar.addEventListener('click', changeradar6)
polarArea.addEventListener('click', changepolarArea6)

var myChart6 = document.getElementById('myChart6').getContext('2d');
var chart6 = new Chart(myChart6, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'gesamt',
            data: gmt,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        },{
            label: 'bildungsinländisch',
            data: bin,
            backgroundColor: color8,
            borderColor: color7,
            borderWidth: 1
        }, {
            label: 'bildungsausländisch',
            data: baus,
            backgroundColor: color8,
            borderColor: color7,
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

function changedoughnut6(){
    const updatetype = 'doughnut';
    chart6.config.type = updatetype;
    chart6.update();
}
function changeradar6(){
    const updatetype = 'radar';
    chart6.config.type = updatetype;
    chart6.update();
}
function changepolarArea6(){
    const updatetype = 'polarArea';
    chart6.config.type = updatetype;
    chart6.update();
}

function changestudierenden4() {
    const updatelabels = jzhl1;
    const updatedata0 = gmt1;
    const updatedata1 = mlh1;
    const updatedata2 = wbl1;
    chart4.data.labels = updatelabels;
    chart4.config.data.datasets[0].data = updatedata0;
    chart4.config.data.datasets[1].data = updatedata1;
    chart4.config.data.datasets[2].data = updatedata2;
    chart4.update();
}

function changestudierenden5() {
    const updatelabels = jzhl1;
    const updatedata0 = gmt1;
    const updatedata1 = deu1;
    const updatedata2 = aus1;
    chart5.data.labels = updatelabels;
    chart5.config.data.datasets[0].data = updatedata0;
    chart5.config.data.datasets[1].data = updatedata1;
    chart5.config.data.datasets[2].data = updatedata2;
    chart5.update();
}

function changestudierenden6() {
    const updatelabels = jzhl1;
    const updatedata0 = gmt1;
    const updatedata1 = bin1;
    const updatedata2 = baus1;
    chart6.data.labels = updatelabels;
    chart6.config.data.datasets[0].data = updatedata0;
    chart6.config.data.datasets[1].data = updatedata1;
    chart6.config.data.datasets[2].data = updatedata2;
    chart6.update();
}


function changestudienanfaenger4() {
    const updatelabels = jzhl;
    const updatedata0 = gmt;
    const updatedata1 = mlh;
    const updatedata2 = wbl;
    chart4.data.labels = updatelabels;
    chart4.config.data.datasets[0].data = updatedata0;
    chart4.config.data.datasets[1].data = updatedata1;
    chart4.config.data.datasets[2].data = updatedata2;
    chart4.update();
}

function changestudienanfaenger5() {
    const updatelabels = jzhl;
    const updatedata0 = gmt;
    const updatedata1 = deu;
    const updatedata2 = aus;
    chart5.data.labels = updatelabels;
    chart5.config.data.datasets[0].data = updatedata0;
    chart5.config.data.datasets[1].data = updatedata1;
    chart5.config.data.datasets[2].data = updatedata2;
    chart5.update();
}

function changestudienanfaenger6() {
    const updatelabels = jzhl;
    const updatedata0 = gmt;
    const updatedata1 = bin;
    const updatedata2 = baus;
    chart6.data.labels = updatelabels;
    chart6.config.data.datasets[0].data = updatedata0;
    chart6.config.data.datasets[1].data = updatedata1;
    chart6.config.data.datasets[2].data = updatedata2;
    chart6.update();
}