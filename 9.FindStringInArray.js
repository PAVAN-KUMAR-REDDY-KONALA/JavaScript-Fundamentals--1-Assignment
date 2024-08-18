let arr=[1,2,999,56,1234,"PW","pavan"]
for(let i=0;i<arr.length;i++){
    if(typeof arr[i] == "string"){
        console.log("Found the First String : "+arr[i])
        break
    }
}

// output : 
// Found the First String : PW