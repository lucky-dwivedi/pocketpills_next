import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Footer() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get('http://localhost:1337/footer-frenches')
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
              .get('http://localhost:1337/footers')
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      },[])

    const mystyle = {
        //paddingLeft:"4%",
        paddingTop:"7%",
        paddingBottom:"9%"
      };

    const buttonstyle = {
        //padding:"1%",
        //paddingLeft:"10%",
        //paddingRight:"10%",
        color:"blue",
        backgroundColor:"white"

    }
    const sbuttonstyle = {
        border:"1px solid white",
        backgroundColor:"#593ecc",
        color:"white"
    }

    return (
       <>
       {data.map((item) => (
        <div className="container-fluid text-center" style={{backgroundColor:"#593ecc"}} key={item.id}>
            <div className="row" style={mystyle}>
                <div className="col-sm-12 text-center">
                    <h1 className="font-weight-bold text-white" style={{fontSize:"48px"}}>{item.heading}</h1>
                </div>
                <br/><br/><br/><br/>
                <div className="col-sm-12">
                    <button type="button" className="btn btn-lg mx-4 ml-5 px-4" style={buttonstyle}>{item.btn1}</button>
                    <br/><br/><br/>
                    <h5 className="font-weight-bold text-white">{item.txt1}</h5>
                    <p className="text-white font-weight-light">{item.txt2}</p>
                    <br/>
                    <button type="button" className="btn btn-lg mx-4 ml-5 px-4" style={sbuttonstyle} >{item.btn2}</button>
                    <br/><br/>
                    <small className="text-white font-italic">{item.txt3}</small>
                </div>
            </div>  
        </div>
        ))}
       </>
    )
}
