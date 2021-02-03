import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Navigator2() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get('http://localhost:1337/navigator-2-frenches')
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
              .get('http://localhost:1337/navigator-2-s')
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      })

    const backgroundColor = {
        backgroundColor:"#593ecc"
    }

    const borderColor = {
        borderColor:"#593ecc"
    }
    return (
        <>
        {data.map((item) => (
        <div className="container-fluid bg-white" key={item.id}>
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6 text-center">
                        <br/>
                        <br/>
                        <h5 className="font-weight-bolder text-monospace">{item.heading}</h5>
                        <p className="text-secondary font-weight-light">{item.txt1}</p>
                        
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder={item.txt2} style={borderColor}/>
                            <div className="input-group-append">
                                <button className="btn" type="button" style={backgroundColor}>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <br/>
                        <small className="font-weight-bold">{item.txt3}</small>
                        <br/>
                        <br/>
                        <small className="font-weight-light text-secondary">{item.txt4}</small>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>  
        </div>
        ))}    
        </>
    )
}
