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
    // else if (NineAMtimeslot.hourcounter < n){
    //     NineAMtimeslot.css("background-color", "red");
    // }
    // else if (NineAMtimeslot.hourcounter > n){
    //     NineAMtimeslot.css("background-color", "green")
    // }
    


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



NineAMButton.on("click", function(){
    var amanda = $("#9am").val();
    console.log(amanda);

})

