// heart icon
const totalHeart = document.getElementById("total-heart")

 const hearts =document.querySelectorAll(".heart-btn");
for(let i = 0; i< hearts.length; i++){
    hearts[i].addEventListener("click",function(){
        let availableHeart = parseInt(totalHeart.innerText);
        
        totalHeart.innerText = availableHeart + 1;
        
    })
}
//copy button
const totalCopy = document.getElementById("total-copy")
const titles = document.getElementsByClassName("service-title")
const copied =document.querySelectorAll(".copy-btn");

for(let i = 0; i< copied.length; i++){
    copied[i].addEventListener("click",function(){
        let availableCopy = parseInt(totalCopy.innerText);
        let serviceName = titles[i].innerText;
        const numbers = hotlineNumber[i].innerText;

        navigator.clipboard.writeText(numbers);
         alert(`copied ${serviceName} ${numbers}`)
        totalCopy.innerText = availableCopy + 1;
        
    })
   
}



//call button


let totalCoin = parseInt(document.getElementById("coin").innerText);
const  callBtn = document.getElementsByClassName("call-button");
const title = document.getElementsByClassName("service-title");
const hotlineNumber = document.getElementsByClassName("calling-number");
const historyList = document.getElementById("history-list");


for(let i = 0; i < callBtn.length; i++){
    const btn = callBtn[i];
    const serviceName = title[i].innerText;
    const numbers = hotlineNumber[i].innerText;
    
    btn.addEventListener("click",function(){
        if(totalCoin < 20){
            alert("you don't have enough coin");
            return;
        }
        
        alert(`📞 calling ${serviceName} at ${numbers}...`);
        totalCoin -= 20;
        document.getElementById("coin").innerText =totalCoin

        
        const dateTime = new Date().toLocaleTimeString();
        
        const li = document.createElement("li");
        li.innerText = `${serviceName} at ${numbers} on ${dateTime}`;
        li. classList.add("history-item")
        historyList.appendChild(li);
        
    })


}
//clear function
const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click",function(){
    historyList.innerHTML = "";
})
