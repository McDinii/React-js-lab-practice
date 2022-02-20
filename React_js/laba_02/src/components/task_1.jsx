import React from 'react';

const Task_1 = () => {

    class Panel extends React.Component {
        constructor(props) {
            super( props );
            this.state = {value: '24'};
            this.state = {value1:'+3:00'}
            this.handleChange = this.handleChange.bind( this );
            this.handleSubmit = this.handleSubmit.bind( this );
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        handleSubmit(event) {
            event.preventDefault();
        }
        render() {
            return (<div><form onSubmit={this.handleSubmit}>
                <p>
                    Выберите формат времени:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>
                </p>
                <p>
                    Выберите формат времени(в формате (+/-)xxx):

                        <input type="text" required placeholder={this.state.value1} onChange={this.handleChange} name="UTC"/>
                </p>
                <input type="submit" value="Sent"/>
            </form>
            <Clock name={this.state.value}/></div>);
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
            let UTC = parseInt( '1' ) * 3600
            let user_info = this.props.name
            console.log(user_info)
            const now = (parseInt( this.state.date.get ) + parseInt( this.state.date.getUTCHours() ) * 3600 + parseInt( this.state.date.getUTCMinutes() ) * 60 + parseInt( this.state.date.getUTCSeconds() ))
            const user = new Date( now + UTC )
            /*const user_time = UTC*/
            return (
                <div>
                    <h1>Задание 1 </h1>
                    <h2>Сегодня({this.state.date.toLocaleDateString()})
                        Сейчас {this.state.date.toLocaleTimeString()}</h2>
                    {user.toLocaleString()}
                </div>

            );
        }
    }

    return <div><Panel/><Clock/></div>

}

export default Task_1;