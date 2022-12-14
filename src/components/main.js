import Header from "./header";
import Content from "./content";
import {useState} from 'react';
import {bubbleSort,selectionSort,insertionSort,mergeSort, quickSort, cockTailSort,shellSort,sort,heapSort} from '../algorithms/algorithms';

const Main = ()=>{
    const [data,setData] = useState([]);
    const [active,setActive] = useState([-1,-1]);
    const time = 1;

    function RNG(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    const createData = ()=>{
        let newActive = [...active];
        newActive=[];
        setActive(newActive);
        const newData=[];
        for(let i=0;i<350;i++){
            newData.push(RNG(5,600));
        }
        setData(newData);
    }   
    const createInvertedData = ()=>{
        let newActive=[];
        setActive([...newActive]);
        const newData = [];

        for(let i=0;i<350;i++){
            newData.push(RNG(5,600));
        }
        sort(newData,setData);
        newData.reverse();
        setData([...newData]);
    }

    return(
        <>
            <Header 
                createData={createData}
                createInvertedData={createInvertedData}
                bubbleSort={()=>bubbleSort(data,setData,time,active,setActive)} 
                selectionSort={()=>selectionSort(data,setData,time,active,setActive)}
                insertionSort ={()=>insertionSort(data,setData,time,active,setActive)}
                mergeSort ={()=>mergeSort(data,setData,time ,active,setActive)}
                quickSort={()=>quickSort(data,setData,time ,active,setActive)}
                cockTailSort={()=>cockTailSort(data,setData,time,active,setActive)}
                shellSort = {()=>shellSort(data,setData,time,active,setActive)}
                heapSort = {()=>heapSort(data,setData,time,active,setActive)}
            />
            <Content data={data} active={active} />
        </>
    )
}

export default Main;