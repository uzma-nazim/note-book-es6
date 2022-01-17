const input1 = document.getElementById(`input1`);
const input2 = document.getElementById(`input2`);
const add = document.getElementById(`add`);
let div2 = document.getElementById(`div2`);
const eror = document.getElementsByClassName("eror");

add.addEventListener(`click`,()=>{
    
    
    if(input1.value ==="" && input2.value ===""){
        
        eror[0].style.display = "inline"
        eror[1].style.display = "inline"
        
        
        
    }
    else if(input1.value ==="" ){

        eror[0].style.display = "inline"
        eror[1].style.display = "none"


    }
    else if(input2.value ==="" ){

        
        eror[1].style.display = "inline"
        eror[0].style.display = "none"

    }
    else{


        let div1 = document.createElement(`div`);
        div1.setAttribute(`class`,`text`);
        div1.classList.add(`animate__fadeInDown`);
        div1.classList.add(`animate__animated`);
        
    
        //tittle
    
        let h2 =  document.createElement(`h2`);
        let h2tex = document.createTextNode(`${input1.value}`);    
        h2.appendChild(h2tex);
    
        //description
    
        let p = document.createElement(`p`);
        let ptex = document.createTextNode(`${input2.value}`);
        p.appendChild(ptex);
    
        //edit
        let edit = document.createElement(`button`);
        edit.setAttribute(`class`,`far fa-edit`);
        edit.addEventListener(`click`,a=>{
           let val1 =  a.target.parentNode.firstChild.innerHTML ;
           let val2 =  a.target.parentNode.firstChild.nextSibling.innerHTML; 
           input1.value = val1
           input2.value = val2
           div1.remove()
           


    
        })
    
        //delete
    
        let deletetex = document.createElement(`button`);
        deletetex.setAttribute(`class`,`far fa-trash-alt`);
    
        deletetex.addEventListener(`click`,e=>{
     
            e.target.parentNode.remove()
        })
    
    
        div1.appendChild(h2);
        div1.appendChild(p);
        div1.appendChild(edit);
        div1.appendChild(deletetex);
        div2.appendChild(div1);
        input1.value = ``;
        input2.value = ``;

        
        eror[0].style.display = "none"
        eror[1].style.display = "none"
        
    }



})



/// All DElEtE 

add.nextSibling.addEventListener(`click`, _=>{

    
    div2.remove()


})
