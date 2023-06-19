import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Scrollbarshorizontal(){
    const [scrollbarshorizontalState, setScrollbarshorizontalState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setScrollbarshorizontalState({
            ...scrollbarshorizontalState,
            showColor:!scrollbarshorizontalState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setScrollbarshorizontalState({
            ...scrollbarshorizontalState,
            showColor:!scrollbarshorizontalState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setScrollbarshorizontalState({
            ...scrollbarshorizontalState,
            selectedFont: e.target.value,
        })
    }


    let scrollbarshorizontalComp = (
        <div>
            <section className="mt-8 space-y-10 w-[250px]">
            <div className="flex w-full h-1 bg-gray-400 rounded-full overflow-hidden dark:bg-gray-800">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-gray-400 w-2/4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="flex w-full h-1 bg-gray-200 dark:bg-gray-400 rounded-full overflow-hidden">
            <div className="flex flex-col justify-center overflow-hidden rounded-full bg-gray-800 dark:bg-gray-400 w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="flex w-full h-2 bg-gray-200 dark:bg-gray-400 rounded-full overflow-hidden">
            <div className="flex flex-col justify-center overflow-hidden rounded-full bg-gray-800 w-2/4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="flex w-full h-2 bg-gray-200 dark:bg-gray-400 rounded-full overflow-hidden">
            <div className="flex flex-col justify-center overflow-hidden rounded-full bg-gray-800 dark:bg-gray-800 w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </section>
        </div>
    )

        let scrollbarshorizontalCompString = '<section class="mt-8 space-y-10 w-[250px]">\n'+
        '            <div class="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">\n'+
        '            <div class="flex flex-col justify-center rounded-full overflow-hidden bg-gray-800 w-2/4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>\n'+
        '            </div>\n'+
        '            <div class="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden">\n'+
        '            <div class="flex flex-col justify-center overflow-hidden rounded-full bg-gray-800 w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\n'+
        '            </div>\n'+
        '            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">\n'+
        '            <div class="flex flex-col justify-center overflow-hidden rounded-full bg-gray-800 w-2/4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>\n'+
        '            </div>\n'+
        '            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">\n'+
        '            <div class="flex flex-col justify-center overflow-hidden rounded-full bg-gray-800 w-full" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\n'+
        '            </div>\n'+
        '            </section>';
                        
    return(
        <>
            <PreviewWindowDisabled 
            scrollbarshorizontalComp ={scrollbarshorizontalComp} 
            scrollbarshorizontalCompString={scrollbarshorizontalCompString}
            showColor={scrollbarshorizontalState.showColor} 
            selectedColor={scrollbarshorizontalState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}