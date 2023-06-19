import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Collapsible(){
    const [collapsibleState, setCollapsibleState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
    });

    const toggleColor = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            showColor:!collapsibleState.showColor,
        })
    }

     const changeColor = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            showColor:!collapsibleState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setCollapsibleState({
            ...collapsibleState,
            selectedFont: e.target.value,
        })
    }

   let collapsibleComp = (
    <div className="border border-gray-100 dark:border-gray-700 rounded-lg" style={{"width":"416px", "height":"auto"}}>
        <div className="w-full px-5 py-3 flex justify-start items-center rounded-t-lg bg-gray-50 dark:bg-gray-900">
            <div className="w-1/2 flex justify-start">
                <div className="font-bold text-base leading-6 font-lato text-gray-800 dark:text-white">
                    <h4 className={"p-0 m-0 font-bold text-base leading-6 " + collapsibleState.selectedFont}>Header</h4>
                    <p className={"p-0 m-0 font-normal text-sm leading-5 " + collapsibleState.selectedFont}>Subheader</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <div>
                <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3247_47670)">
              <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8.00003L6 14L7.41 15.41Z" fill="" />
            </g>
            <defs>
              <clipPath id="clip0_3247_47670">
                <rect width="24" height="24" fill="" transform="matrix(1 0 0 -1 0 24)" />
              </clipPath>
            </defs>
          </svg>
                </div>
            </div>
        </div>
        <div className="w-full px-5 flex justify-center items-center border border-gray-100 dark:border-gray-700 rounded-b-lg">
            <div>
                <p className={"p-0 m-0 py-6 leading-5 text-sm font-normal " + collapsibleState.selectedFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, tellus eu blandit viverra, velit leo efficitur velit, 
                    eu condimentum dui leo SeSed blandit fringilla ante, quis bibenvel nisl. Sed blandit fringilla ante, quis bibendum justo molestie eu. Proin mollis nulla vel enim malesuada, ac accumsan sem auctor.</p>
            </div>
        </div>
    </div>
    )

    let collapsibleCompString = '<div class="border border-gray-100 rounded-lg bg:white" style="width:416px; height:auto">\n'+
    '        <div class="w-full px-5 py-3 flex justify-start items-center rounded-t-lg bg-gray-50">\n'+
    '            <div class="w-1/2 flex justify-start">\n'+
    '                <div class="leading-normal">\n'+
    '                    <h4 class="p-0 m-0 font-bold text-base leading-6 ' + collapsibleState.selectedFont + '">Header</h4>\n'+
    '                    <p class="p-0 m-0 font-normal text-sm leading-5 ' + collapsibleState.selectedFont + '">Subheader</p>\n'+
    '                </div>\n'+
    '            </div>\n'+
    '            <div class="w-1/2 flex justify-end">\n'+
    '                <div>\n'+
    '                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n'+
    '                        <path\n'+
    '                            d="M1.41 7.41003L6 2.83003L10.59 7.41003L12 6.00003L6 3.43323e-05L0 6.00003L1.41 7.41003Z"\n'+
    '                            fill="#323232"\n'+
    '                        />\n'+
    '                    </svg>\n'+
    '                </div>\n'+
    '            </div>\n'+
    '        </div>\n'+
    '        <div class="w-full px-5 flex justify-center items-center rounded-lg bg-white">\n'+
    '            <div>\n'+
    '                <p class="p-0 m-0 py-6 leading-5 text-sm font-normal ' + collapsibleState.selectedFont + '">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, tellus eu blandit viverra, velit leo efficitur velit, \n'+
    '                    eu condimentum dui leo SeSed blandit fringilla ante, quis bibenvel nisl. Sed blandit fringilla ante, quis bibendum justo molestie eu. Proin mollis nulla vel enim malesuada, ac accumsan sem auctor.</p>\n'+
    '            </div>\n'+
    '        </div>\n'+
    '    </div>';



    return(
        <>
        <PreviewWindowDisabled 
        collapsibleComp={collapsibleComp} 
        collapsibleCompString={collapsibleCompString}
        showColor={collapsibleState.showColor} 
        selectedColor={collapsibleState.selectedColor}
        changeColor={changeColor} 
        changeFont={changeFont} 
        toggleColor={toggleColor}
        />
        </>
    )
}