var ele = document.createElement("div");
ele.setAttribute("id","timer");
document.body.append(ele);

let timer = 10;
setTimeout(() => {
    ele.innerHTML = timer--;
    setTimeout(() =>{
        ele.innerHTML = timer--;
        setTimeout(() =>{
            ele.innerHTML = timer--;
            setTimeout(() =>{
                ele.innerHTML = timer--;
                setTimeout(() =>{
                    ele.innerHTML = timer--;
                    setTimeout(() =>{
                        ele.innerHTML = timer--;
                        setTimeout(() =>{
                            ele.innerHTML = timer--;
                            setTimeout(() =>{
                                ele.innerHTML = timer--;
                                setTimeout(() =>{
                                    ele.innerHTML = timer--;
                                    setTimeout(() =>{
                                       ele.innerHTML = timer--;
                                        setTimeout(() =>{
                                         ele.innerHTML = "Happy Indepence Day!"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000); 
