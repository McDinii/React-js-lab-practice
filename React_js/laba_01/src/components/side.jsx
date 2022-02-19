import React from 'react';

const Side = () => {
    let array = [8], k = 8
    for (let i = 0; i < 8; i++,k--) {
                array[i] = <div className="CharSide">{k}
                </div>
    }


    return (<div className="Side">
            {array}
        </div>
    );

}

export default Side;