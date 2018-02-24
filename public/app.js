function Table (name,phone,email,uid) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.uid = uid;
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

makeReservation("nema","23","23","55");
makeReservation("devon","23","23","55");
makeReservation("jeremy","23","23","098");
makeReservation("devin","23","dfg","55");
makeReservation("devan","asd","23","l");
makeReservation("dayvin","23","23","55");
makeReservation("fil","23","23","55");


console.log(openTables);
console.log("\n\n\n");
console.log(waitList);
