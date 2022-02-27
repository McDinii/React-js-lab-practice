import React from 'react';

const Timer = () => {

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
            return (<div className="Form timer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>
                            <span>Выберите формат времени:</span>
                            <select name="format" value={this.state.format} onChange={this.handleChange}>
                                <option  value="12">12</option>
                                <option value="24">24</option>

                            </select>
                        </p>
                    </label>
                    <label>
                        <p>
                           <span> Выберите часовой пояс ((+/-)xxx):</span>
                            <input type="text" name="UTC" required placeholder={this.state.UTC}
                                   onChange={this.handleChange}/>

                        </p>
                    </label>

                </form>
                <Clock format ={this.state.format} UTC={this.state.UTC}/>
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
            //цикл парсинга  пояса
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
            let newUTC = +sign * (+containerMin * 60000 + +containerH * 3600 * 1000)
            //формат имени
            let format = parseInt( this.props.format )
            // текущее время в UTC-0 в миллисекундах от 1 янв 1970 г
            let time = Date.now(), clock
            //прибавляет  пользовательский пояс и отнимает пояс устройства-текущий пояс
            const user = time + newUTC - 3600 * 1000 * 3
            // Устанавливаем время относительно ввода пользователя
            this.state.date.setTime( user )
            let check = this.state.date.getHours()
            //проверка формата
            if (format === 12) {
                let hours = check > 12 ? check-12 : check
                this.state.date.setHours(hours)
                clock = this.state.date.toLocaleTimeString()

                let checkAmPm = check-12
                if (checkAmPm > 0) {
                    clock += " pm"
                } else {
                    clock += " am"
                }
            } else clock = this.state.date.toLocaleTimeString()

            return (
                <div className="clock">
                    <h2 >
                        Сейчас в вашем
                        регионе: {clock}</h2>
                </div>
            );
        }
    }

    return <div><Panel/></div>

}

export default Timer;