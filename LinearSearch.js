function linearSearch(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) { 
        console.log("element present in list")
        return i;
      }
    }
    console.log("element not found")
    return null;
  }
var arr = [10,15,26,96,101,77,17,7,5,57,1]
linearSearch(arr,7)