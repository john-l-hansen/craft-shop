import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function EcommerceSix(){
    const [ecommerceSixState, setEcommerceSixState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceSixState({
            ...ecommerceSixState,
            showColor:!ecommerceSixState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceSixState({
            ...ecommerceSixState,
            showColor:!ecommerceSixState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceSixState({
            ...ecommerceSixState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceSixComp = (
            
                <div className=" dark:bg-gray-900 px-4 py-4 text-center bg-white rounded-xl border" style={{"width":"480px", "height":"auto"}}>
                    <div className="mb-8">
                        <h2 className={"p-0 m-0 dark:text-blackfont-bold text-xl" + ecommerceSixState.selectedFont}>Payment Information</h2>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <button className={"dark:text-black w-48% px-6 py-2 bg-[#FFC555] " + ecommerceSixState.selectedFont}>Paypal</button>
                        <button className={"dark:text-black w-48% px-6 py-2 bg-white border border-gray-100 " + ecommerceSixState.selectedFont}>G-Pay</button>
                    </div>
                    <div className="w-full mt-3 flex justify-between items-center">
                        <div className="w-45% border-b"></div>
                        <div className={"text-xs " + ecommerceSixState.selectedFont}>OR</div>
                        <div className="w-45% border-b"></div>
                    </div>
                    <div className="mt-[18px] mb-8">
                        <h3 className={"dark:text-gray-200 p-0 m-0 text-gray-700 text-sm " + ecommerceSixState.selectedFont}>Debit / Credid Card</h3>
                    </div>
                    <div className="dark:bg-gray-800 dark:text-gray-50 w-full mb-3 flex justify-center items-center h-12 bg-gray-50 rounded">
                        <div className="flex justify-center items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio"
            class="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 focus:ring-gray-900 dark:focus:ring-transparent focus:ring-2 dark:bg-transparent dark:border-gray-600"></input>
                            <div className="ml-3"><h3 className={"dark:text-gray-300 p-0 m-0 " + ecommerceSixState.selectedFont}>Pay Now</h3></div>
                        </div>
                        <div className="flex justify-center items-center ml-5">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio"
            class="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 focus:ring-gray-900 dark:focus:ring-transparent focus:ring-2 dark:bg-transparent dark:border-gray-600" ></input>
                            <div className="ml-3"><h3 className={"dark:text-gray-300 p-0 m-0 " + ecommerceSixState.selectedFont}>Collect</h3></div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h3 className={"p-0 m-0 text-gray-500 text-sm " + ecommerceSixState.selectedFont}>You will be charged once the shipment has been picked up.</h3>
                    </div>
                    <div className="mb-5">
                        <input className="dark:bg-black dark:border-gray-700 w-full h-10 border border-gray-200 bg-gray-50 rounded-lg" value="" type="text"></input>
                    </div>
                    <div className="mb-5">
                        <input className="dark:bg-black dark:border-gray-700 w-full h-10 border border-gray-200 bg-gray-50 rounded-lg" value="" type="text"></input>
                    </div>
                    <div className="mb-16 flex justify-start">
                        <input className="w-1/3 h-10 border border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-700 rounded-lg" value="MM/YY" type="text"></input>
                        <input className="dark:bg-black dark:border-gray-700 w-1/3 h-10 border border-gray-200 bg-gray-50 rounded-lg ml-3" value="###" type="text"></input>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <button className={"w-48% px-6 py-1 bg-white border dark:bg-transparent border-gray-500 dark:border-gray-50 rounded-lg font-lato dark:text-white  " + ecommerceSixState.selectedFont}>Cancel</button>
                        <button className={"w-48% px-6 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg font-lato text-gray-500 text-sm " + ecommerceSixState.selectedFont}>Next</button>
                    </div>
                </div>
           
    )

        let ecommerceSixCompString =  '<div class="px-4 py-4 text-center bg-white rounded-xl border" style="width:480px; height:auto">\n'+
        '                    <div class="mb-8">\n'+
        '                        <h2 class="p-0 m-0 font-bold text-xl ' + ecommerceSixState.selectedFont + '">Payment Information</h2>\n'+
        '                    </div>\n'+
        '                    <div class="w-full flex justify-between items-center">\n'+
        '                        <button class="w-48% px-6 py-2 bg-[#FFC555] ' + ecommerceSixState.selectedFont + '">Paypal</button>\n'+
        '                        <button class="w-48% px-6 py-2 bg-white border border-gray-100 ' + ecommerceSixState.selectedFont + '">G-Pay</button>\n'+
        '                    </div>\n'+
        '                    <div class="w-full mt-3 flex justify-between items-center">\n'+
        '                        <div class="w-45% border-b"></div>\n'+
        '                        <div class="text-xs ' + ecommerceSixState.selectedFont + '">OR</div>\n'+
        '                        <div class="w-45% border-b"></div>\n'+
        '                    </div>\n'+
        '                    <div class="mb-8">\n'+
        '                        <h3 class="p-0 m-0 text-gray-700 text-sm ' + ecommerceSixState.selectedFont + '">Debit / Credid Card</h3>\n'+
        '                    </div>\n'+
        '                    <div class="w-full mb-3 flex justify-center items-center h-12 bg-gray-50 rounded">\n'+
        '                        <div class="flex justify-center items-center">\n'+
        '                            <input type="radio"></input>\n'+
        '                            <div class="ml-3"><h3 class="p-0 m-0 ' + ecommerceSixState.selectedFont + '">Pay Now</h3></div>\n'+
        '                        </div>\n'+
        '                        <div class="flex justify-center items-center ml-5">\n'+
        '                            <input type="radio"></input>\n'+
        '                            <div class="ml-3"><h3 class="p-0 m-0 ' + ecommerceSixState.selectedFont + '">Collect</h3></div>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                    <div class="mb-5">\n'+
        '                        <h3 class="p-0 m-0 text-gray-500 text-sm ' + ecommerceSixState.selectedFont + '">You will be charged once the shipment has been picked up.</h3>\n'+
        '                    </div>\n'+
        '                    <div class="mb-5">\n'+
        '                        <input class="w-full h-10 border border-gray-200 bg-gray-50 rounded-lg" value="" type="text"></input>\n'+
        '                    </div>\n'+
        '                    <div class="mb-5">\n'+
        '                        <input class="w-full h-10 border border-gray-200 bg-gray-50 rounded-lg" value="" type="text"></input>\n'+
        '                    </div>\n'+
        '                    <div class="mb-16 flex justify-start">\n'+
        '                        <input class="w-1/3 h-10 border border-gray-200 bg-gray-50 rounded-lg" value="MM/YY" type="text"></input>\n'+
        '                        <input class="w-1/3 h-10 border border-gray-200 bg-gray-50 rounded-lg ml-3" value="" type="text"></input>\n'+
        '                    </div>\n'+
        '                    <div class="w-full flex justify-between items-center">\n'+
        '                        <button class="w-48% px-6 py-1 bg-white border border-gray-500 rounded-lg ' + ecommerceSixState.selectedFont + '">Cancel</button>\n'+
        '                        <button class="w-48% px-6 py-1 bg-gray-200 rounded-lg ' + ecommerceSixState.selectedFont + '">Next</button>\n'+
        '                    </div>\n'+
        '                </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            ecommerceSixComp={ecommerceSixComp} 
            ecommerceSixCompString={ecommerceSixCompString}
            showColor={ecommerceSixState.showColor} 
            selectedColor={ecommerceSixState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}