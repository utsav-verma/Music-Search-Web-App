
function demo(){
    var src = document.getElementById('input-get').value;
    src +=" "+" site:amazon.in OR site:flipkart.com";
    var url = new URL("http://www.google.com/search?q=");
    url+=src;
    window.location.href =url;
    
    }