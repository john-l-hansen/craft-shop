import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonOption(){

    const [buttonOptionState, setButtonOptionState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonOptionState({
            ...buttonOptionState,
            showColor:!buttonOptionState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonOptionState({
            ...buttonOptionState,
            showColor:!buttonOptionState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonOptionState({
            ...buttonOptionState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonOptionCompString = '<div class="flex justify-center items-center bg-white mt-5" style="margin-bottom:100px">\n'+
    '                <button class="relative py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 bg-white">\n'+
    '                    <div class="mr-3 text-sm leading-5 font-bold ' + buttonOptionState.selectedFont + '">Option</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                            <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="#444545"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="absolute flex flex-col justify-center items-center bg-white left-0 top-0 mt-12 h-28 w-24 border border-gray-100 rounded-lg" style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)">\n'+
    '                            <div class="px-4 text-gray-800 hover:bg-gray-100 rounded ' + buttonOptionState.selectedFont + '">Option 1</div>\n'+
    '                            <div class="px-4 text-gray-800 hover:bg-gray-100 rounded ' + buttonOptionState.selectedFont + '">Option 2</div>\n'+
    '                            <div class="px-4 text-gray-800 hover:bg-gray-100 rounded ' + buttonOptionState.selectedFont + '">Option 3</div>\n'+
    '                    </div>\n'+
    '                </button>\n'+
    '                <button class="relative py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-white bg-gray-800 ml-3">\n'+
    '                    <div class="mr-3 text-sm leading-5 font-bold ' + buttonOptionState.selectedFont + '">Option</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                            <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="absolute flex flex-col justify-center items-center bg-white left-0 top-0 mt-12 h-28 w-24 border border-gray-100 rounded-lg" style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)">\n'+
    '                            <div class="px-4 text-gray-800 hover:bg-gray-100 rounded ' + buttonOptionState.selectedFont + '">Option 1</div>\n'+
    '                            <div class="px-4 text-gray-800 hover:bg-gray-100 rounded ' + buttonOptionState.selectedFont + '">Option 2</div>\n'+
    '                            <div class="px-4 text-gray-800 hover:bg-gray-100 rounded ' + buttonOptionState.selectedFont + '">Option 3</div>\n'+
    '                    </div>\n'+
    '                </button>\n'+
    '            </div>';

    let buttonOptionComp = (
        <div>
            {/*component start*/}
            <div className="flex justify-center items-center  mt-5" style={{"marginBottom":"100px"}}>
                <button className="relative py-2 px-6 flex justify-center items-center border border-solid border-gray-800 dark:bg-gray-800 dark:text-white rounded-lg font-medium text-gray-800 bg-white">
                    <div className={"mr-3 text-sm leading-5 font-bold " + buttonOptionState.selectedFont}>Option</div>
                    <div>
                        <svg class="fill-current" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z" fill=""/>
                        </svg>
                    </div>
                    <div className="absolute flex flex-col justify-center items-center text-gray-800 bg-white dark:bg-gray-800 dark:text-white left-0 top-0 mt-12 h-28 w-24 border border-gray-100 dark:border-none rounded-lg" style={{"boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                            <div className={"px-4 hover:bg-gray-100 rounded " + buttonOptionState.selectedFont}>Option 1</div>
                            <div className={"px-4 hover:bg-gray-100 rounded " + buttonOptionState.selectedFont}>Option 2</div>
                            <div className={"px-4  hover:bg-gray-100 rounded " + buttonOptionState.selectedFont}>Option 3</div>
                    </div>
                </button>
                
            </div>
        </div>
    )

    return(
        <>
            <PreviewWindowDisabled
            buttonOptionComp={buttonOptionComp} 
            buttonOptionCompString={buttonOptionCompString}
            showColor={buttonOptionState.showColor} 
            selectedColor={buttonOptionState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}