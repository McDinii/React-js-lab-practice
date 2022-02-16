import React from 'react';

const Board = () => {
    let array = [8]
        for (let i = 0; i < 8; i++) {
            array[i] = [8]
            for (let j = 0 ; j < 8; j++) {
                    if ((j + i) % 2 !== 0)
                        array[i][j] = <div className="Green"> </div>
                    else array[i][j] = <div className="White"> </div>
            }


        }


        return (

            <div className="main">
                {array}
            </div>
        );

}

export default Board;