function findAge(current_date, current_month, current_year, birth_date,
    birth_month, birth_year)
{

month = [31, 28, 31, 30, 31, 30, 31,
               31, 30, 31, 30, 31 ]

if (birth_date > current_date) {
current_date = current_date + month[birth_month - 1];
current_month = current_month - 1;
}

if (birth_month > current_month) {
current_year = current_year - 1;
current_month = current_month + 12;
}


var calculated_date = current_date - birth_date;
var calculated_month = current_month - birth_month;
var calculated_year = current_year - birth_year;

document.write("Present Age<br>Years: "+(calculated_year)+" ");
document.write("Months: "+calculated_month+" ");
document.write("Days: "+calculated_date+" ");
}