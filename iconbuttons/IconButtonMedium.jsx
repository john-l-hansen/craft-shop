import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function IconButtonMedium(){
    const [iconbuttonmediumState, setIconbuttonmediumState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-700",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setIconbuttonmediumState({
            ...iconbuttonmediumState,
            showColor:!iconbuttonmediumState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setIconbuttonmediumState({
            ...iconbuttonmediumState,
            showColor:!iconbuttonmediumState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setIconbuttonmediumState({
            ...iconbuttonmediumState,
            selectedFont: e.target.value,
        })
    }


    let iconbuttonmediumComp = (
            
      <div>
        <button className={"w-10 h-10 flex justify-center items-center rounded-lg font-medium text-gray-900 dark:text-white leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-600"} style={{"boxShadow": "0px 4px 10px 3px rgba(0, 0, 0, 0.2)"}}>
            <svg class="fill-current" width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00065 3.66665C2.91732 3.66665 3.66732 2.91665 3.66732 1.99998C3.66732 1.08331 2.91732 0.333313 2.00065 0.333313C1.08398 0.333313 0.333984 1.08331 0.333984 1.99998C0.333984 2.91665 1.08398 3.66665 2.00065 3.66665ZM2.00065 5.33331C1.08398 5.33331 0.333984 6.08331 0.333984 6.99998C0.333984 7.91665 1.08398 8.66665 2.00065 8.66665C2.91732 8.66665 3.66732 7.91665 3.66732 6.99998C3.66732 6.08331 2.91732 5.33331 2.00065 5.33331ZM2.00065 10.3333C1.08398 10.3333 0.333984 11.0833 0.333984 12C0.333984 12.9166 1.08398 13.6666 2.00065 13.6666C2.91732 13.6666 3.66732 12.9166 3.66732 12C3.66732 11.0833 2.91732 10.3333 2.00065 10.3333Z" fill=""/>
            </svg>
        </button>
      </div>
           
    )

        let iconbuttonmediumCompString = '<button class="w-10 h-10 flex justify-center items-center rounded-xl font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400" style="boxShadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n'+
        '            <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M2.00065 3.66665C2.91732 3.66665 3.66732 2.91665 3.66732 1.99998C3.66732 1.08331 2.91732 0.333313 2.00065 0.333313C1.08398 0.333313 0.333984 1.08331 0.333984 1.99998C0.333984 2.91665 1.08398 3.66665 2.00065 3.66665ZM2.00065 5.33331C1.08398 5.33331 0.333984 6.08331 0.333984 6.99998C0.333984 7.91665 1.08398 8.66665 2.00065 8.66665C2.91732 8.66665 3.66732 7.91665 3.66732 6.99998C3.66732 6.08331 2.91732 5.33331 2.00065 5.33331ZM2.00065 10.3333C1.08398 10.3333 0.333984 11.0833 0.333984 12C0.333984 12.9166 1.08398 13.6666 2.00065 13.6666C2.91732 13.6666 3.66732 12.9166 3.66732 12C3.66732 11.0833 2.91732 10.3333 2.00065 10.3333Z" fill="#323232"/>\n'+
        '            </svg>\n'+
        '        </button>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            iconbuttonmediumComp={iconbuttonmediumComp} 
            iconbuttonmediumCompString={iconbuttonmediumCompString}
            showColor={iconbuttonmediumState.showColor} 
            selectedColor={iconbuttonmediumState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}