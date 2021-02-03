import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Navigator() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get('http://localhost:1337/navigator-1-frenches')
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
              .get('http://localhost:1337/navigator-1-s')
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      })



    const mystyle = {
        paddingLeft:"4%",
        paddingTop:"10%",
        paddingBottom:"13%"
      };

    const bgColor = {
        backgroundColor:"#593ecc"
      };
    return (
        <>
        {data.map((item) => (
        <div key={item.id}>
        <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6 text-center">
                        <br/>
                        <h2 className="font-weight-bolder text-dark" style={{fontSize:"44px"}}>{item.heading}</h2>
                        <small className="font-weight-bold text-secondary">{item.txt1}</small>
                        <br/>
                        <p className="text-secondary">{item.txt2}</p>
                        <br/>
                        <small className="font-weight-bold text-secondary">{item.txt3}</small>
                        
                        <div className="row">
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <input type="number" className="form-control" id="inputNumber" placeholder={item.txt4} style={{borderColor:"#593ecc"}}/>
                                </div>
                            </div>
                            <button type="submit" className="btn text-white" style={bgColor}><small>{item.btn1}</small></button>
                        </div>  
                        <br/>
                        <br/>
                        
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>  
        </div>
            <div className="container-fluid text-center p-2" style={{backgroundColor: "rgba(0,0,0,0.1)"}}>
                <img src={`/${item.img1.name}`} height="15"/>
                <small className="text-secondary"> {item.txt5}</small>
            </div>
        </div>
        ))}
        </>
    )
}
