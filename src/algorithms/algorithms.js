const sortingComplete = async ( data,setData,time ,active,setActive )=>{
    let newActives = [...active];
    newActives=[];
    for(let i = 0;i<data.length;i++){
        newActives = [...newActives];
        newActives.push(i);
        setActive(newActives);

        await sleep(time);
    }
}

const sleep = async(time)=>{
    await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, time)
    );
}

const swap = async (arr,index1,index2 ,data,setData,time ,active,setActive)=>{

    const temp=arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    
    //to change color of the bars
    let newActives = [...active];
    newActives=[index1,index2];
    setActive(newActives);
    //to wait
    setData([...arr]);
    await sleep(time);

}

//bubble sort time(worst):-0(n^2)
const bubbleSort = async(data,setData,time ,active,setActive)=>{

    let newData = [...data];

    for(let i =0 ; i<newData.length  ; i++){
        
        for(let j=0 ; j<newData.length-1 ; j++){
            if(newData[j] > newData[j+1]  ){

                let newActives = [...active];
                newActives=[j,j+1];
                setActive(newActives);

                let temp = newData[j];
                newData[j] = newData[j+1];
                newData[j+1]= temp;
                setData(newData);
                await sleep(time);
            }
        }
    }
    sortingComplete(active,setActive,time,data );
}

const cockTailSort = async (data,setData,time,active,setActive)=>{
    let newData = [...data];

    let start = 0;
    let end = newData.length-1;
    let swapped = true;

    while(swapped){

        swapped = false;

        for(let i=start;i<end;i++){
            if(newData[i] > newData[i+1]){
                swap(newData,i,i+1,data,setData,time,active,setActive);
                setData(newData);
                await sleep(time);
                if(swapped == false){
                    swapped = true;
                }
            }
        }

        if(!swapped){
            break;
        }

        end--;

        swapped = false;

        for(let i =end-1;i>=start;i--){
            if(newData[i] > newData[i+1]){
                swap(newData,i,i+1,data,setData,time,active,setActive);
                setData(newData);
                await sleep(time);
                if(swapped == false){
                    swapped = true;
                }
            }
        }
        if(!swapped){
            break;
        }
        start++;
    }
    sortingComplete(data,setData,time,active,setActive);
}

//selection sort time(worst):- 0(n^2)
const selectionSort = async(data,setData,time ,active,setActive)=>{
    let newData=[...data];

    for( let i=0 ; i<newData.length  ; i++ ){
        
        let min = i;

        for( let j=i+1 ; j<newData.length  ; j++ ){

            let newActives = [...active];
            newActives=[min,j];
            setActive(newActives);

            if( newData[min] > newData[j] ){
                min = j;
            }
        }
        let temp = newData[min];
        newData[min] = newData[i];
        newData[i]=temp;
        setData([...newData]);
        await sleep(time);
    }
    sortingComplete(data,setData,time ,active,setActive );

}

//insertion sort time(worst):- 0(n^2)
const insertionSort = async(data,setData,time ,active,setActive)=>{

    let newData = [...data];

    for(let i=0;i<data.length ;i++){
        
        let pos = i+1;
        let current = newData[pos];
        let j= i;
        while( j>=0 && current < newData[j] ){
            
            newData[j+1] = newData[j];
            j--;
            
            let newActives = [...active];
            newActives=[j];
            setActive(newActives);
            setData(newData);
            await sleep(time);
        }
        newData[j+1]=current;
        setData(newData);
        
        
        //pauses program for time miliseconds.
        await sleep(time);

    }
    newData.pop();
    setData(newData);
    sortingComplete(data,setData,time ,active,setActive);
}

//better version insertion sort time(worts) = 0(nlogn)
const shellSort = async(data,setData,time,active,setActive)=>{


    for(let gap = Math.floor(data.length/2) ; gap >0 ; gap=Math.floor(gap/2)){

        for(let i = gap ; i<data.length ; i++){

            let current = data[i];
            let j;

            for(j=i; j >= gap && data[j-gap] > current ; j=j-gap){
                
                data[j] = data[j-gap];

                let newActives = [...active];
                newActives=[j,j-gap];
                setActive(newActives);
                setData([...data]);
                await sleep(time);
            }
            data[j] = current;
            setData([...data]);
            await sleep(time);
        }
    }
    sortingComplete(data,setData,time,active,setActive);
}

//triger for merge sort
const beginMergeSort=async (data,setData,time ,active,setActive)=>{
    // console.log(data.length);
    const newArr=[...data];
    await mergeSort(newArr,0,data.length-1,data,setData,time ,active,setActive);
    setData(newArr);
    sortingComplete(data,setData,time ,active,setActive);
}

//mergeSort time(worst):-0(nlogn)
const mergeSort = async ( arr,left,right,data,setData,time ,active,setActive)=>{
    if(left >= right){
        return;
    }
    const middle = parseInt((left+right)/2);
    await mergeSort(arr,left,middle,data,setData,time ,active,setActive);
    await mergeSort(arr,middle+1,right,data,setData,time ,active,setActive);
    await merge(arr,left,middle,right,data,setData,time ,active,setActive);
}

//merge function - merges 2 array in a sorted array
const merge = async (arr,left,middle,right,data,setData,time ,active,setActive)=>{
        
    let sizeL = middle - left + 1;
    let sizeR = right - middle;

    let L = [sizeL];
    let R = [sizeR];

    for(let i=0 ; i<sizeL ; i++){
        L[i] = arr[ left + i];
    }
    for(let i=0 ; i<sizeR ; i++){
        R[i] = arr[middle+1+i];
    }
    let l=0;
    let r=0;
    let i=left;

    while( l < sizeL && r < sizeR){
        
        if( L[l] < R[r]){
            arr[i] = L[l];

            let newActives = [...active];
            newActives=[i];
            setActive(newActives);
            
            l++;
        }else{
            arr[i] = R[r];
            
            
            let newActives = [...active];
            newActives=[i];
            setActive(newActives);
            r++;
        }
        setData([...arr]);
        await sleep(time);
        i++;
    }

    while(l < sizeL){
        arr[i] = L[l];
        
        
        let newActives = [...active];
        newActives=[i];
        setActive(newActives);

        setData([...arr]);
        await sleep(time);
        l++;
        i++;
    }

    while(r<sizeR){
        arr[i] = R[r];
        
        
        let newActives = [...active];
        newActives=[i];
        setActive(newActives);
        
        setData([...arr]);
        await sleep(time);
        r++;
        i++;
    }

}

//trigger for quick sort
const beginQuickSort = async(data,setData,time ,active,setActive)=>{
    console.log(0);
    const newArr = [...data];
    await quickSort(newArr,0,newArr.length-1,data,setData,time ,active,setActive);
    setData(newArr);
    sortingComplete(data,setData,time ,active,setActive);
}

//quick sort time(worst):- 0(n^2) time(average):-0(nlogn)
const quickSort = async (arr,leftIndex,rightIndex,data,setData,time ,active,setActive)=>{
    if(leftIndex >= rightIndex ){
        return;
    }

    const leftPointer = await partition(arr,leftIndex,rightIndex,data,setData,time ,active,setActive);

    await quickSort(arr,leftIndex,leftPointer-1,data,setData,time ,active,setActive);
    await quickSort(arr,leftPointer+1,rightIndex,data,setData,time ,active,setActive);
}


//partition is the main login aside form recursion in quick sort
const partition = async (arr,leftIndex,rightIndex,data,setData,time ,active,setActive)=>{

    const pivot = rightIndex;

    while(leftIndex < rightIndex){
        
        while(arr[leftIndex] <= arr[pivot] && leftIndex < rightIndex){
            leftIndex++;
        }
        while(arr[rightIndex] >= arr[pivot] && leftIndex < rightIndex){
            rightIndex--;
        }
        await swap(arr,leftIndex,rightIndex,data,setData,time ,active,setActive);
    }
    await swap(arr,leftIndex,pivot,data,setData,time ,active,setActive);
    return leftIndex;
}



const sortPartition = (arr,leftIndex,rightIndex)=>{
    
    const pivot = rightIndex;

    while(leftIndex < rightIndex){

        while( arr[leftIndex] <= arr[pivot] && leftIndex < rightIndex){
            leftIndex++;
        }
        while(arr[rightIndex] >= arr[pivot] && leftIndex < rightIndex){
            rightIndex--;
        }
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[pivot];
    arr[pivot] = temp;
    return leftIndex;

}

const sort = (data,leftIndex,rightIndex)=>{
    if(leftIndex >= rightIndex){
        return;
    }

    const leftPointer = sortPartition(data,leftIndex,rightIndex);

    sort(data,leftIndex,leftPointer-1);
    sort(data,leftPointer+1,rightIndex);

}

const beginSort = (data,setData)=>{
    sort(data,0,data.length);
    setData([...data]);
}
export {bubbleSort,cockTailSort,selectionSort,insertionSort,beginMergeSort as mergeSort,beginQuickSort as quickSort,shellSort,beginSort as sort};//,selectionSort;