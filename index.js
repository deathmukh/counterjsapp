var data = 0;
document.getElementById("counting").innerHTML= data;

function increment(){
    data = data + 1;
    document.getElementById("counting").innerHTML= data;

}

function decrement(){
    data = data - 1;
    data = data < 0 ? 0 : data
    document.getElementById("counting").innerHTML= data;

}

function reset(){
    data = 0;
    document.getElementById("counting").innerHTML= data;

}


let obj_1 = {
    itemName : "something",
    price :4,
    discount: 20,
    itemCode : "431"
}

