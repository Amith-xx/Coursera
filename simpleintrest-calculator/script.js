function updateRate() {
    const rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").textContent=rateval;
    
}



function compute()
{

    principal= parseInt(document.getElementById("principal").value);
    rate=document.getElementById("rate").value;
    years=document.getElementById("years").value;
    const interest=parseFloat((principal*years*rate)/100);
    const amount=principal+interest;
    const result=document.getElementById("result");

    var year = new Date().getFullYear() + parseInt(years);
   

    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        
    }
    
        
            else {
                result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
            }
    
    

}
        