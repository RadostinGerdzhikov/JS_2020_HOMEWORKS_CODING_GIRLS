let mostFrequentItem =  arr => {

        let objCounterItems = {};
        
        for (let i = 0; i < arr.length; i++) {
            if(!objCounterItems.hasOwnProperty(arr[i])){
        objCounterItems[arr[i]] = 1; 
    }else{
        objCounterItems[arr[i]]++;
    }
}

    let arrOfObj = Object.entries(objCounterItems);
    let comparator = (a,b) => b[1] - a[1];
    arrOfObj.sort(comparator);
    return `${arrOfObj[0][0]} ( ${arrOfObj[0][1]} times )`
}


// console.log(printMostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));