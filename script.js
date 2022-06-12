function compute() {
    
    //Read principal value first to subsequently validate if it is a positive number
    var principal = document.getElementById("principal").value;
    
    
    //Validate if value is abouve 0
    if (principal<=0){
        alert("Plase enter a positive number")
    } else{
    
    //Run if principal value meets criteria
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML="<br/>If you deposit <mark/>"+principal+"</mark/>,<br\>"+
    "at an interest rate of <mark/>"+rate+"%</mark/>.<br\>"+
    "You will receive an amount of <mark/>"+interest+"</mark/><br/>"+
    "in the year <mark/>"+year+"</mark/><br/>";
    document.getElementById("principal").focus() //Focus back on Principal value
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}