var cookies = 0;
var cps = 0;
var items = [0,0,0];
var prices = [10,100,1000];


function txtUpdate(){
    document.getElementById("txtCookie").innerHTML = "Cookies: " + cookies;
    document.getElementById("txtCps").innerHTML = "Cookies per second: " + cps;
}

function cpsUpdate(){
    cps = (items[0] * 1) + (items[1] * 5) + (items[2] * 10);
    txtUpdate();
}

function clickCookie(){
    cookies +=1;
    txtUpdate();
}

function buyitem(item){
    if(cookies >= prices[item-1]){

        cookies -=prices[item-1];

        items[item-1] +=1;
        document.querySelector(`#buyItem>div:nth-child(${item})>div:nth-child(2)`).innerHTML = items[item-1];
        
        prices[item-1] = Math.ceil(prices[item-1] * 1.10);
        document.querySelector(`#buyItem>div:nth-child(${item})>div:nth-child(1)>.itemprice`).innerHTML = `price:${prices[item-1]}c`;
        cpsUpdate();
    }
}


setInterval(function(){
    cookies += cps;
    txtUpdate();
}, 1000);
