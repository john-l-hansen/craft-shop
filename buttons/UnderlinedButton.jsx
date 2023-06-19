import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function UnderlinedButton(){

    const [underlinedButtonState, setUnderlinedButtonState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setUnderlinedButtonState({
            ...underlinedButtonState,
            showColor:!underlinedButtonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setUnderlinedButtonState({
            ...underlinedButtonState,
            showColor:!underlinedButtonState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setUnderlinedButtonState({
            ...underlinedButtonState,
            selectedFont: e.target.value,
        })
    }
   

    let underlinedButtonComp = (
        <div>
            {/*Standard*/}
            <div className="flex justify-center items-center">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-900 hover:text-gray-400 focus:text-gray-500 active:text-gray-700 leading-5 text-sm dark:text-gray-200 dark:hover:text-gray-400 underline underline-offset-4 " + underlinedButtonState.selectedFont}>
                    Enabled
                </button>
                {/*<button className="py-2 px-6 rounded-lg font-medium text-gray-400 bg-white ml-3 leading-5 text-sm">
                    Hovered
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-500 bg-white ml-3 leading-5 text-sm">
                    Focused
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-700 bg-white ml-3 leading-5 text-sm">
                    Active
                </button> */}
                <button className="py-2 px-6 rounded-lg font-medium text-gray-300 ml-3 leading-5 text-sm underline underline-offset-4 disabled:dark:text-gray-700" disabled>
                    Disabled
                </button> 
            </div>

            {/*Plus Left*/}
            <div className="flex justify-center items-center mt-5">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-900 hover:text-gray-400 focus:text-gray-500 active:text-gray-700 leading-5 text-sm dark:text-gray-200 dark:hover:text-gray-400 underline underline-offset-4 " + underlinedButtonState.selectedFont}>
                    <div>
                    <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button>
                {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-400 bg-white ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#989A9C"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-500 bg-white ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#88898B"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-700 bg-white ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#5E5F5F"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button>*/} 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-300 disabled:bg-transparent ml-3 leading-5 text-sm underline underline-offset-4 disabled:dark:text-gray-700 " disabled>
                    <div>
                    <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                    <div className="ml-3">Disabled</div>
                </button> 
            </div>

            {/*Plus Right*/}
            <div className="flex justify-center items-center  mt-5">
                <button className={"py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-900 hover:text-gray-400 focus:text-gray-500 active:text-gray-700 leading-5 text-sm dark:text-gray-200 dark:hover:text-gray-400 " + underlinedButtonState.selectedFont}>
                    <div className="mr-3 underline underline-offset-4">Enabled</div>
                    <div>
                    <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                </button>
                {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-400 bg-white ml-3 leading-5 text-sm">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#989A9C"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-500 bg-white ml-3 leading-5 text-sm">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#88898B"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-700 bg-white ml-3 leading-5 text-sm">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#5E5F5F"/>
                        </svg>
                    </div>
                </button>*/} 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-300 ml-3 leading-5 text-sm underline underline-offset-4 disabled:dark:text-gray-700 bg-transparent" disabled>
                    <div className="mr-3">Disabled</div>
                    <div>
                    <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
                    </div>
                </button> 
            </div>
        </div>
    )

    let underlinedButtonCompString = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-900 hover:text-gray-400 focus:text-gray-500 active:text-gray-700 leading-5 text-sm ' + underlinedButtonState.selectedFont + '">Enabled</button>';

    let underlinedButtonCompStringTwo = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-900 hover:text-gray-400 focus:text-gray-500 active:text-gray-700 leading-5 text-sm ' + underlinedButtonState.selectedFont + '">\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#323232"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3">Enabled</div>\n'+
    '                </button>';

    let underlinedButtonCompStringThree = '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-900 hover:text-gray-400 focus:text-gray-500 active:text-gray-700 leading-5 text-sm ' + underlinedButtonState.selectedFont + '">\n'+
    '                    <div class="mr-3">Enabled</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#323232"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                </button>';

    return(
        <>
            <PreviewWindowDisabled
            underlinedButtonComp={underlinedButtonComp} 
            underlinedButtonCompString={underlinedButtonCompString}
            underlinedButtonCompStringTwo={underlinedButtonCompStringTwo}
            underlinedButtonCompStringThree={underlinedButtonCompStringThree}
            showColor={underlinedButtonState.showColor} 
            selectedColor={underlinedButtonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}