import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link'

export default function Menu(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get('http://localhost:1337/menus')
          .then(res => {
            //console.log(res)
            setData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    },[])
    
    const sidepanel = {
        width: props.width,
        position: "fixed",
        zIndex: "1",
        height: "100%",
        top: "0",
        left: "0",
        backgroundColor: "#593ecc",
        overflowX: "hidden",
        transition: "0.5s",
        //paddingTop: "60px",
        //writable: true
      };
      
    const closebtn = {
        //position: "absolute",
        //top: "0",
        //right: "25px",
        color:"white",
        fontSize: "40px",
        margin:"0",
        padding:"0",
        //marginTop:"0px",
        paddingLeft:"3%",
        paddingRight:"3%",
        //border:"1px solid"
      }
    return (
        <>
            <div style={sidepanel}>
                <button type="button" className="btn" style={closebtn} onClick={props.closeNav}>×</button><br/>
                <img src="logo-aside.png" className="img-fluid" style={{paddingLeft:"3%"}}/>
                <div className="justify-content-center text-center">
                    <br/>

                    {data.map((item) => (
                    <div key={item.id}>
                    
                        <Link  href={item.link} ><a className="text-monospace text-white">{item.menu}</a></Link>
                    
                    <hr/>
                    </div>
                    ))}
                    <br/>
                    
                    <div className="border rounded bg-white small font-weight-bold" style={{margin:"0px 15px 0px 15px",padding:"10px 0px 10px 0px",color:"#593ecc"}}>GET STARTED</div>
                    <div className="rounded small font-weight-bold" style={{margin:"15px 15px 0px 15px",padding:"10px 0px 10px 0px",color:"white",border:"2px solid white"}}>LOG IN</div>
                </div>                            
            </div>
        </>
    )
}
 