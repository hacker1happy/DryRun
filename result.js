var lst = localStorage.getItem("elements").split(",");;

function print(lst, j) {
  var htmlData = "<table><tr>"
  for (i = 0; i < lst.length; i++) {
    if (i == j) {
      htmlData = htmlData + "<td style=\"background-color:white;\">" + lst[i] + "</td>"
    } else if (i === j + 1) {
      htmlData = htmlData + "<td style=\"background-color:grey;\">" + lst[i] + "</td>"
    } else {
      htmlData = htmlData + "<td>" + lst[i] + "</td>"
    }
  }
  htmlData = htmlData + "</tr></table>"
  document.getElementById("example").innerHTML = htmlData
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bblSort(arr) {


  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < (arr.length - i - 1); j++) {

      print(arr, j);
      await sleep(2000);

      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}

bblSort(lst);
