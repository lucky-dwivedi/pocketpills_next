import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Navigator3() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get('http://localhost:1337/navigator-3-frenches')
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          }
          else{
            axios
              .get('http://localhost:1337/navigator-3-s')
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      })


    return (
        <>
        {data.map((item) => (
        <div className="container-fluid text-center" style={{backgroundColor:"#504774"}} key={item.id}>
                <br/>
                <br/>
            
                <img src={`/${item.img1.name}`} className="rounded-circle img-fluid img-thumbnail mx-auto" style={{height:"120px"}}/>
                <div className="col-sm-12 p-2">
                    
                    <h2 className="font-weight-bolder text-white" style={{fontSize:"33px"}}>{item.heading1}</h2>
                    <p className="text-white">{item.heading2}</p>
                </div>
                <button type="submit" className="btn text-white p-2 m-2" style={{backgroundColor: "rgba(0,0,0,0.2)"}}><small>{item.txt1}</small></button>
                <button type="submit" className="btn text-white p-2 m-2" style={{backgroundColor: "rgba(0,0,0,0.2)"}}><small>{item.txt2}</small></button>
                <button type="submit" className="btn text-white p-2 m-2" style={{backgroundColor: "rgba(0,0,0,0.2)"}}><small>{item.txt3}</small></button>
                <button type="submit" className="btn text-white p-2 m-2" style={{backgroundColor: "rgba(0,0,0,0.2)"}}><small>{item.txt4}</small></button>
                <button type="submit" className="btn text-white p-2 m-2" style={{backgroundColor: "rgba(0,0,0,0.2)"}}><small>{item.txt5}</small></button>
                
                <br/><br/>

                <button type="submit" className="btn btn-light p-2 px-4">{item.btn1}</button>
                <br/>
                <br/>
                <br/>
            
        </div>
        ))}  
        </>
    )
}
