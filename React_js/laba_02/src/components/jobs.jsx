import React from 'react';


const Jobs = () => {

    class Panel extends React.Component {
        constructor(props) {
            super( props );
            this.state = {isVisible: true, meaning: '0', key: ''};//default
            this.handleChangeJobs = this.handleChangeJobs.bind( this );
            this.handleSubmitJobs = this.handleSubmitJobs.bind( this );
            this.but = this.but.bind( this );
        }

        handleChangeJobs(event) {
            const target = event.target
            const value = target.value;
            const name = target.name;
            this.setState( {
                    meaning: value,
                    isVisible: true
                }
            );
        }

        handleSubmitJobs(event) {
            event.preventDefault();
        }
        but(){
            this.setState( {
                    isVisible: false
                }
            );
        }
        render() {
           /* const job = {"Programmer": 0, "Miner": 1, "Auto-Mechanic": 2, "Blogger": 3, "Gardener": 4}
            const keys = Object.keys( job )

            const getArr = job => {
                let arr = []
                for (let i = 0, l = keys.length; i < l; i++) {
                    arr.push(
                        <option
                            key={keys[i]}
                            name={keys[i]}// names
                            value={job[keys[i]]}//0,1,2...
                            onChange={this.handleChangeJobs}>
                            {keys[i]}
                        </option>
                    )

                }
                return arr;

            }*/
            return (

                <div className="Form">
                    <form className="new" onSubmit={this.handleSubmitJobs}>
                        <select name='meaning' value={this.state.meaning} onChange={this.handleChangeJobs}>
                            <option

                                // names
                                value='0'//0,1,2...
                                >
                                Programmer
                            </option>
                            <option

                                // names
                                value='1'//0,1,2...
                                >
                                Miner
                            </option>
                            <option

                                name="Auto-Mechanic"// names
                                value='2'//0,1,2...
                               >
                                Auto-Mechanic
                            </option>
                            <option

                                name="Blogger"// names
                                value='3'//0,1,2...
                                >
                                Blogger
                            </option>
                            <option
                                name='Gardener'// names
                                value='4'//0,1,2...
                                >
                                Gardener
                            </option>
                        </select>
                        <List check={this.state.isVisible} meaning={this.state.meaning}/>

                    </form>
                    <input className="btn" type="button" onClick={this.but} value="Скрыть"/>

                </div>
            );

        }
    }

    class List extends React.Component {


        render() {
            let key = this.props.meaning
            let check = this.props.check
            let arr = [<ul>
                <a href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                    <li>Wiki about programmer</li>
                </a><a
                href="https://www.receptix.us/us/virtual-data-room-due-diligence-jobs-in-united-states?as=2&g=552">
                <li>Habr</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About salary</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>More about work</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About future</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>About vacation</li>
            </a>
            </ul>, <ul>
                <a href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                    <li>Wiki about miner</li>
                </a><a
                href="https://www.receptix.us/us/virtual-data-room-due-diligence-jobs-in-united-states?as=2&g=552">
                <li>Habr</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About salary</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>More about work</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About future</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>About vacation</li>
            </a>
            </ul>, <ul>
                <a href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                    <li>Wiki about auto-mechanic</li>
                </a><a
                href="https://www.receptix.us/us/virtual-data-room-due-diligence-jobs-in-united-states?as=2&g=552">
                <li>Habr</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About salary</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>More about work</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About future</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>About vacation</li>
            </a>
            </ul>, <ul>
                <a href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                    <li>Wiki blogger </li>
                </a><a
                href="https://www.receptix.us/us/virtual-data-room-due-diligence-jobs-in-united-states?as=2&g=552">
                <li>Habr</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About salary</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>More about work</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About future</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>About vacation</li>
            </a>
            </ul>, <ul>
                <a href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                    <li>Wiki gardener</li>
                </a><a
                href="https://www.receptix.us/us/virtual-data-room-due-diligence-jobs-in-united-states?as=2&g=552">
                <li>Habr</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About salary</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>More about work</li>
            </a><a
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjssLme2Jb2AhXaiv0HHW_nDc0QFnoECAYQAQ&url=https%3A%2F%2Fhabr.com%2Fen%2Fhub%2Fprogramming%2F&usg=AOvVaw0J490lYw2L_tz-q1HWthFA">
                <li>About future</li>
            </a><a
                href="https://developers.turing.com/?s=ads_developers-google-sem_group2A&n=1&campaignid=12664957911&adid=120684975255&placement=programmers%20jobs&gclid=Cj0KCQiA09eQBhCxARIsAAYRiynS9jDF-YMwxQAS79qlmh-VI7-HpNATPfjNKAi32Ar4dXNqekxFbVwaAo1WEALw_wcB">
                <li>About vacation</li>
            </a>
            </ul>]
            if (check === true) {
                return (<div>
                    {arr[key]}
                </div>);
            } else return null
        }
    }

    return <div><Panel/></div>

}
export default Jobs;
