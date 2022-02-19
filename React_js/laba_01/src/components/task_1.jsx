import React from 'react';

const Task_1 = () => {
    const list = [
        {
            stock_name: "EFX",
            company_name: "Equifax Inc",
            price: 163.55,
            currency: "USD",
            change: "+9.03"
        }, {
            stock_name: "IRM",
            company_name: "Iron Mountain Inc",
            price: 33.21,
            currency: "USD",
            change: "+1.42"
        }, {
            stock_name: "NTAP",
            company_name: "NetApp Inc",
            price: 54.81,
            currency: "USD",
            change: "-6.01"
        }, {
            stock_name: "CTL",
            company_name: "Centurylink Inc",
            price: 13.79,
            currency: "USD",
            change: "-1.37"
        }]
    const trRedStyle = {
        background: 'red'
    }
    const tableStyle = {
        border: "1px solid #b8bd40"
    }
    const trGreenStyle = {background: 'green'}

    let max = list.length
            const getStockContent = list => {
                let content = []
                for (let i = 0; i < max; i++) {
                    const item = list[i]
                    if (parseInt(item.change) < 0) {
                        content.push( <tr style={trRedStyle}>
                            <td>{item.stock_name}</td>
                            <td>{item.company_name}</td>
                            <td>{item.change}</td>
                        </tr>)
                    }
                    else{
                        content.push( <tr style={trGreenStyle}>
                            <td >{item.stock_name}</td>
                            <td>{item.company_name}</td>
                           <td>{item.change}</td>

                        </tr>)
            }
        }
        return content
    }

    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }
        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: new Date()
            });
        }
        render() {
            return (
                <div>
                    <h1>Задание 1 </h1>
                    <h2>Сегодня({this.state.date.toLocaleDateString()}) Сейчас {this.state.date.toLocaleTimeString()}</h2>
                </div>
            );
        }
    }

    return <div><Clock/><h1>Задание 2 </h1><table className="Tabl" style={tableStyle}>{getStockContent(list)}</table></div>

}

export default Task_1;