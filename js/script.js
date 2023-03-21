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

    // if user enters operator before adding any operand
    if (op.includes(val) && dis.value === '') {
        upper.value = '0' + val;
        return;
    }

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

    // if op not contains val (or operand comes)
    if (!op.includes(val)) {

        // if(num.includes(val)) {
        temp += val;
        dis.value = temp;
        // }
    }
    else if (op.includes(val)) {  // if operator comes
        temp = "";

        upper.value += dis.value + val;

        if (eval(upper.value.slice(0, -1)) !== "") {
            dis.value = eval(upper.value.slice(0, -1));
        }

        // dis.value = dis.value;
    }
    // else {
    //     dis.value += val;
    // }
}




/* find index of operator started */

function findIndexOfOperator(str) {

    let indx_of_operator;

    if (str.value) {
        for (let i = str.value.length - 1; i >= 0; i--) {
            if (op.includes(str.value[i])) {
                indx_of_operator = i;
                break;
            }
        }
    }
    else {
        for (let i = str.length - 1; i >= 0; i--) {
            if (op.includes(str[i])) {
                indx_of_operator = i;
                break;
            }
        }
    }


    return indx_of_operator;
}

/* find index of operator ended */

/*************************************************************************************************************************************************** */

/* power started */

function calcPow() {
    if (dis.value === '' && upper.value === '' && dis.value !== 'Infinity') {
        upper.value = `sqrt(0)`;
    }
    else if (dis.value == '0' && dis.value !== 'Infinity') {
        upper.value = `sqrt(${upper.value})`;
    }
    else if (dis.value !== '' && upper.value === '' && dis.value !== 'Infinity') {
        upper.value = `sqrt(${dis.value})`;
    }
    else if (dis.value !== 'Infinity') {
        upper.value = `sqrt(${upper.value})`;
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
    else {
        result = calcFact(dis.value);
    }


    if (dis.value === '' && upper.value === '' && dis.value !== 'Overflow') {
        upper.value = `fact(0)`;
    }
    else if (dis.value == '0' && dis.value !== 'Overflow') {
        upper.value = `fact(${upper.value})`;
    }
    else if (dis.value !== '' && upper.value === '' && dis.value !== 'Overflow') {
        upper.value = `fact(${dis.value})`;
    }
    else if (dis.value !== 'Overflow') {
        upper.value = `fact(${upper.value})`;
    }
    dis.value = result;

    if (dis.value === 'Overflow') {
        return;
    }
}

/* factorial ended */

/*************************************************************************************************************************************************** */

/* inverse started */

function inverse() {
    if ((dis.value === '' || dis.value === '0') && upper.value === '') {
        upper.value = '1/(0)';
        dis.value = 'Cannot divide by zero';
    }
    else if (dis.value !== '' && upper.value === '') {
        upper.value = `1/(${dis.value})`;
        dis.value = eval(`1/${dis.value}`);
        temp = "";
    }
    else if (upper.value.slice(-1) === '=') {
        temp = upper.value;
        upper.value = `1/(${dis.value})`;
        dis.value = eval(`1/${dis.value}`);
    }
    else if (upper.value.slice(-1) === '+' || upper.value.slice(-1) === '-' || upper.value.slice(-1) === '*' || upper.value.slice(-1) === '/') {
        upper.value += `1/(${dis.value})`;
        dis.value = eval(`1/${dis.value}`);
    }
    else if (dis.value !== '' && upper.value !== '' && dis.value != 'Cannot divide by zero') {
        upper.value = `1/(${upper.value})`;
        dis.value = eval(`1/${dis.value}`);
    }
}

/* inverse ended */

/*************************************************************************************************************************************************** */

/* absolute started */

function absolute() {

    if ((dis.value === '' || dis.value === '0') && upper.value === '') {
        upper.value = 'abs(0)';
        dis.value = Math.abs(0);
    }
    else if (dis.value !== '' && upper.value === '') {
        upper.value = `abs(${dis.value})`;
        dis.value = Math.abs(dis.value);
        temp = "";
    }
    else if (upper.value.slice(-1) === '=') {
        temp = upper.value;
        upper.value = `abs(${dis.value})`;
        dis.value = Math.abs(dis.value);
    }
    else if (upper.value.slice(-1) === '+' || upper.value.slice(-1) === '-' || upper.value.slice(-1) === '*' || upper.value.slice(-1) === '/') {
        upper.value += `abs(${dis.value})`;
        dis.value = eval(`abs(${dis.value})`);
    }
    else if (dis.value !== '' && upper.value !== '') {
        upper.value = `abs(${upper.value})`;
        dis.value = Math.abs(dis.value);
    }

}

/* absolute ended  */

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



/*************************************************************************************************************************************************** */

/* delete button started */

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

/* pop button ended */

/*************************************************************************************************************************************************** */

/* answer button started */

function answer() {
    try {
        /* if '=' is called repeatedly then append result to upper screen with operator already used & evaluate expression then display result  */
        if (upper.value.slice(-1) === "=") {

            // console.log(upper.value);

            // check for sqrt
            if (upper.value.slice(0, 4) == 'sqrt') {
                upper.value = dis.value + '=';
                return;
            }
            else if (upper.value.slice(0, 4) == 'fact') { // check for fact
                upper.value = dis.value + '=';
                return;
            }
            else if (upper.value.slice(0, 3) === 'abs') {
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
            else if (upper.value.slice(1, 2) === '/' && upper.value.slice(2, 3) === '(') {
                upper.value = dis.value + '=';
                return;
            }
            else if (upper.value === (dis.value + '=')) {
                return;
            }
            else {
                let indx_of_operator = findIndexOfOperator(upper);
                upper.value = dis.value + upper.value.slice(indx_of_operator);
                dis.value = eval(upper.value.slice(0, -1));
                return;
            }
        }
        else {
            /* if first time '=' is pressed then simply append '=' to upper value and evaluate expression in result screen */
            if (upper.value.slice(0, 4) == 'sqrt' && dis.value !== 'Infinity') {
                upper.value += '=';
                return;
            }
            else if (upper.value.slice(0, 4) == 'fact' && dis.value !== 'Overflow') {
                upper.value += '=';
                return;
            }
            else if (dis.value === 'Infinity' || dis.value === 'Overflow' || dis.value === 'Cannot divide by zero') {
                upper.value = '';
                dis.value = '';
                return;
            }
            else if (upper.value.slice(1, 2) === '/' && upper.value.slice(2, 3) === '(') {   // operation done before inverse

                upper.value += '=';
                return;
            }
            else if (upper.value.slice(0, 3) === 'abs') {

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

                if (temp.slice(-1) !== '=') { 
                    upper.value += '=';
                }
                else if (temp.slice(-1) === '=') { // operation done before abs
                    let indx_of_operator = findIndexOfOperator(temp);
                    upper.value += temp.slice(indx_of_operator);
                }

                return;
            }
            else {
                upper.value += dis.value + '=';
                dis.value = '';
                let x = upper.value.slice(0, -1);
                var y = eval(x);
            }
        }
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

/* answer button ended */