new Vue ({
	el: '#taskList',
	data: {
		title: 'to do list',
		tasks: [
		]
	},
	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: ''
			});
      this.tasks.name = "";
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})


function timeaeFunction() {

const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = weekday[d.getDay()];
let date = d.getDate()
let aaaeee = month[d.getMonth()];
let year = d.getFullYear();
let text = d.toTimeString();
let language = navigator.language;
let agent = navigator.userAgent;
document.getElementById("timea").innerHTML = "Date: " + day + ", " + date + " " + aaaeee + " " + year + ".";


setTimeout(() => {
startaaaaFunction();
}, 10000);
}

function timeanddateaFunction() {

const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = weekday[d.getDay()];
let date = d.getDate()
let aaaeee = month[d.getMonth()];
let year = d.getFullYear();
let language = navigator.language;
let agent = navigator.userAgent;
let texta = d.toTimeString();
document.getElementById("copyrighta").innerHTML = "Copyright © " + year + " Antartica.Org";
console.info("Last loaded on:  " + day + ", " + date + " " + aaaeee + " " + year + "; " + texta + " Language: " + language + "."); 
console.info("Copyright © " + year + " Antartica.Org");
}

function startaaaaFunction() {
timeaeFunction();
}
