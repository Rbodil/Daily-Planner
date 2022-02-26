$("#current-day").text(moment().format("LLLL"));

$(".saveBtn").click(function(){

    var hourId = $(this).parent().attr("id");
    var hourPlan = $(this).siblings("#planned-event").val();

    localStorage.setItem(hourId, hourPlan);
    
});

function getPlans(){
    // make 11 of these 
    let hour1Cont = localStorage.getItem("7");
    let hour2Cont = localStorage.getItem("8");
    let hour3Cont = localStorage.getItem("9");
    let hour4Cont = localStorage.getItem("10");
    let hour5Cont = localStorage.getItem("11");
    let hour6Cont = localStorage.getItem("12");
    let hour7Cont = localStorage.getItem("13");
    let hour8Cont = localStorage.getItem("14");
    let hour9Cont = localStorage.getItem("15");
    let hour10Cont = localStorage.getItem("16");
    let hour11Cont = localStorage.getItem("17");


    $("#7").children("#planned-event").text(hour1Cont);
    $("#8").children("#planned-event").text(hour2Cont);
    $("#9").children("#planned-event").text(hour3Cont);
    $("#10").children("#planned-event").text(hour4Cont);
    $("#11").children("#planned-event").text(hour5Cont);
    $("#12").children("#planned-event").text(hour6Cont);
    $("#13").children("#planned-event").text(hour7Cont);
    $("#14").children("#planned-event").text(hour8Cont);
    $("#15").children("#planned-event").text(hour9Cont);
    $("#16").children("#planned-event").text(hour10Cont);
    $("#17").children("#planned-event").text(hour11Cont);
    
}




getPlans();

// get each hour div
// compare it against what time it is
//change bg color

// change hour Id's to 24h, inside auditplans get id compare id to moment.format, parseInt both 




function auditPlans(planEl){

   

    var hourBlock = $(planEl).children();
    console.log(hourBlock);

    hourBlock.removeClass("past present future");

    hourPlan = parseInt(hourBlock.attr("id"));
    var time = parseInt(moment().format("HH"));

    if(time > hourPlan){
        hourBlock.addClass("past");

    } else if(hourPlan === time){
        hourBlock.addClass("present");
    } else{
        hourBlock.addClass("future");
    }

};

function updateTime(){
    $(".squares").each(function(index, el){auditPlans(el);})
    console.log("page refreshed");
};
  
updateTime();
setInterval(updateTime, 1000*60);