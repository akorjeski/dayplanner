var timedateHolder = $("#timedateHolder");
var NineAMButton = $("#9amSave");
var TenAMButton = $("#10amSave");
var ElevenAMButton = $("#11amSave");
var NoonButton = $("#12pmSave");
var OnePMButton = $("#1pmSave");
var TwoPMButton = $("#2pmSave");
var ThreePMButton = $("#3pmSave");
var FourPMButton = $("#4pmSave");
var FivePMButton = $("#5pmSave");
var NineAMtimeslot = $("#9am");
var TenAMtimeslot = $("#10am");
var ElevenAMtimeslot = $("#11am");
var Noontimeslot = $("#12pm");
var Onetimeslot = $("#1pm");
var Twotimeslot = $("#2pm");
var Threetimeslot = $("#3pm");
var Fourtimeslot = $("#4pm");
var Fivetimeslot = $("#5pm");
///Time Keeper Variable. No Touchy.
var d = new Date();
var n = d.getHours();

function populateDateTime(){
    timedateHolder.text(moment().format("dddd, MMMM Do, YYYY"));
    console.log(n);
}
///These are the functions that control color!
function NineAMcolorCoded(){
   if (n === 9){
    NineAMtimeslot.css("background-color", "green");
   }
   else if (n > 9)
   NineAMtimeslot.css("background-color", "gray");
   else if (n < 9)
   NineAMtimeslot.css("background-color", "blue");
}
function TenAMcolorCoded(){
    if (n === 10){
    TenAMtimeslot.css("background-color", "green");
    }
    else if (n > 10)
    TenAMtimeslot.css("background-color", "gray");
    else if (n < 10)
    TenAMtimeslot.css("background-color", "blue");
}
 function ElevenAMcolorCoded(){
    if (n === 11){
    ElevenAMtimeslot.css("background-color", "green");
    }
    else if (n > 11)
    ElevenAMtimeslot.css("background-color", "gray");
    else if (n < 11)
    ElevenAMtimeslot.css("background-color", "blue");
}
 function TwelveAMcolorCoded(){
    if (n === 12){
    Noontimeslot.css("background-color", "green");
    }
    else if (n > 12)
    Noontimeslot.css("background-color", "gray");
    else if (n < 12)
    Noontimeslot.css("background-color", "blue");
}
 function OnePMcolorCoded(){
    if (n === 13){
    Onetimeslot.css("background-color", "green");
    }
    else if (n > 13)
    Onetimeslot.css("background-color", "gray");
    else if (n < 13)
    Onetimeslot.css("background-color", "blue");
}
 function TwoPMcolorCoded(){
    if (n === 14){
    Twotimeslot.css("background-color", "green");
    }
    else if (n > 14)
    Twotimeslot.css("background-color", "gray");
    else if (n < 14)
    Twotimeslot.css("background-color", "blue");
}
 function ThreePMcolorCoded(){
    if (n === 15){
    Threetimeslot.css("background-color", "green");
    }
    else if (n > 15)
    Threetimeslot.css("background-color", "gray");
    else if (n < 15)
    Threetimeslot.css("background-color", "blue");
}
 function FourPMcolorCoded(){
    if (n === 16){
    Fourtimeslot.css("background-color", "green");
    }
    else if (n > 16)
    Fourtimeslot.css("background-color", "gray");
    else if (n < 16)
    Fourtimeslot.css("background-color", "blue");
}
 function FivePMcolorCoded(){
    if (n === 17){
    Fivetimeslot.css("background-color", "green");
    }
    else if (n > 17)
    Fivetimeslot.css("background-color", "gray");
    else if (n < 17)
    Fivetimeslot.css("background-color", "blue");
}

///Invoke all functions here (date thing) (color coded stuff)
populateDateTime();
NineAMcolorCoded();
TenAMcolorCoded();
ElevenAMcolorCoded();
TwelveAMcolorCoded();
OnePMcolorCoded();
TwoPMcolorCoded()
ThreePMcolorCoded();
FourPMcolorCoded(); 
FivePMcolorCoded();


 function setEmptyTimeslots(){
    var local9 = localStorage.getItem("9amText");
    var local10 = localStorage.getItem("10amText");
    var local11 = localStorage.getItem("11amText");
    var local12 = localStorage.getItem("12pmText");
    var local13 = localStorage.getItem("1pmText");
    var local14 = localStorage.getItem("2pmText");
    var local15 = localStorage.getItem("3pmText");
    var local16 = localStorage.getItem("4pmText");
    var local17 = localStorage.getItem("5pmText");

    NineAMtimeslot.val(local9);
    TenAMtimeslot.val(local10);
    ElevenAMtimeslot.val(local11);
    Noontimeslot.val(local12);
    Onetimeslot.val(local13);
    Twotimeslot.val(local14);
    Threetimeslot.val(local15);
    Fourtimeslot.val(local16);
    Fivetimeslot.val(local17);
    

 }
 //invoke the function to set the localStorage items equal to blank
//  createEmptyTimeslots();
 //invoke the function to set the text areas equal to blank
 setEmptyTimeslots();

NineAMButton.on("click", function(){
    localStorage.setItem("9amText", $("#9am").val())
})

TenAMButton.on("click", function(){
    localStorage.setItem("10amText", $("#10am").val())
})

ElevenAMButton.on("click", function(){
    localStorage.setItem("11amText", $("#11am").val())
})

NoonButton.on("click",function(){
    localStorage.setItem("12pmText", $("#12pm").val())
})

OnePMButton.on("click",function(){
    localStorage.setItem("1pmText", $("#1pm").val())
})

TwoPMButton.on("click",function(){
    localStorage.setItem("2pmText", $("#2pm").val())
})

ThreePMButton.on("click",function(){
    localStorage.setItem("3pmText", $("#3pm").val())
})

FourPMButton.on("click",function(){
    localStorage.setItem("4pmText", $("#4pm").val())
})

FivePMButton.on("click",function(){
    localStorage.setItem("5pmText", $("#5pm").val())
})
// on click
//save to local storage and set value = localstorage value