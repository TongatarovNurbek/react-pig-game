
import React, { useState } from 'react'


const Piggame : React.FC = () => {
     const [current,setcurrent] = useState(0)
     const [random,setrandom] = useState(0)
     const [qiymat1,setqiymat1] = useState(0)
     const [qiymat2,setqiymat2] = useState(0)
     const [acitve,setactive] = useState(true)
     const [styleBox1,setstylebox1] = useState({backgroundColor: "rgb(247, 193, 202)"})
     const [styleBox2,setstylebox2] = useState({backgroundColor: "rgb(192, 91, 106)"})


    const randomFn = () => {
        if (acitve) {
            setstylebox1({backgroundColor: "rgb(247, 193, 202)"})
            setstylebox2({backgroundColor: "rgb(192, 91, 106)"})
            
        }else {
            setstylebox1({backgroundColor: "rgb(192, 91, 106)"})
            setstylebox2({backgroundColor: "rgb(247, 193, 202)"})
            
        }
        let randomD:number = Math.floor(Math.random() * 6)+1
        setrandom(randomD)

        if (randomD === 1) {
            setcurrent(0)
            setactive(acitve ? false : true)
            return
        }
        setcurrent(current + randomD)
     }

    const downloadFn = ():void => {
        if (acitve) {
            setqiymat1(qiymat1 + current)
            setrandom(0)
            setcurrent(0)
            setactive(false)
        } else {
            setqiymat2(qiymat2 + current)
            setrandom(0)
            setcurrent(0)
            setactive(true)
        }
    } 

    const restart = () => {
        setcurrent(0)
        setrandom(0)
        setqiymat1(0)
        setqiymat2(0)
        setactive(true)
    }

    return (
        <div className="box-a">
        
        <div className="box-1" style={styleBox1}>
            <p className="name-1" id="name1">Player 1</p>
            <p className="qiymat-1" id="qiymat1">{qiymat1}</p>

            <div className="div-p-1">
                <p className="current">Current</p>
                <p className="ball-1" id="ball1"> {acitve ? current : 0}</p>
            </div>
            <button onClick={() => {restart()}}>Restart</button>
            <p className="ranBall" id="ranBall">{random}</p>
            <i className="fa-solid fa-dice" id="tosh" onClick={() => {randomFn()}}></i>
            <i className="fa-solid fa-download" id="download" onClick={() => {downloadFn()}}></i>
        </div>
        <div className="box-2" style={styleBox2}>
            <p className="name-1" id="name2">Player 2</p>
            <p className="qiymat-1" id="qiymat2">{qiymat2}</p>

            <div className="div-p-1">
                <p className="current">Current</p>
                <p className="ball-1" id="ball2">{!acitve ? current : 0}</p>
            </div>
        </div>

    </div>
    )
}


export default Piggame
