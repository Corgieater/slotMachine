let holder = document.querySelector("#holder");
let shutter = document.querySelector(".shutter");
let bt = document.querySelector("#bt");
let ul = document.querySelector("#ul");

let foods=[];
let insert = prompt("What you gonna eat? press 'q' to exit"); //使用者輸入
do{
    foods.push(insert);
    insert = prompt("Anything else? (press 'q' to leave)");
}while(insert.toLocaleLowerCase()!=="q")

for(let i=0; i<foods.length; i++){
    let li = document.createElement("li");
    li.append(foods[i]);
    ul.append(li);
}


bt.addEventListener("click", function () {
    holder.innerHTML = ""; 
    let id1 = setInterval(spin, 300);
    let rand = Math.floor(Math.random()*5000)+1001;
    function clear() {
        clearInterval(id1);
    }
    setTimeout(clear, rand); //用隨機秒數製造隨機效果
    console.log(rand);
});
let last = ul.lastElementChild;
function spin(){  //用最後一個元素插到第一個來製造好像有在跑的效果
    let last = ul.lastElementChild;
    $(last).insertAfter(holder);
}
