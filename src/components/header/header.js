import React from "react";

const Header = (props) => {

    return (
        <div className = "Header">
          <h1> Actual currency</h1>
        <ul>
          {props.rates.map(item => (
            <li key={item.ccy}>
              {item.ccy} : {item.buy} / {item.sale}
            </li>
          ))}
        </ul>
        </div>
    );
}

export default Header;