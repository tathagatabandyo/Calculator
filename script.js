function n(ele) {
    document.querySelector("input[name=an]").value += ele;
    document.querySelector("input[name=an]").setAttribute("style","background:#f368e070;color:#eee;");
}
function ev() {
    var val=document.querySelector("input[name=an]").value;
    document.querySelector("input[name=an]").value=eval(val);
    document.querySelector("input[name=an]").setAttribute("style","background:pink;color:#16a085;");
}

function cle()
{
    document.querySelector("input[name=an]").value="";
}