import React,{useState} from 'react'

export default function Textfrom(props) {
  const [count, setCount] = useState("hello World im jeni !");
  const upClick  =()=>{
    console.log("Upper case ");
    let NewVlaue = count.toUpperCase();
    setCount(NewVlaue);

  } 

  const downClick  =()=>{
    console.log("Upper case ");
    let NewVlaue = count.toLowerCase();
    setCount(NewVlaue);

  } 

  const handeler =(event)=>{
 console.log("On Change");
setCount(event.target.value)
  }
  return (
    <>
    <div className='container'>
      <h1  > Eneter The Text To Analyze</h1>

 <div className="form-group">
    <label for="exampleFormControlTextarea1">{props.heading}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={count} onChange={handeler} style={{backgroundColor: props.Mode==='dark'?'grey':'white'}}></textarea>
  </div>
  <button className="btn btn-primary"onClick={upClick}>Convert to Upper Case</button>
  <button className="btn btn-primary mx-3"onClick={downClick}>Convert to Lower Case</button>

    </div>
    <div className='container my-4'> 
    <h1>Your Text Summary</h1>
    <p>{count.split(" ").length} Words And {count.length} Characters</p>
    <p>{0.008* count.split("").length} Minutes to read Following Words.. </p>
     <h2>Preview</h2>
     <p>{count}</p>
    
    </div>

    </>
  )
}
