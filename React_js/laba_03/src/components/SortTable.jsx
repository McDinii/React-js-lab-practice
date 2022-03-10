import React, {useState} from 'react';


const SortTable = () => {
    const FoodList1 = [
        {
            Name: "Butter",
            Price: 0.9,
            Stock: 77,
        },
        {
            Name: "Milk",
            Price: 1.9,
            Stock: 45,
        },
    ]
    const FoodList2 = [
        {
            Name: "Butter",
            Price: 0.9,
            Stock: 77,
        },
        {
            Name: "Yoghurt",
            Price: 2.4,
            Stock: 12,
        },
        {
            Name: "Milk",
            Price: 1.9,
            Stock: 45,
        },
        {
            Name: "Pasta",
            Price: 3.2,
            Stock: 24,
        },
        {
            Name: "Bread",
            Price: 2.9,
            Stock: 11,
        },
    ]
    const FoodList3 = []
    const Width={
        width: "50px",
    }
    let [FoodList, setFoodList] = useState( FoodList2 );

    let [SortName, setSortName] = useState( false );
    let [SortPrice, setSortPrice] = useState( false );
    let [SortStock, setSortStock] = useState( false );

    //для обратной сортировки
    let [SortName2, setSortName2] = useState( false );
    let [SortPrice2, setSortPrice2] = useState( false );
    let [SortStock2, setSortStock2] = useState( false );

    let [colour, setcolour] = useState({backgroundColor: "plum"})

    if (FoodList.length < 3) {
        colour = ({backgroundColor: "Yellow"})
    }

    function Table() {
        if (SortName) {
            setSortName( false )
            FoodList.sort( function (a, b) {
                let nameA = a.Name.toLowerCase(); // ignore upper and lowercase
                let nameB = b.Name.toLowerCase(); // ignore upper and lowercase
                /*return nameA - nameB*/
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            } );

            if (SortName2) {
                setSortName2( false )
            } else {
                setSortName2( true )
                FoodList.reverse()
            }
        }
        if (SortPrice) {
            setSortPrice( false )
            FoodList.sort( function (a, b) {
                return a.Price - b.Price
            } );

            if (SortPrice2) {
                setSortPrice2( false )

            } else {
                setSortPrice2( true )
                FoodList.reverse()
            }
        }
        if (SortStock) {
            setSortStock( false )
            FoodList.sort( function (a, b) {
                return a.Stock - b.Stock
            } );

            if (SortStock2) {
                setSortStock2( false )
            } else {
                setSortStock2( true )
                FoodList.reverse()
            }
        }
        return(

            <table >

                {FoodList.map( (food,index) => <>
                    <tr style={Width}>{index+1}</tr>
                    <tr>{food.Name}</tr>
                    <tr>{food.Price}</tr>
                    <tr>{food.Stock}</tr>
                </> )}

            </table>
            )

    }

    return (
        <div className="foodTable" style={colour}>
            <form action="">
                <input className="ID" value="Num" readOnly/>
                <input
                    type="text"
                    value="Name"
                    className="main"
                    onClick={e => {
                        setSortName( true )

                    }
                    }
                    readOnly
                />
                <input
                    type="text"
                    value="Price"
                    className="main"
                    onClick={e1 => {

                        setSortPrice( true )


                    }
                    }
                    readOnly
                />
                <input
                    type="text"
                    value="In Stock"
                    className="main"
                    onClick={e2 => {
                        setSortStock( true )
                    }
                    }
                    readOnly
                />
            </form>
            {Table()}
        </div>
    );
};

export default SortTable;
