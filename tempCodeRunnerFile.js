function minMaxAvgOfArrInNewArr(arr){
    var newArr=[];
    var max=arr[0];
    var min=arr[0];
    var sum = 0;
    for(var i=0;arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
        else if(min < arr[i]){
            min = arr[i];
        }
    }
    var avg = sum / arr.length;
    newArr =[max,min,avg];
    return newArr;
}

console.log(minMaxAvgOfArrInNewArr([1,5,10,-2]))