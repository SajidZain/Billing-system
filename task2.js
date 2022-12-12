var name1 =""
var email =""

document.getElementById("name").addEventListener("keyup",function(){
    name1 = document.getElementById("name").value;
    document.getElementById("name2").innerHTML=name1;
})
document.getElementById("email").addEventListener("keyup",function(){
    email = document.getElementById("email").value;
    document.getElementById("email2").innerHTML=email;
})

// variables 
var rice_price=70, noodles_price=70, biryani_price=220, samosa_price=12;
var rice_q=0, noodles_q=0, biryani_q=0, samosa_q=0;
var ricepriceshow="",noodlespriceshow="",biryanipriceshow="",samosapriceshow="";


// rice 
document.getElementById("rice").addEventListener("keyup",function(){
    if(this.value=="",this.value==0){
        ricepriceshow="";
        rice_q=0
        showbill()

    }
    else{
    rice_q = this.value
    ricepriceshow ="<tr><td>Fried-rice</td><td>"+rice_price+"</td><td>"+rice_q+"</td><td>"+rice_price+"x"+rice_q+"="+rice_price*rice_q+"</td></tr>";
    showbill()
    }
})

// noodles 
document.getElementById("noodles").addEventListener("keyup",function(){
    if(this.value=="",this.value==0){
        noodlespriceshow =""
        noodles_q=0
        showbill()
    }
    else{
    noodles_q = this.value
    noodlespriceshow ="<tr><td>Noodles</td><td>"+noodles_price+"</td><td>"+noodles_q+"</td><td>"+noodles_price+"x"+noodles_q+"="+noodles_price*noodles_q+"</td></tr>";
    showbill()
    }
})

// biryani 
document.getElementById("biryani").addEventListener("keyup",function(){
    if(this.value=="",this.value==0){
        biryanipriceshow=""
        biryani_q=0
        showbill()
    }
    else{
    biryani_q = this.value
    biryanipriceshow ="<tr><td>Biryani</td><td>"+biryani_price+"</td><td>"+biryani_q+"</td><td>"+biryani_price+"x"+biryani_q+"="+biryani_price*biryani_q+"</td></tr>";
    showbill()
    }
})

// samosa 
document.getElementById("samosa").addEventListener("keyup",function(){
    if(this.value=="",this.value==0){
        samosapriceshow =""
        samosa_q=0
        showbill()
    }
    else{
    samosa_q = this.value
    samosapriceshow ="<tr><td>Samosa</td><td>"+samosa_price+"</td><td>"+samosa_q+"</td><td>"+samosa_price+"x"+samosa_q+"="+samosa_price*samosa_q+"</td></tr>";
    showbill()
    }
})

function showbill(){
    document.getElementById("bill-data").innerHTML= ricepriceshow + noodlespriceshow + biryanipriceshow + samosapriceshow;
    document.getElementById("total").innerHTML= rice_price*rice_q + noodles_price*noodles_q + biryani_price*biryani_q + samosa_price*samosa_q ;
}