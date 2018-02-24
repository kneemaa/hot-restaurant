const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const queryPath = "https://localhost:"

var name = $("#name").val();
var phone = $("#phone").val();
var email = $("#email").val();
// var uid = $(".uid").val();

function Table (name,phone,email) {
	this.name = name;
	this.phone = phone;
	this.email = email;	
}

let openTables = []; //5 max tables
let waitList = [];


const makeReservation = (name, phone, email, uid) => {
	var reservation = new Table(name,phone,email,uid);
	if(openTables.length < 5){
		openTables.push(reservation);
	} else {
		waitList.push(reservation);
	}
	
}

$("#make-reservation").on("click", function() {
	makeReservation(name, phone, email);
	console.log(reservation);
	$.ajax({
		url: queryPath + PORT,
		method: "POST",
		data: JSON.stringify(reservation)
		
	}).done(function(response) {
		console.log(response);
		})

// makeReservation("nema","23","23","55");
// makeReservation("devon","23","23","55");
// makeReservation("jeremy","23","23","098");
// makeReservation("devin","23","dfg","55");
// makeReservation("devan","asd","23","l");
// makeReservation("dayvin","23","23","55");
// makeReservation("fil","23","23","55");


console.log(openTables);
console.log("\n\n\n");
console.log(waitList);
