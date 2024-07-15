let length;
let width;

function calculateArea() {
length = parseFloat(document.getElementById('length').value);
width = parseFloat(document.getElementById('width').value);

let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let amount1;
let amount2;
let amount3;

function groceryTracker(){
    amount1 = parseFloat(document.getElementById('amount1').value);
    amount2 = parseFloat(document.getElementById('amount2').value);
    amount3 = parseFloat(document.getElementById('amount3').value);

    let totalamount = amount1 + amount2 + amount3;
    document.getElementById('result2').innerText = `The total amount spent on the grocery purchase is: $${totalamount}`;
}
    

