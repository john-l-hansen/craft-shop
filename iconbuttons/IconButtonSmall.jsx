import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function IconButtonSmall(){
    const [iconbuttonsmallState, setIconbuttonsmallState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-700",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setIconbuttonsmallState({
            ...iconbuttonsmallState,
            showColor:!iconbuttonsmallState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setIconbuttonsmallState({
            ...iconbuttonsmallState,
            showColor:!iconbuttonsmallState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setIconbuttonsmallState({
            ...iconbuttonsmallState,
            selectedFont: e.target.value,
        })
    }


    let iconbuttonsmallComp = (
            
      <div>
        <button className={"w-8 h-8 flex justify-center items-center rounded-lg font-medium text-gray-900 dark:text-white leading-5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-600"} style={{"boxShadow": "0px 4px 10px 3px rgba(0, 0, 0, 0.2)"}}>
            <svg class="fill-current" width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.99935 3.33329C2.73268 3.33329 3.33268 2.73329 3.33268 1.99996C3.33268 1.26663 2.73268 0.666626 1.99935 0.666626C1.26602 0.666626 0.666016 1.26663 0.666016 1.99996C0.666016 2.73329 1.26602 3.33329 1.99935 3.33329ZM1.99935 4.66663C1.26602 4.66663 0.666016 5.26663 0.666016 5.99996C0.666016 6.73329 1.26602 7.33329 1.99935 7.33329C2.73268 7.33329 3.33268 6.73329 3.33268 5.99996C3.33268 5.26663 2.73268 4.66663 1.99935 4.66663ZM1.99935 8.66663C1.26602 8.66663 0.666016 9.26663 0.666016 9.99996C0.666016 10.7333 1.26602 11.3333 1.99935 11.3333C2.73268 11.3333 3.33268 10.7333 3.33268 9.99996C3.33268 9.26663 2.73268 8.66663 1.99935 8.66663Z" fill=""/>
            </svg>
        </button>
      </div>
           
    )

        let iconbuttonsmallCompString = '<button class="w-8 h-8 flex justify-center items-center rounded-xl font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400" style="boxShadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n'+
        '            <svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                <path d="M1.99935 3.33329C2.73268 3.33329 3.33268 2.73329 3.33268 1.99996C3.33268 1.26663 2.73268 0.666626 1.99935 0.666626C1.26602 0.666626 0.666016 1.26663 0.666016 1.99996C0.666016 2.73329 1.26602 3.33329 1.99935 3.33329ZM1.99935 4.66663C1.26602 4.66663 0.666016 5.26663 0.666016 5.99996C0.666016 6.73329 1.26602 7.33329 1.99935 7.33329C2.73268 7.33329 3.33268 6.73329 3.33268 5.99996C3.33268 5.26663 2.73268 4.66663 1.99935 4.66663ZM1.99935 8.66663C1.26602 8.66663 0.666016 9.26663 0.666016 9.99996C0.666016 10.7333 1.26602 11.3333 1.99935 11.3333C2.73268 11.3333 3.33268 10.7333 3.33268 9.99996C3.33268 9.26663 2.73268 8.66663 1.99935 8.66663Z" fill="black"/>\n'+
        '            </svg>\n'+
        '        </button>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            iconbuttonsmallComp={iconbuttonsmallComp} 
            iconbuttonsmallCompString={iconbuttonsmallCompString}
            showColor={iconbuttonsmallState.showColor} 
            selectedColor={iconbuttonsmallState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}