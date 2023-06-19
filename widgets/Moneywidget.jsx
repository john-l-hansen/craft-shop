import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Moneywidget(){
    const [moneywidgetState, setMoneywidgetState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setMoneywidgetState({
            ...moneywidgetState,
            showColor:!moneywidgetState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setMoneywidgetState({
            ...moneywidgetState,
            showColor:!moneywidgetState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setMoneywidgetState({
            ...moneywidgetState,
            selectedFont: e.target.value,
        })
    }


    let moneywidgetComp = (
        
        <div className={"bg-gray-50 dark:text-white dark:bg-gray-900 p-5 w-[200px] space-y-12 rounded-[1.25rem] " + moneywidgetState.selectedFont}>
            <div className="flex justify-between">
                <svg className="fill-current" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 8H8C5.78 8 4.02 9.78 4.02 12L4 36C4 38.22 5.78 40 8 40H40C42.22 40 44 38.22 44 36V12C44 9.78 42.22 8 40 8ZM40 36H8V24H40V36ZM40 16H8V12H40V16Z" fill=""/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#323232"/>
            </svg>
            </div>
            <div>
            <div className="font-bold text-2xl">
                100,000
            </div>
            <div className="text-sm">Text</div>
            </div>
        </div>
    )

        let moneywidgetCompString = 
        '<div class="bg-gray-50 p-5 w-[200px] space-y-12 rounded-[1.25rem] ' + moneywidgetState.selectedFont + '">\n'+
        '            <div class="flex justify-between">\n'+
        '                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '            <path d="M40 8H8C5.78 8 4.02 9.78 4.02 12L4 36C4 38.22 5.78 40 8 40H40C42.22 40 44 38.22 44 36V12C44 9.78 42.22 8 40 8ZM40 36H8V24H40V36ZM40 16H8V12H40V16Z" fill="black"/>\n'+
        '            </svg>\n'+
        '            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#323232"/>\n'+
        '            </svg>\n'+
        '            </div>\n'+
        '            <div>\n'+
        '            <div class="font-bold text-2xl">\n'+
        '                100,000\n'+
        '            </div>\n'+
        '            <div class="text-sm">Text</div>\n'+
        '            </div>\n'+
        '        </div>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            moneywidgetComp ={moneywidgetComp} 
            moneywidgetCompString={moneywidgetCompString}
            showColor={moneywidgetState.showColor} 
            selectedColor={moneywidgetState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}