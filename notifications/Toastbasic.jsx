import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Toastbasic(){
    const [toastbasicState, setToastbasicState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setToastbasicState({
            ...toastbasicState,
            showColor:!toastbasicState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setToastbasicState({
            ...toastbasicState,
            showColor:!toastbasicState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setToastbasicState({
            ...toastbasicState,
            selectedFont: e.target.value,
        })
    }


    let toastbasicComp = (
                <div className="border border-gray-100 dark:border-none rounded-xl dark:bg-gray-800 bg-white" style={{"width":"348px", "height":"auto", "box-shadow": "0px 4px 10px 3px rgba(0, 0, 0, 0.2)"}}>
                    <div className="px-5 py-4 w-full flex justify-center items-center">
                        <div className="w-1/2 flex justify-start items-center">
                            <div className="leading-normal">
                                <h3 className={"p-0 m-0 font-bold text-base leading-6 " + toastbasicState.selectedFont}>Title</h3>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end items-center">
                            <div>
                            <svg class="fill-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill=""/>
                            </svg>
                            </div>
                        </div>   
                    </div>
                    <div className="px-5 pb-4">
                        <div className="w-full">
                            <div><h4 className={"p-0 m-0 font-normal text-sm leading-5 text-black dark:text-gray-200 " + toastbasicState.selectedFont}>Descriptive text</h4></div>
                            <div><p className={"p-0 m-0 font-normal text-sm leading-5 text-gray-500 dark:text-gray-400 " + toastbasicState.selectedFont}>Assistive text</p></div>
                        </div>
                    </div>
                </div>
    )

        let toastbasicCompString = '<div class="border border-gray-100 rounded-xl bg-white" style="width:348px; height:auto; box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n'+
        '                    <div class="px-5 py-4 w-full flex justify-center items-center">\n'+
        '                        <div class="w-1/2 flex justify-start items-center">\n'+
        '                            <div class="leading-normal">\n'+
        '                                <h3 class="p-0 m-0 font-bold text-base leading-6 ' + toastbasicState.selectedFont + '">Title</h3>\n'+
        '                            </div>\n'+
        '                        </div>\n'+
        '                        <div class="w-1/2 flex justify-end items-center">\n'+
        '                            <div>\n'+
        '                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#5E5F5F"/>\n'+
        '                            </svg>\n'+
        '                            </div>\n'+
        '                        </div>   \n'+
        '                    </div>\n'+
        '                    <div class="px-5 pb-4">\n'+
        '                        <div class="w-full">\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-5 text-black ' + toastbasicState.selectedFont + '">Descriptive text</h4></div>\n'+
        '                            <div><p class="p-0 m-0 font-normal text-sm leading-5 text-gray-500 ' + toastbasicState.selectedFont + '">Assistive text</p></div>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                </div>';

                                           
    return(
        <>
            <PreviewWindowDisabled 
            toastbasicComp={toastbasicComp} 
            toastbasicCompString={toastbasicCompString}
            showColor={toastbasicState.showColor} 
            selectedColor={toastbasicState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}