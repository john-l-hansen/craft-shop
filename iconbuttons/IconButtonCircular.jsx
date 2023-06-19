import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function IconButtonCircular(){
    const [iconbuttoncircularState, setIconbuttoncircularState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-700",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setIconbuttoncircularState({
            ...iconbuttoncircularState,
            showColor:!iconbuttoncircularState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setIconbuttoncircularState({
            ...iconbuttoncircularState,
            showColor:!iconbuttoncircularState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setIconbuttoncircularState({
            ...iconbuttoncircularState,
            selectedFont: e.target.value,
        })
    }


    let iconbuttonsmallComp = (
            
      <div>
        <button className={"w-7 h-7 flex justify-center items-center rounded-lg font-medium text-gray-900 dark:text-white leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-600"} style={{"boxShadow": "0px 4px 10px 3px rgba(0, 0, 0, 0.2)"}}>
        <svg class="fill-current" width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill=""/>
        </svg>
        </button>
      </div>
           
    )

        let iconbuttonsmallCompString = '<button class="w-10 h-10 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400" style="boxShadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n'+
        '        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232"/>\n'+
        '        </svg>\n'+
        '        </button>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            iconbuttonsmallComp={iconbuttonsmallComp} 
            iconbuttonsmallCompString={iconbuttonsmallCompString}
            showColor={iconbuttoncircularState.showColor} 
            selectedColor={iconbuttoncircularState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}