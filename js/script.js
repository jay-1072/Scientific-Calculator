// let dis = document.getElementById("result");
// let upper = document.getElementById("subtext");
// let marr = [];
// let op = ['+', '-', '*', '/', '%', '.'];
// // let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// let temp = "";
// /*************************************************************************************************************************************************** */

// function display(val) {

//     // if upper screen contains = and operand is entered
//     if (upper.value.slice(-1) === "=" && !op.includes(val)) {
//         upper.value = "";
//         dis.value = val;
//         temp = "";
//     }

//     // 1+2+ now user change operator - then 1+2- will be the result
//     if (op.includes(val) && op.includes(upper.value.slice(-1)) && temp === '') {
//         upper.value = upper.value.slice(0, -1) + val
//     }

//     // if user enters operator before adding any operand
//     if (op.includes(val) && dis.value === '') {
//         upper.value = '0' + val;
//         return;
//     }

//     // if operator comes and dis value is empty & upper has '='
//     if (op.includes(val) && temp === '') {
//         if (upper.value.slice(-1) === '=') {
//             upper.value = dis.value + val;
//         }
//         return;
//     }

//     // if op not contains val (or operand comes)
//     if (!op.includes(val)) {

//         // if(num.includes(val)) {
//         temp += val;
//         dis.value = temp;
//         // }
//     }
//     else if (op.includes(val)) {  // if operator comes
//         temp = "";

//         upper.value += dis.value + val;

//         if (eval(upper.value.slice(0, -1)) !== "") {
//             dis.value = eval(upper.value.slice(0, -1));
//         }

//         // dis.value = dis.value;
//     }
//     // else {
//     //     dis.value += val;
//     // }
// }




// /* find index of operator started */

// function findIndexOfOperator(str) {

//     let indx_of_operator;

//     if (str.value) {
//         for (let i = str.value.length - 1; i >= 0; i--) {
//             if (op.includes(str.value[i])) {
//                 indx_of_operator = i;
//                 break;
//             }
//         }
//     }
//     else {
//         for (let i = str.length - 1; i >= 0; i--) {
//             if (op.includes(str[i])) {
//                 indx_of_operator = i;
//                 break;
//             }
//         }
//     }


//     return indx_of_operator;
// }

// /* find index of operator ended */

// /*************************************************************************************************************************************************** */

// /* power started */

// function calcPow() {
//     if (dis.value === '' && upper.value === '' && dis.value !== 'Infinity') {
//         upper.value = `sqrt(0)`;
//     }
//     else if (dis.value == '0' && dis.value !== 'Infinity') {
//         upper.value = `sqrt(${upper.value})`;
//     }
//     else if (dis.value !== '' && upper.value === '' && dis.value !== 'Infinity') {
//         upper.value = `sqrt(${dis.value})`;
//     }
//     else if (dis.value !== 'Infinity') {
//         upper.value = `sqrt(${upper.value})`;
//     }

//     dis.value = Math.pow(dis.value, 2);
//     if (dis.value === 'Infinity') {
//         return;
//     }
// }

// /* power ended */

// /*************************************************************************************************************************************************** */

// /* factorial started */

// function calcFact(n) {
//     if (n > 200) {
//         return 'Overflow';
//     }
//     else {
//         if (n === 0) {
//             return 1;
//         }
//         else {
//             return n * calcFact(n - 1);
//         }
//     }
// }

// function factorial() {

//     let result;

//     if (dis.value === '' && upper.value === '') {
//         result = calcFact(0);
//     }
//     else {
//         result = calcFact(dis.value);
//     }


//     if (dis.value === '' && upper.value === '' && dis.value !== 'Overflow') {
//         upper.value = `fact(0)`;
//     }
//     else if (dis.value == '0' && dis.value !== 'Overflow') {
//         upper.value = `fact(${upper.value})`;
//     }
//     else if (dis.value !== '' && upper.value === '' && dis.value !== 'Overflow') {
//         upper.value = `fact(${dis.value})`;
//     }
//     else if (dis.value !== 'Overflow') {
//         upper.value = `fact(${upper.value})`;
//     }
//     dis.value = result;

//     if (dis.value === 'Overflow') {
//         return;
//     }
// }

// /* factorial ended */

// /*************************************************************************************************************************************************** */

// /* inverse started */

// function inverse() {
//     if ((dis.value === '' || dis.value === '0') && upper.value === '') {
//         upper.value = '1/(0)';
//         dis.value = 'Cannot divide by zero';
//     }
//     else if (dis.value !== '' && upper.value === '') {
//         upper.value = `1/(${dis.value})`;
//         dis.value = eval(`1/${dis.value}`);
//     }
//     else if (upper.value.slice(-1) === '=') {
//         temp = upper.value;
//         upper.value = `1/(${dis.value})`;
//         dis.value = eval(`1/${dis.value}`);
//     }
//     else if (upper.value.slice(-1) === '+' || upper.value.slice(-1) === '-' || upper.value.slice(-1) === '*' || upper.value.slice(-1) === '/') {
//         upper.value += `1/(${dis.value})`;
//         dis.value = eval(`1/${dis.value}`);
//     }
//     else if (dis.value !== '' && upper.value !== '' && dis.value != 'Cannot divide by zero') {
//         upper.value = `1/(${upper.value})`;
//         dis.value = eval(`1/${dis.value}`);
//     }
// }

// /* inverse ended */

// /*************************************************************************************************************************************************** */

// /* absolute started */

// function absolute() {

//     if ((dis.value === '' || dis.value === '0') && upper.value === '') {
//         upper.value = 'abs(0)';
//         dis.value = Math.abs(0);
//     }
//     else if (dis.value !== '' && upper.value === '') {
//         upper.value = `abs(${dis.value})`;
//         dis.value = Math.abs(dis.value);
//     }
//     else if (upper.value.slice(-1) === '=') {
//         temp = upper.value;
//         upper.value = `abs(${dis.value})`;
//         dis.value = Math.abs(dis.value);
//     }
//     else if (upper.value.slice(-1) === '+' || upper.value.slice(-1) === '-' || upper.value.slice(-1) === '*' || upper.value.slice(-1) === '/') {
//         upper.value += `abs(${dis.value})`;
//         dis.value = eval(`abs(${dis.value})`);
//     }
//     else if (dis.value !== '' && upper.value !== '') {
//         upper.value = `abs(${upper.value})`;
//         dis.value = Math.abs(dis.value);
//     }

// }

// /* absolute ended  */


// /*************************************************************************************************************************************************** */

// /* delete button started */

// function dlt() {
//     // if result screen is empty then upper screen will also be empty
//     if (dis.value == '') {
//         upper.value = '';
//     }
//     dis.value = '';
//     temp = '';
// }

// /* delete button ended */

// /*************************************************************************************************************************************************** */

// /* pop button started */

// function pop() {

//     // if result screen already empty
//     if (temp === '') {
//         return false;
//     }

//     // result screen will set to empty
//     if (dis.value == 'Error!' || dis.value == 'Infinity' || dis.value == 'NaN') {
//         dis.value = '';
//         temp = '';
//     } else {
//         // result's length will be decreased by 1 character
//         dis.value = dis.value.slice(0, dis.value.length - 1);
//         temp = temp.slice(0, temp.length - 1);
//     }
// }

// /* pop button ended */

// /*************************************************************************************************************************************************** */

// /* answer button started */

// function answer() {
//     try {
//         /* if '=' is called repeatedly then append result to upper screen with operator already used & evaluate expression then display result  */
//         if (upper.value.slice(-1) === "=") {

//             // console.log(upper.value);

//             // check for sqrt
//             if (upper.value.slice(0, 4) == 'sqrt') {
//                 upper.value = dis.value + '=';
//                 return;
//             }
//             else if (upper.value.slice(0, 4) == 'fact') { // check for fact
//                 upper.value = dis.value + '=';
//                 return;
//             }
//             else if (upper.value.slice(0, 3) === 'abs') {
//                 if (temp.slice(-1) === '=') {
//                     let indx_of_operator = findIndexOfOperator(temp);
//                     upper.value = dis.value + temp.slice(indx_of_operator);

//                     dis.value = eval(`${dis.value}${temp.slice(indx_of_operator, -1)}`);
//                 }
//                 else {
//                     upper.value = dis.value + "=";
//                 }

//                 return;

//             }
//             else if (upper.value.slice(1, 2) === '/' && upper.value.slice(2, 3) === '(') {
//                 upper.value = dis.value + '=';
//                 return;
//             }
//             else if (upper.value === (dis.value + '=')) {
//                 return;
//             }
//             else {
//                 let indx_of_operator = findIndexOfOperator(upper);
//                 upper.value = dis.value + upper.value.slice(indx_of_operator);
//                 dis.value = eval(upper.value.slice(0, -1));
//                 return;
//             }
//         }
//         else {
//             /* if first time '=' is pressed then simply append '=' to upper value and evaluate expression in result screen */
//             if (upper.value.slice(0, 4) == 'sqrt' && dis.value !== 'Infinity') {
//                 upper.value += '=';
//                 return;
//             }
//             else if (upper.value.slice(0, 4) == 'fact' && dis.value !== 'Overflow') {
//                 upper.value += '=';
//                 return;
//             }
//             else if (dis.value === 'Infinity' || dis.value === 'Overflow' || dis.value === 'Cannot divide by zero') {
//                 upper.value = '';
//                 dis.value = '';
//                 return;
//             }
//             else if (upper.value.slice(1, 2) === '/' && upper.value.slice(2, 3) === '(') {   // operation done before inverse

//                 upper.value += '=';
//                 return;
//             }
//             else if (upper.value.slice(0, 3) === 'abs') {

//                 console.log(temp);

//                 if (temp.slice(-1) !== '=') { 
//                     upper.value += '=';
//                 }
//                 else if (temp.slice(-1) === '=') { // operation done before abs
//                     let indx_of_operator = findIndexOfOperator(temp);
//                     upper.value += temp.slice(indx_of_operator);
//                 }

//                 return;
//             }
//             else {
//                 upper.value += dis.value + '=';
//                 dis.value = '';
//                 let x = upper.value.slice(0, -1);
//                 var y = eval(x);
//             }
//         }
//     } catch {
//         y = 'Error!';
//     }

//     let cb = document.getElementById('btn-check');
//     if (cb.checked == true) {
//         dis.value = y.toExponential();
//     } else {
//         // after setting result screen value temp should be ""
//         dis.value = y;
//         temp = "";
//     }
// }

// /* answer button ended */



// ************************************ DECLARATION *********************************************
let dis = document.getElementById("result");
let upper = document.getElementById("subtext");
let marr = [];
let op = ['+', '-', '*', '/', '%', '.'];
// **********************************************************************************************



// ****************************************** DISPLAY INTO SCREEN **********************************
function display(val) {
    let oldop = dis.value.slice(-1);
    if(op.includes(val) && op.includes(oldop)) {
            dis.value = dis.value.slice(0, -1);
            dis.value += val;
    } else {
        dis.value += val;
    }
}
// **********************************************************************************************



    // if operator comes and dis value is empty & upper has '='
    if (op.includes(val) && temp === '') {
        if (upper.value.slice(-1) === '=') {
            upper.value = dis.value + val;
        }
        else if(op.includes(upper.value.slice(-1))) {
            upper.value = upper.value.slice(0, -1) + val;
        }
        else {
            upper.value += val;
        }
        return;
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
    else if (dis.value == '0' && dis.value !== 'Infinity') {
        upper.value = `sqrt(${upper.value})`;
    }
    else if (dis.value !== '' && upper.value === '' && dis.value !== 'Infinity') {
        upper.value = `sqrt(${dis.value})`;
    }
}

    dis.value = Math.pow(dis.value, 2);
    if (dis.value === 'Infinity') {
        return;
    }
}

/* power ended */

/*************************************************************************************************************************************************** */

/* factorial started */

function calcFact(n) {
    if (n > 200) {
        return 'Overflow';
    }
    else {
        if (n === 0) {
            return 1;
        }
        else {
            return n * calcFact(n - 1);
        }
    }
}

function factorial() {

    let result;

    if (dis.value === '' && upper.value === '') {
        result = calcFact(0);
    }
}


    if (dis.value === '' && upper.value === '' && dis.value !== 'Overflow') {
        upper.value = `fact(0)`;
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

    if (dis.value === 'Overflow') {
        return;
    }
}

/* factorial ended */

function coti() {
    upper.value = 'cot-1('+ dis.value + ')';
    dis.value = Math.atan(1 / dis.value);
}


// hyp INSIDE TRIGOMOMETRY
function sinh() {
    upper.value = 'sinh('+ dis.value + ')';
    dis.value = Math.sinh(dis.value);
        temp = "";
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



// ********************************** INSIDE FUNCTION *******************************************
function absolute() {
    upper.value = 'abs('+ dis.value + ')';
    dis.value = Math.abs(dis.value);
        temp = "";
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


/*************************************************************************************************************************************************** */

/* square root started */

function squareRoot() {

    if ((dis.value === '' || dis.value === '0') && upper.value === '') {
        upper.value = '√(0)';
        dis.value = Math.sqrt(0);
    }
    else if (dis.value !== '' && upper.value === '') {
        upper.value = `√(${dis.value})`;
        dis.value = Math.sqrt(dis.value);
        temp = "";
    }
    else if (upper.value.slice(-1) === '=') {
        temp = upper.value;
        upper.value = `√(${dis.value})`;
        dis.value = Math.sqrt(dis.value);
    }
    else if (upper.value.slice(-1) === '+' || upper.value.slice(-1) === '-' || upper.value.slice(-1) === '*' || upper.value.slice(-1) === '/') {
        upper.value += `√(${dis.value})`;
        dis.value = Math.sqrt(dis.value);
    }
    else if (dis.value !== '' && upper.value !== '') {
        upper.value = `√(${upper.value})`;
        dis.value = Math.sqrt(dis.value);
    }
}

/* square root ended */



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



// ****************************************** ROW: 1 ********************************************
function dlt() {
    if(dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}

function pop() {
    if(dis.value=='Error!' || dis.value=='Infinity' || dis.value=='NaN') {
        dis.value = '';
    } else {
        dis.value = dis.value.slice(0, dis.value.length-1);
    }
}
// **********************************************************************************************



// ****************************************** ROW: 2 ********************************************
function sqr() {
    if(document.getElementById('sqr').innerHTML == 'x<sup>3</sup>') {
        upper.value = 'cube('+ dis.value + ')';
        dis.value = Math.pow(dis.value, 3);
    } else {
        upper.value = 'sqr('+ dis.value + ')';
        dis.value = Math.pow(dis.value, 2);   
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
            else if (upper.value.slice(0, 1) === '√') {
                if (temp.slice(-1) === '=') {
                    let indx_of_operator = findIndexOfOperator(temp);
                    upper.value = dis.value + temp.slice(indx_of_operator);

                    dis.value = eval(`${dis.value}${temp.slice(indx_of_operator, -1)}`);
                }
                else {
                    upper.value = dis.value + "=";
                }

                return;

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


                if (temp.slice(-1) !== '=') { 
                    upper.value += '=';
                }
                else if (temp.slice(-1) === '=') { // operation done before abs
                    let indx_of_operator = findIndexOfOperator(temp);
                    upper.value += temp.slice(indx_of_operator);
                }

                return;
            }
            else if (upper.value.slice(0, 1) === '√') {

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
    if(cb.checked == true) {
        dis.value = y.toExponential();
    } else {
        dis.value = y;
    }
}
// **********************************************************************************************
