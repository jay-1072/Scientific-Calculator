let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let marr = [];
let op = ['+', '-', '*', '/', '%', '.'];
// let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let temp = "";
/*************************************************************************************************************************************************** */

function display(val) {

    // if upper screen contains = and operand is entered
    if (upper.value.slice(-1) === "=" && !op.includes(val)) {
        upper.value = "";
        dis.value = val;
        temp = "";
    }

    // 1+2+ now user change operator - then 1+2- will be the result
    if (op.includes(val) && op.includes(upper.value.slice(-1)) && temp === '') {
        upper.value = upper.value.slice(0, -1) + val
    }



// ************************************ FIRST ROW ************************************************
function textChange() {
    let btntxt = document.getElementById("btntxt").innerHTML;
    if(btntxt == 'DEG')
        document.getElementById("btntxt").innerHTML = 'RAD';
    else
        document.getElementById("btntxt").innerHTML = 'DEG';
}

function fe() {
    var cb = document.getElementById('btn-check');
    if(cb.checked == true) {
        if(dis.value!='') {
            const fE = parseFloat(dis.value);
            dis.value = fE.toExponential();
        } else {
            const fE = 0;
            dis.value = fE.toExponential();
        }
    }
}
// ************************************************************************************************



// *************************************** MEMORY FUNCTIONS ***************************************
function ms() {
    if(dis.value == '') {
        marr.push(0);
    }
    if(marr[marr.length-1] != dis.value) {
        marr.push(parseFloat(dis.value));
    }
    document.querySelector('#mc').disabled = false;
    document.querySelector('#mr').disabled = false;
    document.querySelector('#m').disabled = false;
    console.log(marr);
}

function mr() {
    dis.value = marr[marr.length-1];
    console.log(marr);
}

function mc() {
    marr.splice(0, marr.length);
    document.querySelector('#mc').disabled = true;
    document.querySelector('#mr').disabled = true;
    document.querySelector('#m').disabled = true;
    console.log(marr);
}

function mplus() {
    marr[marr.length-1] += parseFloat(dis.value);
    console.log(marr);
}

function mminus() {
    marr[marr.length-1] -= parseFloat(dis.value);
    console.log(marr);
}

function m() {
    let html = "<table>";
    for (var i = marr.length-1; i >= 0; i--) {
        html+="<tr>";
        html+="<td>"+marr[i]+"</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById('memory').innerHTML = html;
}
// ************************************************************************************



// *********************************** TRIGONOMETRY ***********************************************
document.getElementById("second").addEventListener("click", function(e) {
    e.stopPropagation();
});
document.getElementById("second1").addEventListener("click", function(e) {
    e.stopPropagation();
});

// INSIDE TRIGONOMETRY
function sin() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sin('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.sin(dis.value);
    } else {
        dis.value = Math.sin(dis.value*(Math.PI/180));
    }
}

function cos() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cos('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.cos(dis.value);
    } else {
        dis.value = Math.cos(dis.value*(Math.PI/180));
    }
}

function tan() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'tan('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = Math.tan(dis.value);
    } else {
        dis.value = Math.tan(dis.value*(Math.PI/180));
    }
}

function sec() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'sec('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.cos(dis.value);
    } else {
        dis.value = 1 / Math.cos(dis.value*(Math.PI/180));   
    }
}

function cosec() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cosec('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.sin(dis.value);
    } else {
        dis.value = 1 / Math.sin(dis.value*(Math.PI/180));   
    }
}

function cot() {
    let mode = document.getElementById("btntxt").innerHTML;
    upper.value = 'cot('+ dis.value + ')';
    if(mode == 'RAD') {
        dis.value = 1 / Math.tan(dis.value);
    } else {
        dis.value = 1 / Math.tan(dis.value*(Math.PI/180));   
    }
}


// 2nd INSIDE TRIGONOMETRY
function sini() {
    upper.value = 'sin-1('+ dis.value + ')';
    if(dis.value>=-1 && dis.value<=1)
        dis.value = Math.asin(dis.value);
    else
        dis.value = "Enter value between -1 and 1";
}

function cosi() {
    upper.value = 'cos-1('+ dis.value + ')';
    if(dis.value>=-1 && dis.value<=1)
        dis.value = Math.acos(dis.value);
    else
        dis.value = "Enter value between -1 and 1";
}

function tani() {
    upper.value = 'tan-1('+ dis.value + ')';
    if(dis.value>=-1 && dis.value<=1)
        dis.value = Math.atan(dis.value);
    else
        dis.value = "Enter value between -1 and 1";
}

function seci() {
    upper.value = 'sec-1('+ dis.value + ')';
    dis.value = Math.acos(1 / dis.value);
}

function coseci() {
    upper.value = 'cosec-1('+ dis.value + ')';
    dis.value = Math.asin(1 / dis.value);
}

function coti() {
    upper.value = 'cot-1('+ dis.value + ')';
    dis.value = Math.atan(1 / dis.value);
}


// hyp INSIDE TRIGOMOMETRY
function sinh() {
    upper.value = 'sinh('+ dis.value + ')';
    dis.value = Math.sinh(dis.value);
}

function cosh() {
    upper.value = 'cosh('+ dis.value + ')';
    dis.value = Math.cosh(dis.value);
}

function tanh() {
    upper.value = 'tanh('+ dis.value + ')';
    dis.value = Math.tanh(dis.value);
}

function sech() {
    upper.value = 'sech('+ dis.value + ')';
    dis.value = 1 / Math.cosh(dis.value);
}

function cosech() {
    upper.value = 'cosech('+ dis.value + ')';
    dis.value = 1 / Math.sinh(dis.value);
}

function coth() {
    upper.value = 'coth('+ dis.value + ')';
    dis.value = 1 / Math.tanh(dis.value);
}
// **********************************************************************************************



function absolute() {
    upper.value = 'abs('+ dis.value + ')';
    dis.value = Math.abs(dis.value);
}

function ceil() {
    upper.value = 'ceil('+ dis.value + ')';
    dis.value = Math.ceil(dis.value);
}

function floor() {
    upper.value = 'floor('+ dis.value + ')';
    dis.value = Math.floor(dis.value);
}

function rand() {
    dis.value = Math.random(dis.value);
}

function dms() {
    upper.value = "dms("+ dis.value +")";
    let degree = Math.floor(dis.value);
    let minutes = ((dis.value - Math.floor(dis.value)) * 60.0);
    let seconds = (minutes - Math.floor(minutes)) * 60.0;
    dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
}

function deg() {}
// **********************************************************************************************



// ************************************ INSIDE 2nd **********************************************
var btnCount = 1;
function changeBtn() {
    if(btnCount%2===0) {
        document.getElementById('sqr').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '2&#x221A;x';
        document.getElementById('expo').innerHTML = 'x<sup>y</sup>';
        document.getElementById('tenpow').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('ln').innerHTML = 'ln';
        btnCount++;
    } else {
        document.getElementById('sqr').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '3&#x221A;x';
        document.getElementById('expo').innerHTML = 'y&#x221A;x';
        document.getElementById('tenpow').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>y</sub>x';
        document.getElementById('ln').innerHTML = 'e<sup>x</sup>';
        btnCount++;
    }
}
// **********************************************************************************************



function dlt() {
    // if result screen is empty then upper screen will also be empty
    if (dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
    temp = '';
}

/* delete button ended */

/*************************************************************************************************************************************************** */

/* pop button started */

function pop() {

    // if result screen already empty
    if (temp === '') {
        return false;
    }

    // result screen will set to empty
    if (dis.value == 'Error!' || dis.value == 'Infinity' || dis.value == 'NaN') {
        dis.value = '';
        temp = '';
    } else {
        // result's length will be decreased by 1 character
        dis.value = dis.value.slice(0, dis.value.length - 1);
        temp = temp.slice(0, temp.length - 1);
    }
}

function inverse() {
    upper.value = '1/('+ dis.value + ')';
    dis.value = 1 / dis.value;   
}

function expo() {
    if(dis.value!='') {
        const fE = parseFloat(dis.value);
        dis.value = fE.toExponential();
    } else {
        const fE = 0;
        dis.value = fE.toExponential();
    }
}
// **********************************************************************************************



// ****************************************** ROW: 3 ********************************************
function sqroot() {
    if(document.getElementById('root').innerHTML == '2√x') {
        upper.value = '√('+ dis.value + ')';
        dis.value = Math.sqrt(dis.value);
    } else {
        upper.value = 'cuberoot('+ dis.value + ')';
        dis.value = Math.pow(dis.value, 1/3);
    }
}

function factorial() {
    upper.value = 'fact('+ dis.value + ')';
    let fact = 1;
    if(dis.value == 0 || dis.value == 1) {
        fact = 1;
    } else {
        for (let i = 1; i <= dis.value; i++) {
            fact *= i;
        }
    }
    dis.value = fact;
}
// **********************************************************************************************



// ****************************************** ROW: 4 ********************************************
function xtoy() {
    if(document.getElementById('expo').innerHTML == 'x<sup>y</sup>') {
        dis.value += '**';
    } else {
        dis.value = dis.value + "**(1/";
    }
}
// **********************************************************************************************



// ****************************************** ROW: 5 ********************************************
function tentox() {
    if(document.getElementById('tenpow').innerHTML == '10<sup>x</sup>') {
        upper.value = '10^('+ dis.value + ')';
        dis.value = Math.pow(10, dis.value);
    } else {
        upper.value = '2^('+ dis.value + ')';
        dis.value = Math.pow(2, dis.value);
    }

}
// **********************************************************************************************



// ****************************************** ROW: 6 ********************************************
function log() {
    upper.value = 'log('+ dis.value + ')';
    dis.value = Math.log10(dis.value);
}
// **********************************************************************************************



// ****************************************** ROW: 7 ********************************************
function ln() {
    if(document.getElementById('ln').innerHTML == 'ln') {
        upper.value = 'ln('+ dis.value + ')';
        dis.value = Math.log(dis.value);
    } else {
        upper.value = 'e^(' + dis.value + ')';
        dis.value = Math.pow(Math.E, dis.value);
    }
}

function plusminus() {
    if(dis.value>0)
        dis.value = 0-dis.value;
    else
        dis.value = Math.abs(dis.value);
}

function answer() {
    try {
        upper.value = dis.value + '=';
        dis.value = '';
        let x = upper.value.slice(0,-1);
        var y = eval(x);
    } catch {
        y = 'Error!';
    }

    let cb = document.getElementById('btn-check');
    if (cb.checked == true) {
        dis.value = y.toExponential();
    } else {
        // after setting result screen value temp should be ""
        dis.value = y;
        temp = "";
    }
}
}
