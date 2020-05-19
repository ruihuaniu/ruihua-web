import React, { useEffect, useState } from 'react'
import axios from 'axios'



function lucky() {

    const [randomQuote, setRandomQuote] = useState("")
    const [randomNum, setRandomNum] = useState(0)




    useEffect(() => {

        const number = parseInt(Math.random() * 200)  // a random integer between 0 to 999
        setRandomNum(number)


        async function getLuckyQuote() {

            try {

                const result = await axios.get(`https://numbersapi.p.rapidapi.com/${number}/trivia`, {
                    "headers": {
                        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
                        "x-rapidapi-key": "ceb11507cbmsh666fb29a389ccc2p12fc7cjsn863d8ea29b5b"
                    }
                })
                const data = await result.data
                setRandomQuote(data)
                // console.log("result is ", result);
            } catch (error) {
                console.log(error);
            }
        }

        getLuckyQuote()

        // if (randomNum !== null) {
        //     getLuckyQuote()
        // }

    }, [])

    console.log("random number is", randomNum);
    //console.log("number is", number);

    return (
        <div className="lucky-container">
            <div className="lucky-text">
                <div className="title" >Hey, you are here :)</div>
                <div>Special number !  <span style={{ fontSize: '35px', fontWeight: 'bold' }}>{randomNum}</span> </div>

                <div className="quote">"{randomQuote}"</div>
            </div>


            <style jsx>{`
            .lucky-container{
                width:100%;
                min-height: 20vh;
                background: url("/images/data-sea.jpg") no-repeat scroll center;
                background-size:cover;
                text-align:center;   
                             
            }

            .lucky-text{
                // display:flex;
                // align-items: center;
                // justify-content:center;
                color:#fff;
                font-size:25px;
               
                min-height: 20vh;
                padding:2vh 0 0 0;
            }

            .title{
                font-weight:bold;
                font-size:35px;
            }

            .quote{
                background: #fff;
                color:#000;
                mix-blend-mode:screen;
                font-size:35px;
                font-style:italic;
                font-weight:bold;
                padding:20px;
            }
            `} </style>
        </div>
    )
}

export default lucky
