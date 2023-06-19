import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function IconButtonCombo(){
    const [iconbuttoncomboState, setIconbuttoncomboState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-700",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setIconbuttoncomboState({
            ...iconbuttoncomboState,
            showColor:!iconbuttoncomboState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setIconbuttoncomboState({
            ...iconbuttoncomboState,
            showColor:!iconbuttoncomboState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setIconbuttoncomboState({
            ...iconbuttoncomboState,
            selectedFont: e.target.value,
        })
    }


    let iconbuttoncomboComp = (
      <div>
        <button className={"w-12 h-12 flex justify-center items-center rounded-t-xl font-medium text-gray-900 dark:text-white leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-600"} style={{"boxShadow": "0px 2px 6px rgba(0, 0, 0, 0.2)"}}>
            <svg class="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill=""/>
            </svg>
        </button>
        <button className={"w-12 h-12 flex justify-center items-center rounded-b-xl font-medium text-gray-900 dark:text-white leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-600"} style={{"boxShadow": "0px 2px 6px rgba(0, 0, 0, 0.2)"}}>
            <svg class="fill-current" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H0V0H14V2Z" fill=""/>
            </svg>
        </button>
      </div>
    )

        let iconbuttoncomboCompString = '<button class="w-12 h-12 flex justify-center items-center rounded-t-xl font-medium text-white border-b leading-5 text-sm bg-white hover:bg-gray-200 active:bg-gray-400" style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2)">\n'+
        '            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232"/>\n'+
        '            </svg>\n'+
        '        </button>\n'+
        '        <button class="w-12 h-12 flex justify-center items-center rounded-b-xl font-medium text-white leading-5 text-sm bg-white hover:bg-gray-200 active:bg-gray-400" style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2)">\n'+
        '            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M14 2H0V0H14V2Z" fill="#323232"/>\n'+
        '            </svg>\n'+
        '        </button>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            iconbuttoncomboComp={iconbuttoncomboComp} 
            iconbuttoncomboCompString={iconbuttoncomboCompString}
            showColor={iconbuttoncomboState.showColor} 
            selectedColor={iconbuttoncomboState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}