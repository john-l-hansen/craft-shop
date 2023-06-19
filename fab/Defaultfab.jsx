import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Defaultfab(){
    const [defaultfabState, setDefaultfabState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setDefaultfabState({
            ...defaultfabState,
            showColor:!defaultfabState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setDefaultfabState({
            ...defaultfabState,
            showColor:!defaultfabState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setDefaultfabState({
            ...defaultfabState,
            selectedFont: e.target.value,
        })
    }


    let defaultfabComp = (
            
        <button className={"px-5 py-5 flex justify-center items-center rounded-xl font-medium text-gray-900 dark:text-white  leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 active:bg-gray-400"} style={{"boxShadow": "0px 4px 10px 3px rgba(0, 0, 0, 0.2)"}}>
            <svg
      class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="" />
    </svg>
        </button>
           
    )

        let defaultfabCompString = '<button class="px-5 py-5 flex justify-center items-center rounded-xl font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n'+
        '            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '            <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="#323232"/>\n'+
        '            </svg>\n'+
        '        </button>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            defaultfabComp={defaultfabComp} 
            defaultfabCompString={defaultfabCompString}
            showColor={defaultfabState.showColor} 
            selectedColor={defaultfabState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}