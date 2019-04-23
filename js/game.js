function fun(div){
    var div = document.getElementsByClassName('test')[0];
    div = div.style.display = 'block';
}
function fun1(div){
    var div = document.getElementsByClassName('test')[0];
    div = div.style.display = 'none';
}

function fun2(a, b, result){
    var a = document.getElementById('inp').value;
    var b = document.getElementById('inp1').value;
    var result = document.getElementById('result');
    result.innerHTML = +a + +b;
}
function fun3(a, b, result){
    var a = document.getElementById('inp').value;
    var b = document.getElementById('inp1').value;
    var result = document.getElementById('result');
    result.innerHTML = a - b;
}
function fun4(a, b, result){
    var a = document.getElementById('inp').value;
    var b = document.getElementById('inp1').value;
    var result = document.getElementById('result');
    result.innerHTML = a * b;
}
function fun5(a, b, result){
    var a = document.getElementById('inp').value;
    var b = document.getElementById('inp1').value;
    var result = document.getElementById('result');
    result.innerHTML = a / b;
}