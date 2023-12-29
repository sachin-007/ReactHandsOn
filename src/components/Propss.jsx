function Propss(props) {

    function btncfunc(){
        console.log("i was get clicked ");
    }

    return (
    <div className="">
    
            
        <h1>hi there {props.name} </h1>
        <span><h1>age {props.age} </h1>
        </span>

        <button onClick={btncfunc}>click</button>

    </div>
    )
}

export default Propss;