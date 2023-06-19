import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonFilter(){

    const [buttonFilterState, setButtonFilterState] = useState({
        showColor: false,
        selectedColor:"bg-gray-800",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setButtonFilterState({
            ...buttonFilterState,
            showColor:!buttonFilterState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setButtonFilterState({
            ...buttonFilterState,
            showColor:!buttonFilterState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setButtonFilterState({
            ...buttonFilterState,
            selectedFont: e.target.value,
        })
    }

    
    let buttonFilterCompString = '<button class="relative py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-100 active:bg-gray-200 leading-5 text-sm" style="margin-bottom:100px">\n'+
    '                <div>\n'+
    '                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                        <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n'+
    '                    </svg>\n'+
    '                </div>\n'+
    '                <div class="ml-3 ' + buttonFilterState.selectedFont + '">Filter</div>\n'+
    '                <div class="absolute py-4 h-38 w-[154px] flex flex-col justify-center items-center bg-white left-0 top-0 mt-10 border border-gray-100 rounded-lg" style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)">\n'+
    '                    <div class="flex justify-center items-center mb-3">\n'+
    '                        <input type="checkbox" class="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>\n'+
    '                        <div class="ml-4 ' + buttonFilterState.selectedFont + '">Option 1</div>\n'+
    '                    </div>\n'+
    '                    <div class="flex justify-center items-center mb-3">\n'+
    '                        <input type="checkbox" class="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>\n'+
    '                        <div class="ml-4 ' + buttonFilterState.selectedFont + '">Option 2</div>\n'+
    '                    </div>\n'+
    '                    <div class="flex justify-center items-center mb-3">\n'+
    '                        <input type="checkbox" class="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>\n'+
    '                        <div class="ml-4 ' + buttonFilterState.selectedFont + '">Option 3</div>\n'+
    '                    </div>\n'+
    '                    <div class="flex justify-center items-center">\n'+
    '                        <input type="checkbox" class="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>\n'+
    '                        <div class="ml-4 ' + buttonFilterState.selectedFont + '">Option 4</div>\n'+
    '                    </div>\n'+
    '                </div>\n'+
    '            </button>';

    let buttonFilterComp = (
        <div>
            {/*component start*/}
            <button className="relative py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-100 active:bg-gray-200 leading-5 text-sm" style={{"marginBottom":"100px"}}>
                <div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                </svg>
                </div>
                <div className={"ml-3 " + buttonFilterState.selectedFont}>Filter</div>
                <div className="absolute py-4 h-38 w-[154px] flex flex-col justify-center items-center bg-white left-0 top-0 mt-10 border border-gray-100 rounded-lg" style={{"boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"}}>
                    <div className="flex justify-center items-center mb-3">
                        <input type="checkbox" className="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>
                        <div className={"ml-4 " + buttonFilterState.selectedFont}>Option 1</div>
                    </div>
                    <div className="flex justify-center items-center mb-3">
                        <input type="checkbox" className="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>
                        <div className={"ml-4 " + buttonFilterState.selectedFont}>Option 2</div>
                    </div>
                    <div className="flex justify-center items-center mb-3">
                        <input type="checkbox" className="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>
                        <div className={"ml-4 " + buttonFilterState.selectedFont}>Option 3</div>
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="checkbox" className="h-4 w-4 rounded checked:text-gray-600 focus:ring-0"></input>
                        <div className={"ml-4 " + buttonFilterState.selectedFont}>Option 4</div>
                    </div>
                </div>
            </button>
        </div>
    )

    return(
        <>
            <PreviewWindowDisabled
            buttonFilterComp={buttonFilterComp} 
            buttonFilterCompString={buttonFilterCompString}
            showColor={buttonFilterState.showColor} 
            selectedColor={buttonFilterState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}