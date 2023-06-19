import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonTooltip(){

    const [buttonTooltipState, setButtonTooltipState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonTooltipState({
            ...buttonTooltipState,
            showColor:!buttonTooltipState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonTooltipState({
            ...buttonTooltipState,
            showColor:!buttonTooltipState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonTooltipState({
            ...buttonTooltipState,
            selectedFont: e.target.value,
        })
    }

    

    let buttonTooltipComp = (
        <div>
            {/*component start*/}

            <div className="flex justify-center items-center">
                <button className={"w-7 h-7 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400"}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.37919 7.23317C3.89253 6.3065 4.87919 5.75984 5.45253 4.93984C6.05919 4.07984 5.71919 2.47317 3.99919 2.47317C2.87253 2.47317 2.31919 3.3265 2.08586 4.03317L0.359192 3.3065C0.832525 1.8865 2.11919 0.666504 3.99253 0.666504C5.55919 0.666504 6.63253 1.37984 7.17919 2.27317C7.64586 3.03984 7.91919 4.47317 7.19919 5.53984C6.39919 6.71984 5.63253 7.07984 5.21919 7.83984C5.05253 8.1465 4.98586 8.3465 4.98586 9.33317H3.05919C3.05253 8.81317 2.97253 7.9665 3.37919 7.23317ZM5.33253 11.9998C5.33253 12.7332 4.73253 13.3332 3.99919 13.3332C3.26586 13.3332 2.66586 12.7332 2.66586 11.9998C2.66586 11.2665 3.26586 10.6665 3.99919 10.6665C4.73253 10.6665 5.33253 11.2665 5.33253 11.9998Z" fill="#444545"/>
                    </svg>
                </button>
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41421 9.41421C0.633164 8.63316 0.633165 7.36683 1.41421 6.58579L8 0V16L1.41421 9.41421Z" fill="#ECECEC"/>
                </svg>
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-black bg-gray-100 " + buttonTooltipState.selectedFont}>
                    Tooltip
                </button>
            </div>
        </div>
    )

    let buttonTooltipCompString = '<div class="flex justify-center items-center">\n'+
    '                <button class="w-7 h-7 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400">\n'+
    '                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                        <path d="M3.37919 7.23317C3.89253 6.3065 4.87919 5.75984 5.45253 4.93984C6.05919 4.07984 5.71919 2.47317 3.99919 2.47317C2.87253 2.47317 2.31919 3.3265 2.08586 4.03317L0.359192 3.3065C0.832525 1.8865 2.11919 0.666504 3.99253 0.666504C5.55919 0.666504 6.63253 1.37984 7.17919 2.27317C7.64586 3.03984 7.91919 4.47317 7.19919 5.53984C6.39919 6.71984 5.63253 7.07984 5.21919 7.83984C5.05253 8.1465 4.98586 8.3465 4.98586 9.33317H3.05919C3.05253 8.81317 2.97253 7.9665 3.37919 7.23317ZM5.33253 11.9998C5.33253 12.7332 4.73253 13.3332 3.99919 13.3332C3.26586 13.3332 2.66586 12.7332 2.66586 11.9998C2.66586 11.2665 3.26586 10.6665 3.99919 10.6665C4.73253 10.6665 5.33253 11.2665 5.33253 11.9998Z" fill="#444545"/>\n'+
    '                    </svg>\n'+
    '                </button>\n'+
    '                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                    <path d="M1.41421 9.41421C0.633164 8.63316 0.633165 7.36683 1.41421 6.58579L8 0V16L1.41421 9.41421Z" fill="#ECECEC"/>\n'+
    '                </svg>\n'+
    '                <button class="py-1.5 px-3 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-black bg-gray-100 " + buttonTooltipState.selectedFont>\n'+
    '                    Tooltip\n'+
    '                </button>\n'+
    '            </div>';
    
    
    return(
        <>
            <PreviewWindowDisabled
            buttonTooltipComp={buttonTooltipComp} 
            buttonTooltipCompString={buttonTooltipCompString}
            showColor={buttonTooltipState.showColor} 
            selectedColor={buttonTooltipState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}