import React,{useState} from 'react'
import './main.css'

const Main = (props) => {
const [listData,setListData]=useState(props.jsonData);

  let filterChanageData=(e)=>{
    console.log(e.target.value);
    let serData=e.target.value;
    if(serData!=""){
      const filteredData = listData.filter(item => item.rname.includes(serData)
      );
      setListData(filteredData);
    }else{
      setListData(props.jsonData);
      
    }
   
  }
  return (
    <div className='container'>
     
      <div className='filter'>
      <label>Filter </label>
        <input onChange={(e)=>filterChanageData(e)}></input>
      </div>
      {
        listData.map((data, idx) => {

          return (
            <div className='container'>
              <div className="subContainer">
                <h3>{data.rname}</h3>
                <p>Rating : {data.rating} </p>
                <div className="btns">
                </div>
              </div>

            </div> ) 
        })
      }
    </div>
  )
}

export default Main
