let clicks=0
function developer_mode(){
    clicks +=1
    if (clicks>=10){
        setTimeout(() => {
            document.getElementById("svg").classList.remove("egg")
        document.getElementById("headline").innerHTML = "Untitled"
        }, 5000);
        document.getElementById("svg").classList.add("egg")
        document.getElementById("headline").innerHTML = "TBN"
    }
}

function kill(){
    let final = 0
    const prices = [25000,40000,65000,65000,90000,1,1.1,1.25]
    const names = ["a6000","a7iii","a7siii","fx3","fx6","casual", "semi-formal","formal"]
    const wages = [30000, 30000, 20000, 20000, 20000]
    const clothing = document.getElementById("clothing").value
    let multiplier
    for (i=5; i<8; i++){
        if (clothing==names[i]){
            multiplier=prices[i]
        }
    }
    let people = 0
    for (i=0; i<5; i++){
        if(document.getElementById(names[i]).checked==true){
            final += prices[i] + wages[people]*multiplier
            people++
        }
    }
    let starttime = document.getElementById("hourstart").value
    let endtime = document.getElementById("hourend").value
    starttime = Number(starttime[0]+starttime[1])*60 + Number(starttime[3]+starttime[4])
    endtime = Number(endtime[0]+endtime[1])*60 + Number(endtime[3]+endtime[4])
    const diff = 1 + (endtime - starttime)/175
    final = Math.ceil(final*diff/1000)*1000
    document.getElementById("finalValue").value = final
    if (isNaN(final)||final==0){
        alert("Please add cameras, and the time of stream.")
        return false
    }
    else{
        x = confirm(`The price of the stream is approximately ${final} HUF. Do you want to submit this request?`)
        if(x&&$("myform").valid()){
            return true
        }
        else{
            return false
        }
    }
       
}

 
