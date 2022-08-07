import '../styles/content.css';


const Content = (props)=>{
    const displayBars = ()=>{
        return props.data.map( (data,id=0)=>{
            let style = {
                height:data,
                backgroundColor:props.active.includes(id)?"#1ce1ac":"#6c757d"
            };
            
            return(

                <div 
                    className="data-bar"  
                    key={id}
                    id={id++}
                    style={style}
                ></div>
            )
        
        })
    }

    return(
        <>
            <div className="data-container">
                {displayBars()}
            </div>
        </>
    );

    
}

export default Content;