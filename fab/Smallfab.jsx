import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Smallfab(){
    const [smallfabState, setSmallfabState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setSmallfabState({
            ...smallfabState,
            showColor:!smallfabState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setSmallfabState({
            ...smallfabState,
            showColor:!smallfabState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setSmallfabState({
            ...smallfabState,
            selectedFont: e.target.value,
        })
    }


    let smallfabComp = (
            
      <div>
        <button className={"px-7 py-7 flex justify-center items-center rounded-xl font-medium text-gray-900 dark:text-white leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 active:bg-gray-400"} style={{"boxShadow": "0px 4px 10px 3px rgba(0, 0, 0, 0.2)"}}>
        <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="" />
    </svg>
        </button>
      </div>
           
    )

        let smallfabCompString = '<button class="px-3 py-3 flex justify-center items-center rounded-xl font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n'+
        '            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '            <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="#323232"/>\n'+
        '            </svg>\n'+
        '        </button>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            smallfabComp={smallfabComp} 
            smallfabCompString={smallfabCompString}
            showColor={smallfabState.showColor} 
            selectedColor={smallfabState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}