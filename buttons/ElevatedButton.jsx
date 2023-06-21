
import React, { Component, useState } from 'react' 
import PreviewWindowFour from '../PreviewWindowFour'

export default function ElevatedButton(){

    const [elevatedButtonState, setElevatedButtonState] = useState({
        showColor: false,
        selectedColor:"bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setElevatedButtonState({
            ...elevatedButtonState,
            showColor:!elevatedButtonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setElevatedButtonState({
            ...elevatedButtonState,
            showColor:!elevatedButtonState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setElevatedButtonState({
            ...elevatedButtonState,
            selectedFont: e.target.value,
        })
    }

   

    let elevatedButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center bg-white">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm " + elevatedButtonState.selectedColor + " " + elevatedButtonState.selectedFont} style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    Enabled
                </button>
                {/*<button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    Hovered
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    Focused
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-300 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    Active
                </button> */}
                <button className="py-2 px-6 rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3 leading-5 text-sm" disabled>
                    Disabled
                </button> 
            </div>

            {/*Plus Left*/}
            <div className="flex justify-center items-center bg-white mt-5">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm " + elevatedButtonState.selectedColor + " " + elevatedButtonState.selectedFont} style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button>
                {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-300 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
            </button>*/} 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3 leading-5 text-sm" disabled>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path
                                d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                                fill="#B3B4B5"
                            />
                        </svg>
                    </div>
                    <div className="ml-3">Disabled</div>
                </button> 
            </div>

            {/*Plus Right*/}
            <div className="flex justify-center items-center bg-white mt-5">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm " + elevatedButtonState.selectedColor + " " + elevatedButtonState.selectedFont} style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div className="mr-3">Enabled</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button>
                {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-300 ml-3 leading-5 text-sm" style={{"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
        </button>*/} 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3 leading-5 text-sm" disabled>
                    <div className="mr-3">Disabled</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path
                                d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                                fill="#B3B4B5"
                            />
                        </svg>
                    </div>
                </button> 
            </div>
        </div>
    )

    let elevatedButtonCompString = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' + elevatedButtonState.selectedColor + " " + elevatedButtonState.selectedFont + '" style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)">Enabled</button>';

    let elevatedButtonCompStringTwo = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' + elevatedButtonState.selectedColor + " " + elevatedButtonState.selectedFont + '"  style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)">\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3">Enabled</div>\n'+
    '                </button>';

    let elevatedButtonCompStringThree = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' + elevatedButtonState.selectedColor + " " + elevatedButtonState.selectedFont + '"  style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)">\n'+
    '                    <div class="mr-3">Enabled</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                </button>';



    return(
        <>
            <PreviewWindowFour
            elevatedButtonComp={elevatedButtonComp} 
            elevatedButtonCompString={elevatedButtonCompString}
            elevatedButtonCompStringTwo={elevatedButtonCompStringTwo}
            elevatedButtonCompStringThree={elevatedButtonCompStringThree}
            showColor={elevatedButtonState.showColor} 
            selectedColor={elevatedButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}
