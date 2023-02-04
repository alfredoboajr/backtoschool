document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("This field cannot be empty.");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

function customalert() {
  confirm("Are you sure you want to submit?")
}

function killCopy(e){
        return false;
    }
    function reEnable(){
        return true;
    }
    document.onselectstart=new Function ("return false");
    if (window.sidebar){
        document.onmousedown=killCopy;
        document.onclick=reEnable;
    }
    
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
    