var Expression = "";



function AddExp(i) {


    if (Expression == '0') {
        Expression = '';
    }


    Expression = Expression + i;
    document.getElementById('screen').innerHTML = Expression;
}

function allClear() {
    Expression = '0';
    document.getElementById('screen').innerHTML = Expression;

}


function clear_LastNumber() {
    Expression = Expression.slice(0, -1);
    document.getElementById('screen').innerHTML = Expression;

}

function calculateExp() {

    var Ans = eval(Expression);

    if (Number.isInteger(Ans) == true) {
        document.getElementById('screen').innerHTML = Ans;
    }
    else {

        Ans = Ans.toFixed(3);
        document.getElementById('screen').innerHTML = Ans;

       
    }

}


var a = 10;
console.log(a);
a = a.toFixed(4);
console.log(a);
