var count = 0;
function addtask() {
    var task = document.getElementById('name').value;
    let box = document.getElementById('list');
    if (task == null) {
        return;
    }
    box.innerHTML += "<div class = task><div class=topic><div id='toptopic'>" + task + "</div><div><button type=button onclick=addtoList(" + count + ")>+</button></div></div><div class=todo id=todo" + count + "></div></div> ";
    count++;
}

var cnt = 0;

function check(a) {
    var x = "check" + a;
    var z = "label" + a;
    var y = document.getElementById(x);
    //var w = document.getElementById(z);
    //console.log(w);
    if (y.checked == true) {
        document.getElementById(z).setAttribute("style", "text-decoration:line-through; opacity:0.5;");
    } else {
        document.getElementById(z).setAttribute("style", "text-decoration:none; opacity:1;");
    }
    
}

function addtoList(x) {
    var todo = "";
    todo = prompt("Enter the sub-tasks ");
    if (todo == null) {
        return;
    }
    var a = "todo" + x;
    todo = todo.charAt(0).toUpperCase() + todo.slice(1);
    document.getElementById(a).innerHTML += "<input type=checkbox id=check" + cnt + " onclick=check(" + cnt + ")><label id=label" + cnt + ">" + todo + "</label><br>";
    cnt++;
    
}

document.querySelector("#plusbutton").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup .button").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});

// ======================= Login Form Btn Click Come on Box ===========================

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}