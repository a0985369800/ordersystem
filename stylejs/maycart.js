// JavaScript Document
/*品項一*/
var itemPrice = 45;
document.getElementById('itemPriceId').textContent = itemPrice;
var itemNumber = parseInt(document.getElementById('itemNumberId').value);
var total1 = itemPrice*itemNumber;
document.getElementById('itemtotalId').textContent = total1;

document.getElementById('countId').onclick = function(){
	var itemPrice = 45;
	document.getElementById('itemPriceId').textContent = itemPrice;
	var itemNumber = parseInt(document.getElementById('itemNumberId').value);
	document.getElementById('itemtotalId').textContent = itemPrice*itemNumber;
}
/*以上用迴圈跑，下面就可刪除*/
/*品項二*/
var itemPrice2 = 30;
document.getElementById('itemPriceId2').textContent = itemPrice2;
var itemNumber2 = parseInt(document.getElementById('itemNumberId2').value);
var total2 = itemPrice2*itemNumber2;
document.getElementById('itemtotalId2').textContent = total2;

document.getElementById('countId2').onclick = function(){
	var itemPrice2 = 30;
	document.getElementById('itemPriceId2').textContent = itemPrice;
	var itemNumber2 = parseInt(document.getElementById('itemNumberId2').value);
	document.getElementById('itemtotalId2').textContent = itemPrice2*itemNumber2;
}
/*品項三*/
var itemPrice3 = 50;
document.getElementById('itemPriceId3').textContent = itemPrice3;
var itemNumber3 = parseInt(document.getElementById('itemNumberId3').value);
var total3 = itemPrice3*itemNumber3;
document.getElementById('itemtotalId3').textContent = total3;

document.getElementById('countId3').onclick = function(){
	var itemPrice3 = 50;
	document.getElementById('itemPriceId3').textContent = itemPrice3;
	var itemNumber3 = parseInt(document.getElementById('itemNumberId3').value);
	document.getElementById('itemtotalId3').textContent = itemPrice3*itemNumber3;
}
/*品項四*/
var itemPrice4 = 60;
document.getElementById('itemPriceId4').textContent = itemPrice4;
var itemNumber4 = parseInt(document.getElementById('itemNumberId4').value);
var total4 = itemPrice4*itemNumber4;
document.getElementById('itemtotalId4').textContent = total4;

document.getElementById('countId4').onclick = function(){
	var itemPrice4 = 60;
	document.getElementById('itemPriceId4').textContent = itemPrice4;
	var itemNumber4 = parseInt(document.getElementById('itemNumberId4').value);
	document.getElementById('itemtotalId4').textContent = itemPrice4*itemNumber4;
}
