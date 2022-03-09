import React, {useState} from 'react';

const PhoneInput = () => {
    const NumArray = [
        {
            operator: ["МТС", "A1", "life:)"],
            value: "Беларусь",
            code: "+375",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAABt0lEQVRIS2Ps4uevYGZjr/+aX8nGwMDAwDOpE0QxfHv18iWYQSPAysDwSpzhfzBjr6jYd0ZGJrYveeVgq+jlAJBdIEcwNrX0/wVxwo7vf8nw/z+D7Lp1YIdc5wAHCM3ADqjJCAcc2wcOcro7oE9MAhwC6Y8egx3wODiYARQSX7ZtoZnvQQbDQwDDAUFBYIvp5oDRNIAeBaDgfz93DsOL7Cw6p4EHD18yMDExvJs+jeFtZyfDnxfP6eOAFZ7+fxXPnmQQi4t/ySIlyfC2q4tBMC2d4XVTA30cAEqEqscOMmieOwXOhvwREQxi7Z0M1znpWBApnj3BoHv8MNgBgpmZDCLlFfQrCRcHhv9VO3qQQcDW9iWHri7D+xkzGAQzsxhe19fSJwpguSDtxq2XjFycDG86OxneT59Gv0SILRuCHEG3EGiaOPcZuDbctRFcB8AqI+6FrDSNAoYzEOMZ4Q7YuQEsQHcH9EtIgUMg7cFDsANgtaGG/2b6hACGA6C1Id0cMJoG+iWkLjIwMIh+rmwGxzlvO6QAKvQFJw3aAlaG54wTpKRc//9j6P1c2SxCVwewMjxnEGIIAwCfu+ioy0e8vgAAAABJRU5ErkJggg==",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            operator: ["Билайн", "Мегафон", "МТС", "Tele2"],
            value: "Россия",
            code: "+7",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAo0lEQVRIS2PcuO+I+u07D/d/+/5DkoGOgIuT47mqirwjY8+spc/obTnMnyBHMDZNnPsfJFCcHkdH/zMw9M5cBLZv1AGjITDwIcCoWf+fhZWNwcotnq654NDW2ZBcMOqA0RAYDYEBD4HlAgzg2tBaRoKu5cDRJy8g5cCoA0ZDYDCEwGUGBgYdumYBhGXnGZdxM4gzsTHs+/+fQYvOjjj//zeDJwBxf34P7r+YUwAAAABJRU5ErkJggg==",
            mask: "XX (XXX) XXX-XX-XX",
            count: 12,
        },
        {
            operator: ["Lifecell", "Vodafone", "Київстар"],
            value: "Украина",
            code: "+380",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAkElEQVRIS2Nk8JstzvKfcc9/BgYdBjoCRgaGK38Y/7swsvjOuUxvy2H+BDmCkdl3zn+QgKa5Kx39z8Bw/eRusH2jDhgNgdEQGA2BgQ+BUw0M4JLQ1JuRriXh6a1gaxkYRx0wGgKjITAaAoMhBC4z0LlFDC9yGRnOM55oZRBn+s2wj4GBQYuuZTEjw/l/LAyeAIt/eV49symwAAAAAElFTkSuQmCC",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            operator: ["Orange", "Play", "Plus", "T-mobile"],
            value: "Польша",
            code: "+48",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAlklEQVRIS2PcuO+I+u07D/d/+/5DkoGOgIuT47mqirwjY8+spc/obTnMnyBHMDZNnPsfJFCcHkdH/zMw9M5cBLZv1AGjITAaAqMhMPAhMJmBAVwSeqlK07Uk3Hb7KaQkHHXAaAiMhsBoCAx4CMxkZnr26+8/uraIYUUuOzPTE8aNvLzqL759PfDr7z8JepbFIMvFubhdABr9hiLY/1hmAAAAAElFTkSuQmCC",
            mask: "XXX XXX-XXX-XXX",
            count: 12,
        },
        {
            operator: ["Telia", "Bite", "Tele2"],
            value: "Литва",
            code: "+370",
            img: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAYklEQVRYR2NkGGDAOMD2M4w6YDQEGD9sUw8ZyITI+HG7xv9RB4yGwICGwJ31OgObCPVy3EcdMBoCIzwEFqpbDGwIbJA3G3XAaAgMbAhMjTDfMqC14UBaDrJ7tFk+GgIDHgIAmVcsLny2L4UAAAAASUVORK5CYII=",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 12,
        },
        {
            operator: ["LMT", "Tele2", "Bite"],
            value: "Латвия",
            code: "+371",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAi0lEQVRIS2PsZhf0Zfz3bzYDI6M4Az3B//8v/zMxpTL2sPK/oLvlMI/+//+SsYdN4D+I76quSU//M+y+eR1s36gDRkNgNAQGPgSaJs79z87OxpAaHUrXcmDKvKWQcmDUAQMeAqN1wWgIjIbAaAgMaKOUgeEZI7hZzvBvDsN/RjG61kYMDM/+MzJmAABXiXXUUZYtcAAAAABJRU5ErkJggg==",
            mask: "XXXX XXXX-XXXX",
            count: 12,
        },
    ];

    let [Select, setSelect] = useState("+375");
    let [Check, setCheck] = useState(false);
    let [id, setId] = useState(0);

    const lest = NumArray.map((num) => <input
        type="text"
        className="dinput"
        onClick={e => setSelect(num.code)}
        value={num.value}
        style={{backgroundImage: `url(${num.img})`}}
        key={num.value}
        readOnly/>)

    function f() {
        Select.toString()
        for (let i = 0; i < NumArray.length; i++) {
            if (Select[0] + Select[1] === NumArray[i].code || Select[0] + Select[1] + Select[2] === NumArray[i].code || Select[0] + Select[1] + Select[2] + Select[3] === NumArray[i].code) {
                if (Select.length === NumArray[i].count) {
                    let x = NumArray[i].mask;
                    for (let j = 0, k = 0; j < x.length; j++) {
                        if (x[j] === "X") {
                            x = x.replace("X", Select[k])
                            k++;
                        }
                    }
                    setId(i);
                    setSelect(x)
                }
            }
        }

        let lest1 = [];
        for (let i = 0; i < NumArray[id].operator.length; i++) {
            lest1.push(

                <label className="operator">
                <input
                    type="checkbox"
                    //onClick={e => setSelect(num.code)}
                    value={NumArray[id].operator[i]}
                    //key={num.value}
                    readOnly/>
                    {NumArray[id].operator[i]}
                </label>

            )
        }
        if (Check) {
            return (
                <div className="lest">
                    <form>
                        {lest}
                    </form>
                </div>
            )
        } else {
            return (
                <div className="lest">
                    <form>{lest1}</form>
                </div>
            )
        }
    }

    return (
        <div>
            <form action="">
                <input
                    className="fff"
                    type="text"
                    value="&#127757;"
                    disabled
                />
                <input
                    className="mainIn"
                    type="text"
                    maxLength={14}
                    value={Select}
                    onChange={e => setSelect(e.target.value)}
                    onClick={e1 => setCheck(!Check)}
                />
            </form>
            {f()}
        </div>);
};

export default PhoneInput;