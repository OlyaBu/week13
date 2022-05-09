let name = prompt("Как тебя зовут?");
let message_to = `Привет ${name}`;
alert(message_to);

function plus() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}

function plus() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function multiply() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}

function division() {
    let num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 / num2;

    document.getElementById('out').innerHTML = result;
}

function getNums() {
    let num1, num2;
    num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
  
    num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
  
    return {
      num1,
      num2,
    };
  }
  
  function plus() {
    const nums = getNums();
    const result = nums.num1 + nums.num2;
  
    document.getElementById("out").innerHTML = result;
  }