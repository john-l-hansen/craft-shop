import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Boxcard(){
    const [boxcardState, setBoxcardState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setBoxcardState({
            ...boxcardState,
            showColor:!boxcardState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setBoxcardState({
            ...boxcardState,
            showColor:!boxcardState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setBoxcardState({
            ...boxcardState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let boxcardComp = (
        <div>
            <div className="flex justify-center items-center ">

                <button className="border dark:border-gray-700 dark:bg-gray-900 border-gray-200 rounded-xl" style={{"width":"180px", "height":"auto"}}>
                    <div className="dark:text-gray-700 px-3 pt-3 pb-5 w-full flex justify-end items-center">
                        <div>
                            <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#ECECEC"/>
                                <path d="M10.6667 16.6668H12.6667V18.6668H10.6667V16.6668ZM12 5.3335C15.5667 5.48016 17.12 9.08016 15 11.7802C14.4467 12.4468 13.5533 12.8868 13.1133 13.4468C12.6667 14.0002 12.6667 14.6668 12.6667 15.3335H10.6667C10.6667 14.2202 10.6667 13.2802 11.1133 12.6135C11.5533 11.9468 12.4467 11.5535 13 11.1135C14.6133 9.62016 14.2133 7.50683 12 7.3335C11.4696 7.3335 10.9609 7.54421 10.5858 7.91928C10.2107 8.29436 10 8.80306 10 9.3335H8C8 8.27263 8.42143 7.25521 9.17157 6.50507C9.92172 5.75492 10.9391 5.3335 12 5.3335Z" fill="#444545"/>
                            </svg>
                        </div>
                    </div>
                    <div className="px-5 pb-5 flex justify-center items-start">
                        <div>
                            <svg class="fill-current" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.4825 4C35.4825 2.075 33.925 0.5 32 0.5H4C2.075 0.5 0.5 2.075 0.5 4V25C0.5 26.925 2.075 28.5 4 28.5H28.5L35.5 35.5L35.4825 4ZM32 4V27.0475L29.9525 25H4V4H32ZM7.5 18H28.5V21.5H7.5V18ZM7.5 12.75H28.5V16.25H7.5V12.75ZM7.5 7.5H28.5V11H7.5V7.5Z" fill=""/>
                            </svg>
                        </div>
                    </div>
                    <div className="px-5 pb-10 flex justify-center items-start">
                            <h2 className={"p-0 m-0 " + boxcardState.selectedFont}>Enabled</h2>
                    </div>
                </button>

                <button className="border border-gray-200 rounded-xl disabled:bg-gray-100 ml-3" style={{"width":"180px", "height":"auto"}} disabled>
                    <div className="px-3 pt-3 pb-5 w-full flex justify-end items-center">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#CECECE"/>
                                <path d="M10.6667 16.6668H12.6667V18.6668H10.6667V16.6668ZM12 5.3335C15.5667 5.48016 17.12 9.08016 15 11.7802C14.4467 12.4468 13.5533 12.8868 13.1133 13.4468C12.6667 14.0002 12.6667 14.6668 12.6667 15.3335H10.6667C10.6667 14.2202 10.6667 13.2802 11.1133 12.6135C11.5533 11.9468 12.4467 11.5535 13 11.1135C14.6133 9.62016 14.2133 7.50683 12 7.3335C11.4696 7.3335 10.9609 7.54421 10.5858 7.91928C10.2107 8.29436 10 8.80306 10 9.3335H8C8 8.27263 8.42143 7.25521 9.17157 6.50507C9.92172 5.75492 10.9391 5.3335 12 5.3335Z" fill="#88898B"/>
                            </svg>
                        </div>
                    </div>
                    <div className="px-5 pb-5 flex justify-center items-start">
                        <div>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.4825 4C35.4825 2.075 33.925 0.5 32 0.5H4C2.075 0.5 0.5 2.075 0.5 4V25C0.5 26.925 2.075 28.5 4 28.5H28.5L35.5 35.5L35.4825 4ZM32 4V27.0475L29.9525 25H4V4H32ZM7.5 18H28.5V21.5H7.5V18ZM7.5 12.75H28.5V16.25H7.5V12.75ZM7.5 7.5H28.5V11H7.5V7.5Z" fill="#88898B"/>
                        </svg>
                        </div>
                    </div>
                    <div className="px-5 pb-10 flex justify-center items-start">
                            <h2 className={"p-0 m-0 text-gray-700 " + boxcardState.selectedFont}>Disabled</h2>
                    </div>
                </button>

            </div>
        </div>
           
    )

        let boxcardCompString = '<button class="border border-gray-200 rounded-xl" style="width:180px; height:auto">\n'+
        '                    <div class="px-3 pt-3 pb-5 w-full flex justify-end items-center">\n'+
        '                        <div>\n'+
        '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <rect width="24" height="24" rx="12" fill="#ECECEC"/>\n'+
        '                                <path d="M10.6667 16.6668H12.6667V18.6668H10.6667V16.6668ZM12 5.3335C15.5667 5.48016 17.12 9.08016 15 11.7802C14.4467 12.4468 13.5533 12.8868 13.1133 13.4468C12.6667 14.0002 12.6667 14.6668 12.6667 15.3335H10.6667C10.6667 14.2202 10.6667 13.2802 11.1133 12.6135C11.5533 11.9468 12.4467 11.5535 13 11.1135C14.6133 9.62016 14.2133 7.50683 12 7.3335C11.4696 7.3335 10.9609 7.54421 10.5858 7.91928C10.2107 8.29436 10 8.80306 10 9.3335H8C8 8.27263 8.42143 7.25521 9.17157 6.50507C9.92172 5.75492 10.9391 5.3335 12 5.3335Z" fill="#444545"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                    <div class="px-5 pb-5 flex justify-center items-start">\n'+
        '                        <div>\n'+
        '                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M35.4825 4C35.4825 2.075 33.925 0.5 32 0.5H4C2.075 0.5 0.5 2.075 0.5 4V25C0.5 26.925 2.075 28.5 4 28.5H28.5L35.5 35.5L35.4825 4ZM32 4V27.0475L29.9525 25H4V4H32ZM7.5 18H28.5V21.5H7.5V18ZM7.5 12.75H28.5V16.25H7.5V12.75ZM7.5 7.5H28.5V11H7.5V7.5Z" fill="#323232"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                    <div class="px-5 pb-10 flex justify-center items-start">\n'+
        '                            <h2 class="p-0 m-0 ' + boxcardState.selectedFont + '">Enabled</h2>\n'+
        '                    </div>\n'+
        '                </button>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            boxcardComp={boxcardComp} 
            boxcardCompString={boxcardCompString}
            showColor={boxcardState.showColor} 
            selectedColor={boxcardState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}