import React from 'react';

import Calendar from './components/Calendar';

export default class App extends React.Component {
    state = {
        date: null
    };

    handleDateChange = date => this.setState({ date });

    render() {
        const { date } = this.state;
        return (
            <div className="calendar">
                {date && <p>Выбранная дата:<span> {date.toLocaleDateString()}</span></p>}

                <Calendar
                    onChange={this.handleDateChange}
                />
            </div>
        );
    }
}