$("#current-day").text(moment().format("LLLL"));




$(".saveBtn").click(function(){

    var hourId = $(this).parent().attr("id");
    var hourPlan = $(this).siblings("#planned-event").val();

    localStorage.setItem(hourId, hourPlan);
    
});

function getPlans(){
    plans = JSON.parse(localStorage.getItem("hourPlan"));
    console.log(plans);
}

getPlans();