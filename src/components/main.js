import Header from "./header";
import Content from "./content";
import {useState} from 'react';
import {bubbleSort,selectionSort,insertionSort,mergeSort, quickSort, cockTailSort} from '../algorithms/algorithms';

const Main = ()=>{
    const [data,setData] = useState([]);
    const [active,setActive] = useState([-1,-1]);
    const time = 10;

    function RNG(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    const createData = ()=>{
        let newActive = [...active];
        newActive=[];
        setActive(newActive);
        const newData=[];
        for(let i=0;i<250;i++){
            newData.push(RNG(5,600));
        }
        setData(newData);
    }   

    return(
        <>
            <Header 
                createData={createData}
                bubbleSort={()=>bubbleSort(data,setData,time,active,setActive)} 
                selectionSort={()=>selectionSort(data,setData,time,active,setActive)}
                insertionSort ={()=>insertionSort(data,setData,time,active,setActive)}
                mergeSort ={()=>mergeSort(data,setData,time ,active,setActive)}
                quickSort={()=>quickSort(data,setData,time ,active,setActive)}
                cockTailSort={()=>cockTailSort(data,setData,time,active,setActive)}
            />
            <Content data={data} active={active} />
        </>
    )
}

export default Main;