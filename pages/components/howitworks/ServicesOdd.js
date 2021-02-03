import React from 'react'

export default function ServicesOdd(props) {

    const mystyle = {
        paddingLeft:"10%",
        paddingTop:"8%",
        paddingBottom:"10%",
        paddingRight:"10%"
      };

    const listyle = {
        color:"pink",
        fontSize:"46px"
    }

    const pstyle = {
        color:"black",
        fontSize:"20px"
    }
    return (
        <>
            {props.data.map((item) => (
            <div className="container-fluid bg-white" key={item.id}>
                <div className="row" style={mystyle}>
                <div className="col-sm-6">
                        <h1 >{props.number}.{item.heading}</h1>
                        <ul>
                            <li style={listyle}><p style={pstyle}>{item.txt1}</p></li>
                            <li style={listyle}><p style={pstyle}>{item.txt2}</p></li>
                            <li style={listyle}><p style={pstyle}>{item.txt3}</p></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 float-right" >
                    <img src={`/${item.img1.name}`} className="img-fluid" />
                    </div>
                </div>  
            </div> 
            ))}
        </>
    )
}
