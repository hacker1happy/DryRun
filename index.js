var lst = [1,2,3,4,5]
var htmlData = "<table><tr>"
for(i=0;i<lst.length;i++){
    htmlData = htmlData + "<td>" + lst[i] + "</td>"
}
htmlData = htmlData + "</tr></table>"

// document.getElementById("test").innerHTML=htmlData
