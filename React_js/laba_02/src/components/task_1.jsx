import React from 'react';

const Task_1 = () => {

    class Panel extends React.Component {
        constructor(props) {
            super( props );
            this.state = {format: '24', UTC: '+3:00'};//default
            this.handleChange = this.handleChange.bind( this );
            this.handleSubmit = this.handleSubmit.bind( this );
        }

        handleChange(event) {
             const value = event.target.value;
             const name = event.target.name;
            this.setState( {
                [name]: value
            } );
        }

        handleSubmit(event) {
            event.preventDefault();
        }

        render() {
            return (<div>
                <form  onSubmit={this.handleSubmit} >
                    <label>
                    <p>
                        Выберите формат времени:
                        <select  name ="format"  value={this.state.format} onChange={this.handleChange}>
                            <option value="12">12</option>
                            <option value="24">24</option>

                        </select>

                    </p>
                    </label>
                    <label>
                    <p>
                        Выберите формат времени(в формате (+/-)xxx):
                        <input type="text" name="UTC"  required placeholder={this.state.UTC}
                         onChange={this.handleChange} />

                    </p>
                    </label>
                </form>
                <Clock format={this.state.format} UTC={this.state.UTC}/>
            </div>);
        }
    }

    class Clock extends React.Component {

        constructor(props) {
            super( props );
            this.state = {date: new Date()};

        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval( this.timerID );
        }

        tick() {
            this.setState( {
                date: new Date()
            } );
        }

        render() {
            let containerH = ''
            let containerMin = '', k = 0, sign
            let UTC = this.props.UTC
            //цикл опр пояса
            for (let i of UTC) {
                if (i === ":") {
                    containerMin += UTC[k + 1] + UTC[k + 2]
                    break
                } else if (i === '+' || i === '-')
                    sign = i + '1'
                else {
                    containerH += i
                }
                k++

            }
            //сколько нужно прибавить к текущей дате
            let newUTC = +sign * (+containerMin *60000 + +containerH * 3600*1000)
            let format = parseInt( this.props.format )



             //user date

            let time = Date.now(),clock
            //отнимает текущий пояс

             const user = time + newUTC - 3600*1000*3
            this.state.date.setTime(user)
            let check = this.state.date.getHours()
            if (format === 12){
            let hours = check>=12 ? this.state.date.setHours(check-12) : this.state.date

                clock = this.state.date.toLocaleTimeString()
                console.log(clock)
                console.log( this.state.date.getHours()+12)
            if ((this.state.date.getHours+12)>12){
                clock+=" pm"}
            else if (this.state.date.getHours+12<12){
                clock+=" am"}
            }
            else clock =this.state.date.toLocaleTimeString()
            return (
                <div>
                    <h2>
                        Сейчас в вашем
                        регионе {clock}</h2>
                </div>
            );
        }
    }

    return <div><Panel/></div>

}

export default Task_1;