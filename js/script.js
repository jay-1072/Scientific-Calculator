let dis = document.getElementById("result");
let upper = document.getElementById("subtext");

/* delete button started */

function dlt() {
    if(dis.value == '') {
        upper.value = '';
    }
    dis.value = '';
}

/* delete button ended */
