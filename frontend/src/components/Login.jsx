import React from "react";
import { Fragment } from "react";
import background from "../media/undraw_stars_re_6je7.png";

export default function Login(){
    
    function logear(){
        console.log("Logearse")
    }

    return (
        <React.Fragment>
            <div className="container" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
                <div className="barra">
                    {/* aqui va la barra de presentacion */}
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "100vh" }}>
                    <div style={{ background: "#cfcfcf", borderRadius: "10px", color: "white", paddingRight: "15px", paddingLeft: "15px", paddingTop: "15px", paddingBottom: "5px" }}>
                        <form method="post">
                            <div style={{ marginTop: "15px" }}>
                                <label htmlFor="email" >Email</label>
                                <input id="email" className="form-control" autoComplete="off"/>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <label htmlFor="email">Password</label>
                                <input id="email" className="form-control" autoComplete="off"/>
                            </div>                     
                            <button type="button" onClick={logear} className="btn btn-primary d-block w-100" style={{ marginTop: "30px" }}>Log in</button>
                        </form>
                        <div style={{ marginTop: "10px" }}>
                            <a>No account?</a>
                        </div>
                    </div> 
                </div>          
            </div>   
        </React.Fragment>
    )
}
