const isEmptyArray =(arr:string[]|undefined)=>{
    if(arr===undefined||arr===null||arr.length===0){
        return true;
    }
    return false;
};

export{
    isEmptyArray
};