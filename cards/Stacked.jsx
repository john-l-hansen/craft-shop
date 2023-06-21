import React, { Component, useState } from 'react' 
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function Stacked(){
    const [stackedState, setStackedState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setStackedState({
            ...stackedState,
            showColor:!stackedState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setStackedState({
            ...stackedState,
            showColor:!stackedState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setStackedState({
            ...stackedState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let stackedComp = (
            
                <div className="border border-gray-200 dark:border dark:border-gray-800 rounded-xl bg-white dark:bg-black" style={{"width":"348px", "height":"auto"}}>
                    <div className="px-5 py-3 w-full flex justify-start items-center">
                        <div className="w-4/5 flex justify-start items-center">
                            <div>
                                <p className="w-8 h-8 p-0 m-0 text-base font-medium text-center text-gray-800 bg-gray-200 rounded-full">A</p>
                            </div>
                            <div className="ml-5 leading-normal">
                                <h1 className={"p-0 m-0 font-bold text-base leading-6 text-black dark:text-white " + stackedState.selectedFont}>Header</h1>
                                <p className={"p-0 m-0 font-normal text-sm leading-5 text-gray-700 dark:text-gray-100 " + stackedState.selectedFont}>Subheader</p>
                            </div>
                        </div>
                        <div className="w-1/5 flex justify-end items-center">
                            <div>
                            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232"/>
                            </svg>
                            </div>
                        </div>   
                    </div>
                    <div>
                        <img src="ddd.png" className="object-cover m-0" width="100%"/>
                    </div>
                    <div className="px-5 py-4 w-full">
                        <div className="leading-normal">
                            <h1 className={"p-0 m-0 font-normal text-base leading-6 text-black dark:text-white " + stackedState.selectedFont}>Title</h1>
                            <p className={"p-0 m-0 font-normal text-sm leading-5 text-gray-700 dark:text-gray-100 "+ stackedState.selectedFont}>Subtitle</p>
                        </div>
                        <div className="leading-tight">
                            <p className={"p-0 m-0 py-5 text-sm leading-5 font-normal text-gray-700 dark:text-gray-100 " + stackedState.selectedFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod afasdfasfdddddd sectetur adipiscing elit, sed do eiusmod afasdfas</p>
                        </div>
                        <div className="flex justify-end">
                        <button className={"py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 leading-5 text-sm " + stackedState.selectedFont}>
                            Cancel
                        </button>
                        <button className={"ml-3 py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white " + stackedState.selectedColor +" "+ stackedState.selectedFont}>
                            Enabled
                        </button>
                        </div>
                    </div>
                </div>
           
    )

        let stackedCompString = '<div class="border rounded-xl bg-white" style="width:348px; height:auto">\n'+
        '                    <div class="px-5 py-3 w-full flex justify-start items-center">\n'+
        '                        <div class="w-4/5 flex justify-start items-center">\n'+
        '                            <div>\n'+
        '                                <p class="w-8 h-8 p-0 m-0 text-base font-medium text-center text-gray-800 bg-gray-200 rounded-full">A</p>\n'+
        '                            </div>\n'+
        '                            <div class="ml-5 leading-normal">\n'+
        '                                <h1 class="p-0 m-0 font-bold text-base leading-6 ' + stackedState.selectedFont + '">Header</h1>\n'+
        '                                <p class="p-0 m-0 font-normal text-sm leading-5 ' + stackedState.selectedFont + '">Subheader</p>\n'+
        '                            </div>\n'+
        '                        </div>\n'+
        '                        <div class="w-1/5 flex justify-end items-center">\n'+
        '                            <div>\n'+
        '                                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
        '                                    <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232" />\n'+
        '                                </svg>\n'+
        '                            </div>\n'+
        '                        </div>   \n'+
        '                    </div>\n'+
        '                    <div>\n'+
        '                        <img src="ddd.png" class="object-cover m-0" width="100%"/>\n'+
        '                    </div>\n'+
        '                    <div class="px-5 py-4 w-full">\n'+
        '                        <div class="leading-normal">\n'+
        '                            <h1 class="p-0 m-0 font-normal text-base leading-6 ' + stackedState.selectedFont + '">Title</h1>\n'+
        '                            <p class="p-0 m-0 font-normal text-sm leading-5 ' + stackedState.selectedFont + '">Subtitle</p>\n'+
        '                        </div>\n'+
        '                        <div class="leading-tight">\n'+
        '                            <p class="p-0 m-0 py-5 text-sm leading-5 font-normal ' + stackedState.selectedFont + '">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, \n'+
        '                            consectetur adipiscing elit, sed do eiusmod afasdfasfdddddd sectetur adipiscing elit, sed do eiusmod afasdfas</p>\n'+
        '                        </div>\n'+
        '                        <div class="flex justify-end">\n'+
        '                        <button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-lg font-medium text-gray-800 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 leading-5 text-sm ' + stackedState.selectedFont + '">\n'+
        '                            Cancel\n'+
        '                        </button>\n'+
        '                        <button class="ml-3 py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' + stackedState.selectedColor +" "+ stackedState.selectedFont + '">\n'+
        '                            Enabled\n'+
        '                        </button>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowTwo 
            stackedComp={stackedComp} 
            stackedCompString={stackedCompString}
            showColor={stackedState.showColor} 
            selectedColor={stackedState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}


