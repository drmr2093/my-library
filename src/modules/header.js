import React from "react";

const Header = function ({ name, lead }) {

    return (

        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">{name}</h1>
            <p className="lead">{lead}</p>
        </div>
    )
}

export default Header;