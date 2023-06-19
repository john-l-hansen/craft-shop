import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function EcommerceTwo(){
    const [ecommerceTwoState, setEcommerceTwoState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceTwoState({
            ...ecommerceTwoState,
            showColor:!ecommerceTwoState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceTwoState({
            ...ecommerceTwoState,
            showColor:!ecommerceTwoState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceTwoState({
            ...ecommerceTwoState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceTwoComp = (
            
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl" style={{"width":"300px", "height":"auto"}}>
                    <div className="w-full py-4 px-4 flex justify-start items-center">
                        <div className="w-1/2 flex justify-start items-center">
                            <h2 className={"p-0 m-0 font-bold text-base leading-5 " + ecommerceTwoState.selectedFont}>Title</h2>
                        </div>
                        <div className="w-1/2 flex justify-end items-center">
                            <div className="p-2 border-r">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.249023 10.9384V13.7509H3.06152L11.3565 5.4559L8.54402 2.6434L0.249023 10.9384ZM13.5315 3.2809C13.824 2.9884 13.824 2.5159 13.5315 2.2234L11.7765 0.468398C11.484 0.175898 11.0115 0.175898 10.719 0.468398L9.34652 1.8409L12.159 4.6534L13.5315 3.2809Z" fill="#88898B"/>
                                </svg>
                            </div>
                            <div className="p-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 pb-4 flex justify-start items-center">
                        <div className="flex leading-normal font-semibold">
                            <div className="py-1 px-4 bg-[#D6FCE7] border-0 rounded-full">
                                <p className={"p-0 m-0 text-[#268C55] text-xs " + ecommerceTwoState.selectedFont}>Status</p>
                            </div>
                            <div className="py-1 px-4 ml-2 flex items-center bg-gray-200 border-0 rounded-full">
                                <p className={"p-0 m-0 text-xs " + ecommerceTwoState.selectedFont}>Tag</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 pb-4 flex justify-start items-center">
                        <h2 className={"m-0 p-0 font-bold text-base leading-6 " + ecommerceTwoState.selectedFont}>$1,0000.00</h2>
                    </div>
                    <div className="w-full px-4 pb-4 flex justify-start items-center">
                        <div className="w-1/2 flex justify-start items-center">
                            <h3 className={"m-0 p-0 font-normal text-base leading-5 " + ecommerceTwoState.selectedFont}>SUB-HEADER TEXT</h3>
                        </div>
                        <div className="w-1/2 flex justify-end items-center">
                            <h2 className={"m-0 p-0 text-gray-400 font-normal text-sm leading-5 " + ecommerceTwoState.selectedFont}>01/01/2023</h2>
                        </div>
                    </div>
                </div>
           
    )

        let ecommerceTwoCompString = '<div class="bg-gray-50 rounded-xl" style="width:300px; height:auto">\n'+
        '                    <div class="w-full py-4 px-4 flex justify-start items-center">\n'+
        '                        <div class="w-1/2 flex justify-start items-center">\n'+
        '                            <h2 class="p-0 m-0 font-bold text-base leading-5 ' + ecommerceTwoState.selectedFont + '">Title</h2>\n'+
        '                        </div>\n'+
        '                        <div class="w-1/2 flex justify-end items-center">\n'+
        '                            <div class="p-2 border-r">\n'+
        '                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                    <path d="M0.249023 10.9384V13.7509H3.06152L11.3565 5.4559L8.54402 2.6434L0.249023 10.9384ZM13.5315 3.2809C13.824 2.9884 13.824 2.5159 13.5315 2.2234L11.7765 0.468398C11.484 0.175898 11.0115 0.175898 10.719 0.468398L9.34652 1.8409L12.159 4.6534L13.5315 3.2809Z" fill="#88898B"/>\n'+
        '                                </svg>\n'+
        '                            </div>\n'+
        '                            <div class="p-2">\n'+
        '                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                    <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>\n'+
        '                                </svg>\n'+
        '                            </div>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                    <div class="w-full px-4 pb-4 flex justify-start items-center">\n'+
        '                        <div class="flex leading-normal font-semibold">\n'+
        '                            <div class="py-1 px-4 bg-[#D6FCE7] border-0 rounded-full">\n'+
        '                                <p class="p-0 m-0 text-[#268C55] text-xs ' + ecommerceTwoState.selectedFont + '">Status</p>\n'+
        '                            </div>\n'+
        '                            <div class="py-1 px-4 ml-2 flex items-center bg-gray-200 border-0 rounded-full">\n'+
        '                                <p class="p-0 m-0 text-xs ' + ecommerceTwoState.selectedFont + '">Tag</p>\n'+
        '                            </div>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                    <div class="w-full px-4 pb-4 flex justify-start items-center">\n'+
        '                        <h2 class="m-0 p-0 font-bold text-base leading-6 ' + ecommerceTwoState.selectedFont + '">$1,0000.00</h2>\n'+
        '                    </div>\n'+
        '                    <div class="w-full px-4 pb-4 flex justify-start items-center">\n'+
        '                        <div class="w-1/2 flex justify-start items-center">\n'+
        '                            <h3 class="m-0 p-0 font-normal text-base leading-5 ' + ecommerceTwoState.selectedFont + '">SUB-HEADER TEXT</h3>\n'+
        '                        </div>\n'+
        '                        <div class="w-1/2 flex justify-end items-center">\n'+
        '                            <h2 class="m-0 p-0 text-gray-400 font-normal text-sm leading-5 ' + ecommerceTwoState.selectedFont + '">01/01/2023</h2>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            ecommerceTwoComp={ecommerceTwoComp} 
            ecommerceTwoCompString={ecommerceTwoCompString}
            showColor={ecommerceTwoState.showColor} 
            selectedColor={ecommerceTwoState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}