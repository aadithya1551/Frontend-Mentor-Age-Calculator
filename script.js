function get() {
   var birth_day = document.getElementById("day").value;
   var birth_month = document.getElementById("month").value;
   var birth_year = document.getElementById("year").value;
   var today = new Date();
   var current_day = today.getDate();
   var current_month = today.getMonth() + 1;
   var current_year = today.getFullYear();
   var dif_day, dif_month, dif_year;
   dif_year = current_year - birth_year;

   if (birth_day == "") {
      var head = document.getElementById('head').style.color = "hsl(0, 100%, 67%)";
      var box = document.getElementById('day').style.borderColor = "hsl(0, 100%, 67%)";
      var error = document.getElementById('error').innerHTML = "Enter the day";
      var clear = setTimeout(() => {
         var a = document.getElementById('head').style.color = "gray";
         var b = document.getElementById('day').style.borderColor = "gray";
         var c = document.getElementById('error').innerHTML = "";
      }, 2000);
   }
   else if (birth_month == "") {
      var head1 = document.getElementById('head1').style.color = "hsl(0, 100%, 67%)";
      var box1 = document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";
      var error1 = document.getElementById('error1').innerHTML = "Enter the month";
      var clear = setTimeout(() => {
         var a = document.getElementById('head1').style.color = "gray";
         var b = document.getElementById('month').style.borderColor = "gray";
         var c = document.getElementById('error1').innerHTML = "";
      }, 2000);
   }
   else if (birth_year == "") {
      var head2 = document.getElementById('head2').style.color = "hsl(0, 100%, 67%)";
      var box2 = document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";
      var error2 = document.getElementById('error2').innerHTML = "Enter the year";
      var clear = setTimeout(() => {
         var a = document.getElementById('head2').style.color = "gray";
         var b = document.getElementById('year').style.borderColor = "gray";
         var c = document.getElementById('error2').innerHTML = "";
      }, 2000);
   }
   else if (birth_day > 31 || birth_day < 1) {
      var head = document.getElementById('head').style.color = "hsl(0, 100%, 67%)";
      var box = document.getElementById('day').style.borderColor = "hsl(0, 100%, 67%)";
      var error = document.getElementById('error').innerHTML = "Must be a valid day";
      var clear = setTimeout(() => {
         var a = document.getElementById('head').style.color = "gray";
         var b = document.getElementById('day').style.borderColor = "gray";
         var c = document.getElementById('error').innerHTML = "";
      }, 2000);
   }
   else if (birth_month > 12 || birth_month < 1) {
      var head1 = document.getElementById('head1').style.color = "hsl(0, 100%, 67%)";
      var box1 = document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";
      var error1 = document.getElementById('error1').innerHTML = "Must be a valid month";
      var clear = setTimeout(() => {
         var a = document.getElementById('head1').style.color = "gray";
         var b = document.getElementById('month').style.borderColor = "gray";
         var c = document.getElementById('error1').innerHTML = "";
      }, 2000);
   }
   else if (birth_year > current_year) {
      var head2 = document.getElementById('head2').style.color = "hsl(0, 100%, 67%)";
      var box2 = document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";
      var error2 = document.getElementById('error2').innerHTML = "Must be a valid year";
      var clear = setTimeout(() => {
         var a = document.getElementById('head2').style.color = "gray";
         var b = document.getElementById('year').style.borderColor = "gray";
         var c = document.getElementById('error2').innerHTML = "";
      }, 2000);
   }
  
   else if (birth_day > checknodays(birth_year, birth_month)) {
      var error = document.getElementById('error').innerHTML = "Must be a valid day";
      var head = document.getElementById('head').style.color = "hsl(0, 100%, 67%)";
      var box = document.getElementById('day').style.borderColor = "hsl(0, 100%, 67%)";
      var head1 = document.getElementById('head1').style.color = "hsl(0, 100%, 67%)";
      var box1 = document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";
      var head2 = document.getElementById('head2').style.color = "hsl(0, 100%, 67%)";
      var box2 = document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";
      var clear = setTimeout(() => {
         var error = document.getElementById('error').innerHTML = "";
         var head = document.getElementById('head').style.color = "gray";
         var box = document.getElementById('day').style.borderColor = "gray";
         var head1 = document.getElementById('head1').style.color = "gray";
         var box1 = document.getElementById('month').style.borderColor = "gray";
         var head2 = document.getElementById('head2').style.color = "gray";
         var box2 = document.getElementById('year').style.borderColor = "gray";
      }, 2000);
   }


   else {

      if (current_month >= birth_month) {
         dif_month = current_month - birth_month
      }
      else {
         dif_year--;
         dif_month = 12 + current_month - birth_month
      }


      if (current_day >= birth_day) {
         dif_day = current_day - birth_day;
      }
      else {
         dif_month--;
         var count = checknodays(birth_year, birth_month);
         dif_day = count + current_day - birth_day;
      }

      if (dif_month < 0) {
         dif_month = 11;
         dif_year--;
      }
      var showyear = document.getElementById('showyear').innerHTML = dif_year;
      var showmonth = document.getElementById('showmonth').innerHTML = dif_month;
      var showday = document.getElementById('showday').innerHTML = dif_day;

   }


}


function checknodays(month, year) {
   return new Date(month, year, 0).getDate();
}











