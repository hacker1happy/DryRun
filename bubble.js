function pass() {    
    var n = document.myform.num.value;
    var x = document.myform.elements.value;
    if(x===''){
        alert("Please enter a number");
        return false;
    }else{
        const lst = x.split(" ");
        if(lst.length==n){
            localStorage.setItem("elements", lst);
        }
        else{
            alert("Please enter "+n+" numbers");
            return false;
        }
        return true;

    }
}

