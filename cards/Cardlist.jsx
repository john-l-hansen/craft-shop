import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Cardlist(){
    const [cardlistState, setCardlistState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setCardlistState({
            ...cardlistState,
            showColor:!cardlistState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setCardlistState({
            ...cardlistState,
            showColor:!cardlistState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setCardlistState({
            ...cardlistState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let cardlistComp = (
        <div>
            <div className="bg-white dark:bg-gray-900 dark:border-gray-700 border rounded-xl" style={{"width":"300px", "height":"auto"}}>
                <div className="w-full py-4 px-4 flex justify-start items-center">
                    <div className="w-1/2 flex justify-start items-center">
                        <h2 className={"p-0 m-0 " + cardlistState.selectedFont}>Title</h2>
                        <div className="ml-5">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#56C288"/>
                            </svg>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end items-center">
                        <div className="p-2 border-r">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.249023 10.9384V13.7509H3.06152L11.3565 5.4559L8.54402 2.6434L0.249023 10.9384ZM13.5315 3.2809C13.824 2.9884 13.824 2.5159 13.5315 2.2234L11.7765 0.468398C11.484 0.175898 11.0115 0.175898 10.719 0.468398L9.34652 1.8409L12.159 4.6534L13.5315 3.2809Z" fill="#88898B"/>
                            </svg>
                        </div>
                        <div className="pl-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="px-5 pb-4">
                    <div className="w-full flex justify-start items-center">
                        <div><h4 className={"p-0 m-0 font-normal text-sm leading-6 " + cardlistState.selectedFont}>Description line 1</h4></div>
                    </div>
                    <div className="w-full flex justify-start items-center">
                        <div><h4 className={"p-0 m-0 font-normal text-sm leading-6 " + cardlistState.selectedFont}>Description line 2</h4></div>
                    </div>
                    <div className="w-full flex justify-start items-center">
                        <div><h4 className={"p-0 m-0 font-normal text-sm leading-6 " + cardlistState.selectedFont}>Description line 3</h4></div>
                    </div>
                    <div className="w-full flex justify-start items-center">
                        <div><h4 className={"p-0 m-0 font-normal text-sm leading-6 " + cardlistState.selectedFont}>Description line 4</h4></div>
                    </div>
                    <div className="w-full flex justify-start items-center">
                        <div><h4 className={"p-0 m-0 font-normal text-sm leading-6 " + cardlistState.selectedFont}>Description line 5</h4></div>
                    </div>
                </div>
            </div>

            <br></br>

            <div className="bg-white dark:bg-gray-900 dark:border-gray-700 border rounded-xl" style={{"width":"700px", "height":"auto"}}>
                <div className="w-full py-4 px-4 flex justify-start items-center">
                    <div className="w-1/2 flex justify-start items-center">
                        <h2 className={"p-0 m-0 " + cardlistState.selectedFont}>Title</h2>
                            <div className="ml-5% px-4 bg-[#D6FCE7] border-0 rounded-full">
                                <p className={"p-0 m-0 text-[#268C55] text-xs " + cardlistState.selectedFont}>Active</p>
                            </div>
                    </div>
                    <div className="w-1/2 flex justify-end items-center">
                        <div className="p-2 border-r">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.249023 10.9384V13.7509H3.06152L11.3565 5.4559L8.54402 2.6434L0.249023 10.9384ZM13.5315 3.2809C13.824 2.9884 13.824 2.5159 13.5315 2.2234L11.7765 0.468398C11.484 0.175898 11.0115 0.175898 10.719 0.468398L9.34652 1.8409L12.159 4.6534L13.5315 3.2809Z" fill="#88898B"/>
                            </svg>
                        </div>
                        <div className="pl-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="px-5 pb-4">
                    <div className="w-full flex justify-start items-center">
                        <div><p className={"p-0 m-0 text-gray-500 " + cardlistState.selectedFont}>Sub-category name</p></div>
                        <div><h4 className={"dark:text-white p-0 m-0 ml-2 font font-bold " + cardlistState.selectedFont}>LIST ITEM 1, LIST ITEM 2</h4></div>
                    </div>
                </div>
            </div>
        </div>
           
    )

        let cardlistCompString = '<div class="bg-white border rounded-xl" style="width:300px; height:auto">\n'+
        '                <div class="w-full py-4 px-4 flex justify-start items-center">\n'+
        '                    <div class="w-1/2 flex justify-start items-center">\n'+
        '                        <h2 class="p-0 m-0 ' + cardlistState.selectedFont + '">Title</h2>\n'+
        '                        <div class="ml-5">\n'+
        '                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <circle cx="4" cy="4" r="4" fill="#56C288"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                    <div class="w-1/2 flex justify-end items-center">\n'+
        '                        <div class="p-2 border-r">\n'+
        '                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M0.249023 10.9384V13.7509H3.06152L11.3565 5.4559L8.54402 2.6434L0.249023 10.9384ZM13.5315 3.2809C13.824 2.9884 13.824 2.5159 13.5315 2.2234L11.7765 0.468398C11.484 0.175898 11.0115 0.175898 10.719 0.468398L9.34652 1.8409L12.159 4.6534L13.5315 3.2809Z" fill="#88898B"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                        <div class="pl-2">\n'+
        '                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                </div>\n'+
        '                <div class="px-5 pb-4">\n'+
        '                    <div class="w-full flex justify-start items-center">\n'+
        '                        <div><h4 class="p-0 m-0 font-normal text-sm leading-6 ' + cardlistState.selectedFont + '">Description line 1</h4></div>\n'+
        '                    </div>\n'+
        '                    <div class="w-full flex justify-start items-center">\n'+
        '                        <div><h4 class="p-0 m-0 font-normal text-sm leading-6 ' + cardlistState.selectedFont + '">Description line 2</h4></div>\n'+
        '                    </div>\n'+
        '                    <div class="w-full flex justify-start items-center">\n'+
        '                        <div><h4 class="p-0 m-0 font-normal text-sm leading-6 ' + cardlistState.selectedFont + '">Description line 3</h4></div>\n'+
        '                    </div>\n'+
        '                    <div class="w-full flex justify-start items-center">\n'+
        '                        <div><h4 class="p-0 m-0 font-normal text-sm leading-6 ' + cardlistState.selectedFont + '">Description line 4</h4></div>\n'+
        '                    </div>\n'+
        '                    <div class="w-full flex justify-start items-center">\n'+
        '                        <div><h4 class="p-0 m-0 font-normal text-sm leading-6 ' + cardlistState.selectedFont + '">Description line 5</h4></div>\n'+
        '                    </div>\n'+
        '                </div>\n'+
        '            </div>';
                        
                        
        let cardlistCompStringTwo = '<div class="bg-white border rounded-xl" style="width:700px; height:auto">\n'+
        '                <div class="w-full py-4 px-4 flex justify-start items-center">\n'+
        '                    <div class="w-1/2 flex justify-start items-center">\n'+
        '                        <h2 class="p-0 m-0 ' + cardlistState.selectedFont + '">Title</h2>\n'+
        '                            <div class="ml-5% px-4 bg-[#D6FCE7] border-0 rounded-full">\n'+
        '                                <p class="p-0 m-0 text-[#268C55] text-xs ' + cardlistState.selectedFont + '">Active</p>\n'+
        '                            </div>\n'+
        '                    </div>\n'+
        '                    <div class="w-1/2 flex justify-end items-center">\n'+
        '                        <div class="p-2 border-r">\n'+
        '                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M0.249023 10.9384V13.7509H3.06152L11.3565 5.4559L8.54402 2.6434L0.249023 10.9384ZM13.5315 3.2809C13.824 2.9884 13.824 2.5159 13.5315 2.2234L11.7765 0.468398C11.484 0.175898 11.0115 0.175898 10.719 0.468398L9.34652 1.8409L12.159 4.6534L13.5315 3.2809Z" fill="#88898B"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                        <div class="pl-2">\n'+
        '                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M4.25 7.25V8.75H11.75V7.25H4.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z" fill="#BE110B"/>\n'+
        '                            </svg>\n'+
        '                        </div>\n'+
        '                    </div>\n'+
        '                </div>\n'+
        '                <div class="px-5 pb-4">\n'+
        '                    <div class="w-full flex justify-start items-center">\n'+
        '                        <div><p class="p-0 m-0 text-gray-500 ' + cardlistState.selectedFont + '">Sub-category name</p></div>\n'+
        '                        <div><h4 class="p-0 m-0 ml-2 font font-bold ' + cardlistState.selectedFont + '">LIST ITEM 1, LIST ITEM 2</h4></div>\n'+
        '                    </div>\n'+
        '                </div>\n'+
        '            </div>';
            
    return(
        <>
            <PreviewWindowDisabled 
            cardlistComp={cardlistComp} 
            cardlistCompString={cardlistCompString}
            cardlistCompStringTwo={cardlistCompStringTwo}
            showColor={cardlistState.showColor} 
            selectedColor={cardlistState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}