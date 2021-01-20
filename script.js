var textarea = document.getElementById("textarea");
var run = document.getElementById("run");
var remove = document.getElementById("remove");
var output = document.getElementById("output");


run.onclick = () => {

    output.innerHTML = textarea.value;
    localStorage.setItem("sav", textarea.value);

};


remove.onclick = () => {

    output.innerHTML = " ";

};


onload += () => { textarea.value = localStorage.getItem("sav"); }


