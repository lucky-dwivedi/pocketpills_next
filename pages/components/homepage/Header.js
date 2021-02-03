import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Menu from '../../common/Menu';

export default function Header() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get('http://localhost:1337/f-header-frenches')
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
              .get('http://localhost:1337/f-headers')
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      })

    const [width, setwidth] = useState("0px");

    const divStyleRight = {
        paddingLeft:"250px"
      }

    const divStyle = {
        paddingTop:"0.5%",
        paddingBottom:"0.5%",
      } 

      const openMenu = () => {setwidth("350px")}

      const closeNav = () => {setwidth("0")}
    return (
        <>
            <Menu width={width} closeNav={closeNav}/>
            {data.map((item) => (
            <div key={item.id}>
            <div className="container-fluid bg-white shadow" style={divStyle}>
                <div className="row">
                    <div className="col-sm-4">
                        <nav className="navbar-light bg-white">
                            <button className="navbar-toggler" type="button" onClick={openMenu}>
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                    <div className="col-sm-4 p-2">
                        <center>
                            <img src={`/${item.img1.name}`} height="28"/>
                        </center>
                    </div>
                    <div className="col-sm-4" style={divStyleRight}>
                        <select name="lang" id="lang" onChange = {(event) => { sessionStorage.setItem("lang", event.target.value);}}>
                            <option value="english">EN</option>
                            <option value="french">FR</option>
                        </select>{' '}&nbsp;
                        <button type="button" className="btn btn btn-outline-secondary btn-sm">{item.btn1}</button>
                    </div>
                </div>  
            </div>
            <div className="container-fluid text-center" style={{backgroundColor:"pink"}}>
                <small>{item.txt1}</small>
            </div>
            </div>
            ))}
        </>
    )
}
