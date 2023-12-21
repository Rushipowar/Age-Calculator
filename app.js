function Age(){
var d = document.getElementById("date").value;
var m = document.getElementById("month").value
var y = document.getElementById("year").value;

var date = new Date()
var dd = date.getDate()
console.log(dd)
var mm = 1 + date.getMonth()
var yy = date.getFullYear()

var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(d > dd){
    dd = dd + month[mm - 1];
    mm = mm - 1;
}
if (m > mm) {
    mm = mm + 12;
    yy = yy - 1;
}
var day = dd - d;
var Month = mm - m;
var Year = yy - y;
document.getElementById("Age").innerHTML =  `Your Age is ${Year} Years ${Month} Months ${day} Day`;

}

// "Your Age is \n" + Year + "Years " + Month + "Months " + day + "Days "