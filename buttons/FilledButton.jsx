import React, { Component, useState } from 'react' 
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function FilledButton(){

    const [fillButtonState, setFillButtonState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setFillButtonState({
            ...fillButtonState,
            showColor:!fillButtonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        console.log(e.target.classList.value)
        setFillButtonState({
            ...fillButtonState,
            showColor:!fillButtonState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setFillButtonState({
            ...fillButtonState,
            selectedFont: e.target.value,
        })
    }


    let filledButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 transition ease-in-out " + fillButtonState.selectedColor +" "+ fillButtonState.selectedFont}>
                    Enabled
                </button>
                {/*<button className="py-2 px-6 rounded-lg font-medium text-white bg-gray-400 ml-3 leading-5 text-sm">
                    Hovered
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-white bg-gray-400 ml-3 leading-5 text-sm">
                    Focused
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-white bg-gray-600 ml-3 leading-5 text-sm">
                    Active
                </button> */}
                <button className="py-2 px-6 rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3 leading-5 text-sm" disabled>
                    Disabled
                </button> 
            </div>

            {/*Plus Left*/}
            <div className="flex justify-center items-center mt-5">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 transition ease-in-out " + fillButtonState.selectedColor +" "+ fillButtonState.selectedFont}>
                    <div>
                    <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button>
                {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-600 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button> */}
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-gray-100 ml-3 leading-5 text-sm " disabled>
                    <div>
                        <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                    <div className="ml-3">Disabled</div>
                </button> 
            </div>

            {/*Plus Right*/}
            <div className="flex justify-center items-center mt-5">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm dark:bg-gray-200 dark:text-black dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-300 transition ease-in-out " + fillButtonState.selectedColor +" "+ fillButtonState.selectedFont}>
                    <div className="mr-3">Enabled</div>
                    <div>
                    <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                </button>
                {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3 leading-5 text-sm">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-400 ml-3 leading-5 text-sm">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-white bg-gray-600 ml-3 leading-5 text-sm">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </button> */}
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

    
    let filledButtonCompString = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' + fillButtonState.selectedColor +" "+ fillButtonState.selectedFont + '">Enabled</button>';
    
    let filledButtonCompStringTwo = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' + fillButtonState.selectedColor +" "+ fillButtonState.selectedFont + '">\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3">Enabled</div>\n'+
    '                </button>';

    let filledButtonCompStringThree = ' <button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' + fillButtonState.selectedColor +" "+ fillButtonState.selectedFont + '">\n'+
    '                    <div class="mr-3">Enabled</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                </button>';

    return(
        <>
            <PreviewWindowTwo
            filledButtonComp={filledButtonComp} 
            filledButtonCompString={filledButtonCompString}
            filledButtonCompStringTwo={filledButtonCompStringTwo}
            filledButtonCompStringThree={filledButtonCompStringThree}
            showColor={fillButtonState.showColor} 
            selectedColor={fillButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}



            {/*<div class="flex justify-center items-center bg-white items-center" style={{"width":"100%", "height":"45%"}}>
            <div className={fillButtonState.selectedFont + " " + fillButtonState.selectedColor + " rounded py-1 px-3 text-white font-medium text-md"}>Whereas recognition</div>
            <div class="ml-5">
                <div class="relative mt-1 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>*/}
