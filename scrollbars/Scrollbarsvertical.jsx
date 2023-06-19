import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Scrollbarsvertical(){
    const [scrollbarsverticalState, setScrollbarsverticalState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setScrollbarsverticalState({
            ...scrollbarsverticalState,
            showColor:!scrollbarsverticalState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setScrollbarsverticalState({
            ...scrollbarsverticalState,
            showColor:!scrollbarsverticalState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setScrollbarsverticalState({
            ...scrollbarsverticalState,
            selectedFont: e.target.value,
        })
    }


    let scrollbarsverticalComp = (
        <div>
            <section className="flex space-x-10 h-[250px]">
            <div className="flex flex-col flex-nowrap justify-end w-1 h-full bg-gray-200 dark:bg-gray-400 rounded-full overflow-hidden">
                <div className="bg-gray-800 overflow-hidden h-2/4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="flex flex-col flex-nowrap h-full justify-end w-1 bg-gray-200 dark:bg-gray-400 rounded-full overflow-hidden">
                <div className="bg-gray-800 overflow-hidden h-full" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="flex flex-col flex-nowrap h-full justify-end w-2 bg-gray-200 dark:bg-gray-400 rounded-full overflow-hidden">
                <div className="bg-gray-800 overflow-hidden h-2/4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="flex flex-col flex-nowrap justify-end h-full w-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-gray-800 overflow-hidden h-full" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </section>
        </div>
    )

        let scrollbarsverticalCompString = 
        '<section class="flex space-x-10 h-[250px]">\n'+
'            <div class="flex flex-col flex-nowrap justify-end w-1 h-full bg-gray-200 rounded-full overflow-hidden">\n'+
'                <div class="bg-gray-800 overflow-hidden h-2/4" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n'+
'            </div>\n'+
'            <div class="flex flex-col flex-nowrap h-full justify-end w-1 bg-gray-200 rounded-full overflow-hidden">\n'+
'                <div class="bg-gray-800 overflow-hidden h-full" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n'+
'            </div>\n'+
'            <div class="flex flex-col flex-nowrap h-full justify-end w-2 bg-gray-200 rounded-full overflow-hidden">\n'+
'                <div class="bg-gray-800 overflow-hidden h-2/4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>\n'+
'            </div>\n'+
'            <div class="flex flex-col flex-nowrap justify-end h-full w-2 bg-gray-200 rounded-full overflow-hidden">\n'+
'                <div class="bg-gray-800 overflow-hidden h-full" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>\n'+
'            </div>\n'+
'            </section>';

                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            scrollbarsverticalComp ={scrollbarsverticalComp} 
            scrollbarsverticalCompString={scrollbarsverticalCompString}
            showColor={scrollbarsverticalState.showColor} 
            selectedColor={scrollbarsverticalState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}