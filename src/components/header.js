import '../styles/header.css';
import { useState } from 'react';
import logo from '../algo.png';

import Select from 'react-select';

const Header = (props)=>{
    const [algo,setAlgo] = useState(null);

    const options=[
        {value:1,label:"Bubble Sort"},
        {value:2,label:"Cocktail Sort"},
        {value:3,label:"Selection Sort"},
        {value:4,label:"Insertion Sort"},
        {value:5,label:"Shell Sort"},
        {value:6,label:"Merge Sort"},
        {value:7,label:"Quick Sort"},
        {value:8,label:"Heap Sort"},
    ]

    const startSorting = ()=>{
        if(algo){
            switch(algo.value){
                case 1:props.bubbleSort();break;
                case 2:props.cockTailSort();break;
                case 3:props.selectionSort();break;
                case 4:props.insertionSort();break;
                case 5:props.shellSort();break;
                case 6:props.mergeSort();break;
                case 7:props.quickSort();break;
                case 8:props.heapSort();break;
                default:window.alert("select a sorting algorith");
            }
        }
        else{
            window.alert("select a sorting algorith")
        }
    }

    return(
        <>
            <div className="header-container">

                <div className="header-left">
                    <img src={logo} style={{width:"2.5em",height:"2em"}}></img>
                    <div>Array Sorting <br></br>Algorithm Visualiser</div>
                </div>
                <div className="header-right">
                    
                    <div className="header-control">
                        <div onClick={()=>props.createData()}> New Data </div>
                        <div onClick={()=>props.createInvertedData()}> New Data(Reverse Sorted) </div>
                        <div onClick ={()=>startSorting()}>Start</div>
                    </div>
                    
                    <Select 
                        options={options} 
                        onChange={setAlgo} 
                        placeholder="Select an Algorithm"
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            colors: {
                            ...theme.colors,
                              text: '#fff',
                              primary: '#1ce1ac',
                              primary25:"#1ce1ac55"
                            },
                          })}    
                    />
                </div>
                
            </div>
        </>
    );
}

export default Header;