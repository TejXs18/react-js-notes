import { useState } from "react";

function ColorButton(){

    const [color,setColor]=useState("olive")

return(
    <div className=" w-screen h-screen duration-1000" 
    style={{backgroundColor:color}}
    
    >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2"
        >
            <div className="flex flex-wrap justify-center 
            gap-3 shadow-lg bg-yellow-200 px-2 py-2 rounded-3xl
            
            ">
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"red"}}
                onClick={({color}) =>setColor('red')}
                >RED</button>
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"green"}}
                onClick={({color})=> setColor('green')}
                >Green</button>
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"blue"}}
                onClick={({color})=>setColor('blue')}
                >Blue</button>
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"grey"}}
                onClick={({color})=>setColor('grey')}
                >grey</button>
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"pink"}}
                onClick={({color})=>setColor('pink')}
                >pink</button>
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"Violet"}}
                onClick={({color})=>setColor('Violet')}
                >Violet</button>
                <button className=" outline-none px-2  rounded-full text-white shadow-3xl"
                style={{backgroundColor:"brown"}}
                onClick={({color})=>setColor('brown')}
                >Blue</button>
            </div>
        </div>

    </div>
    
)

}



export default ColorButton;