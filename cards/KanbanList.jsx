import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function KanbanList(){
    const [kanbanListState, setKanbanListState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setKanbanListState({
            ...kanbanListState,
            showColor:!kanbanListState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setKanbanListState({
            ...kanbanListState,
            showColor:!kanbanListState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setKanbanListState({
            ...kanbanListState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let kanbanListComp = (
            
                <div className="dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-none bg-white" style={{"width":"348px", "height":"auto"}}>
                    <div className="px-5 py-4 w-full flex justify-center items-center">
                        <div className="w-1/2 flex justify-start items-center">
                            <div className="leading-normal">
                                <h3 className={"p-0 m-0 font-bold text-base leading-6 " + kanbanListState.selectedFont}>Header</h3>
                                <p className={"p-0 m-0 font-normal text-sm leading-5 " + kanbanListState.selectedFont}>Subheader</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end items-center">
                            <div>
                                <svg class="fill-current" width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="" />
                                </svg>
                            </div>
                        </div>   
                    </div>
                    <div className="px-5 pb-4">
                        <div className="w-full flex justify-start items-center">
                            <div><h4 className={" dark:text-white p-0 m-0 font-normal text-sm leading-7 text-black " + kanbanListState.selectedFont}>Item Name</h4></div>
                            <div className="ml-5"><p className={"p-0 m-0 font-normal text-sm leading-7 text-gray-500 " + kanbanListState.selectedFont}>Item Description</p></div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <div><h4 className={"p-0 m-0 font-normal text-sm leading-7 text-black dark:text-white " + kanbanListState.selectedFont}>Item Name</h4></div>
                            <div className="ml-5"><p className={"p-0 m-0 font-normal text-sm leading-7 text-gray-500 " + kanbanListState.selectedFont}>Item Description</p></div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <div><h4 className={"p-0 m-0 font-normal text-sm leading-7 text-black dark:text-white " + kanbanListState.selectedFont}>Item Name</h4></div>
                            <div className="ml-5"><p className={"p-0 m-0 font-normal text-sm leading-7 text-gray-500 " + kanbanListState.selectedFont}>Item Description</p></div>
                        </div>
                    </div>

                  
                </div>
           
    )

        let kanbanListCompString = '<div class="border border-gray-100 rounded-xl bg-white" style="width:348px; height:auto">\n'+
        '                    <div class="px-5 py-4 w-full flex justify-center items-center">\n'+
        '                        <div class="w-1/2 flex justify-start items-center">\n'+
        '                            <div class="leading-normal">\n'+
        '                                <h3 class="p-0 m-0 font-bold text-base leading-6 ' + kanbanListState.selectedFont + '">Header</h3>\n'+
        '                                <p class="p-0 m-0 font-normal text-sm leading-5 ' + kanbanListState.selectedFont + '">Subheader</p>\n'+
        '                            </div>\n'+
        '                        </div>\n'+
        '                        <div class="w-1/2 flex justify-end items-center">\n'+
        '                            <div>\n'+
        '                                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
        '                                    <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#323232" />\n'+
        '                                </svg>\n'+
        '                            </div>\n'+
        '                        </div>   \n'+
        '                    </div>\n'+
        '                    <div class="px-5 pb-4">\n'+
        '                        <div class="w-full flex justify-start items-center">\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-7 text-black ' + kanbanListState.selectedFont + '">Item Name</h4></div>\n'+
        '                            <div class="ml-5"><p class="p-0 m-0 font-normal text-sm leading-7 text-gray-500 ' + kanbanListState.selectedFont + '">Item Description</p></div>\n'+
        '                        </div>\n'+
        '                        <div class="w-full flex justify-start items-center">\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-7 text-black ' + kanbanListState.selectedFont + '">Item Name</h4></div>\n'+
        '                            <div class="ml-5"><p class="p-0 m-0 font-normal text-sm leading-7 text-gray-500 ' + kanbanListState.selectedFont + '">Item Description</p></div>\n'+
        '                        </div>\n'+
        '                        <div class="w-full flex justify-start items-center">\n'+
        '                            <div><h4 class="p-0 m-0 font-normal text-sm leading-7 text-black ' + kanbanListState.selectedFont + '">Item Name</h4></div>\n'+
        '                            <div class="ml-5"><p class="p-0 m-0 font-normal text-sm leading-7 text-gray-500 ' + kanbanListState.selectedFont + '">Item Description</p></div>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '\n'+
        '                  \n'+
        '                </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            kanbanListComp={kanbanListComp} 
            kanbanListCompString={kanbanListCompString}
            showColor={kanbanListState.showColor} 
            selectedColor={kanbanListState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}