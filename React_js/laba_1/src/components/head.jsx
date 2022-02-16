import React from 'react';

const Header = () => {

    let char = ['','a','b','c','d','e','f','g','h']
    let array = [9]
    for (let i = 0; i < 9; i++) {
        array[i] = <div className="CharHead">{char[i]}
        </div>
    }


    return (<div className="Head">
            {array}
        </div>
    );

}

export default Header;