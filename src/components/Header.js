import React from 'react'


const Header = props => {
    return ( 
        <nav>
            <div className="nav-wrapper red darken-4">
                <h2 className="brand-logo center">{props.titulo}</h2>
            </div>
        </nav>
     );
}
 
export default Header;