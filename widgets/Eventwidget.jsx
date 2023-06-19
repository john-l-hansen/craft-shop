import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Eventwidget(){
    const [eventwidgetState, setEventwidgetState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEventwidgetState({
            ...eventwidgetState,
            showColor:!eventwidgetState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEventwidgetState({
            ...eventwidgetState,
            showColor:!eventwidgetState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEventwidgetState({
            ...eventwidgetState,
            selectedFont: e.target.value,
        })
    }


    let eventwidgetComp = (
        
        <div className={"inline-block p-5 bg-gray-50 dark:text-white dark:bg-gray-900 rounded-[1.25rem] " + eventwidgetState.selectedFont}>
            <div>
                <div className="flex">
                    <svg className="self-center mr-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#34A145"/>
                    </svg>
                    <div className="bold text-base">Board meeting</div>
                </div>
                <div className="mt-2">
                    <div className="text-sm">Feb 22 at 6:00 pm</div>
                </div>
                <div className="text-[10px] mt-4">You have been invited to attend a meeting of board directors.</div>
            </div>
        </div>
    )

        let eventwidgetCompString = 
        '<div class="inline-block p-5 bg-gray-50 rounded-[1.25rem] ' + eventwidgetState.selectedFont + '">\n'+
'            <div>\n'+
'                <div class="flex">\n'+
'                    <svg class="self-center mr-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
'                    <circle cx="4" cy="4" r="4" fill="#34A145"/>\n'+
'                    </svg>\n'+
'                    <div class="bold text-base">Board meeting</div>\n'+
'                </div>\n'+
'                <div class="mt-2">\n'+
'                    <div class="text-sm">Feb 22 at 6:00 pm</div>\n'+
'                </div>\n'+
'                <div class="text-[10px] mt-4">You have been invited to attend a meeting of board directors.</div>\n'+
'            </div>\n'+
'        </div>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            eventwidgetComp ={eventwidgetComp} 
            eventwidgetCompString={eventwidgetCompString}
            showColor={eventwidgetState.showColor} 
            selectedColor={eventwidgetState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}