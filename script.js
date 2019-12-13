var timedateHolder = $("#timedateHolder");

function populateDateTime(){
    timedateHolder.text(moment().format("dddd, MMMM Do, YYYY"));
}

populateDateTime();