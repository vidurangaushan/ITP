import React from "react";

function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
          <a className="navbar-brand" href="header.js" style={{fontSize:"30px"}}><b>Hotel</b></a>
          <button className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/add">AddHotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/update">UpdateHotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/delete">DeleteHotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hhome">Hotelhome</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vhotel">Viewhotel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bhome">Bookhotel</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/ahome">Accepthotel</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/ahome">Accepthotel</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    )
}
export default Header;