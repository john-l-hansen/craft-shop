import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function EcommerceThree(){
    const [ecommerceThreeState, setEcommerceThreeState] = useState({
        showColor: false,
        selectedColor:"bg-night-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setEcommerceThreeState({
            ...ecommerceThreeState,
            showColor:!ecommerceThreeState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setEcommerceThreeState({
            ...ecommerceThreeState,
            showColor:!ecommerceThreeState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setEcommerceThreeState({
            ...ecommerceThreeState,
            selectedFont: e.target.value,
        })
    }

     /*const sampleFunction = (e) => {
        e.preventDefault();
        setState({
            
        })
    };*/

    let ecommerceThreeComp = (
            
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl" style={{"width":"220px", "height":"auto"}}>
            <div className="py-4 px-4 flex">
                <div className="w-1/2 flex justify-start items-center">
                <svg cwidth="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" fill="white" />
          <path
            d="M55.3333 36.6667V55.3333H36.6667V36.6667H55.3333ZM55.3333 34H36.6667C35.2 34 34 35.2 34 36.6667V55.3333C34 56.8 35.2 58 36.6667 58H55.3333C56.8 58 58 56.8 58 55.3333V36.6667C58 35.2 56.8 34 55.3333 34ZM48.8533 45.8133L44.8533 50.9733L42 47.52L38 52.6667H54L48.8533 45.8133Z"
            fill="#CECECE" />
          <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" stroke="#CECECE" />
        </svg>
                </div>
                <div className="w-1/2 flex justify-end items-start">
                    <div>
                        <div className="p-1 flex justify-around items-center rounded-full bg-white dark:bg-black">
                            <h2 className="m-0 p-0">1</h2>
                            <div>
                            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_461_8024)">
                  <path d="M4.6665 14.6666L7.99984 18L11.3332 14.6666H4.6665Z" fill="#B3B4B5" />
                </g>
                <g clip-path="url(#clip1_461_8024)">
                  <path d="M4.6665 9.33337L7.99984 6.00004L11.3332 9.33337H4.6665Z" fill="#B3B4B5" />
                </g>
                <defs>
                  <clipPath id="clip0_461_8024">
                    <rect width="16" height="16" fill="white" transform="translate(0 8)" />
                  </clipPath>
                  <clipPath id="clip1_461_8024">
                    <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
                  </clipPath>
                </defs>
              </svg>
                            </div>

                            <div className="dark:text-gray-200 flex h-6 w-6 items-center justify-center rounded-full border-gray-200 border-2">
                            <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.8334 6.83317H6.83341V11.8332H5.16675V6.83317H0.166748V5.1665H5.16675V0.166504H6.83341V5.1665H11.8334V6.83317Z"
                  fill="" />
              </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <h2 className={"m-0 p-0 font-bold text-base leading-6 " + ecommerceThreeState.selectedFont}>$1,0000.00</h2>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="px-4 pb-4">
                <h2 className={"m-0 p-0 font-bold text-sm leading-5 " + ecommerceThreeState.selectedFont}>Product Name</h2>
                <h3 className={"m-0 p-0 text-gray-400 font-normal text-xs leading-4 " + ecommerceThreeState.selectedFont}>Product Description</h3>
            </div>
            <div className="px-4 pb-4">
                <h3 className={"m-0 p-0 text-gray-300 font-normal text-xs leading-4 " + ecommerceThreeState.selectedFont}>Unis Item: <span className="text-gray-800 dark:text-gray-200">00-00-000000</span></h3>
            </div>
        </div>
           
    )

        let ecommerceThreeCompString = '<div class="bg-gray-50 rounded-xl" style="width:220px; height:auto">\n'+
        '            <div class="py-4 px-4 flex">\n'+
        '                <div class="w-1/2 flex justify-start items-center">\n'+
        '                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                        <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" fill="white"/>\n'+
        '                            <path d="M55.3333 36.6667V55.3333H36.6667V36.6667H55.3333ZM55.3333 34H36.6667C35.2 34 34 35.2 34 36.6667V55.3333C34 56.8 35.2 58 36.6667 58H55.3333C56.8 58 58 56.8 58 55.3333V36.6667C58 35.2 56.8 34 55.3333 34ZM48.8533 45.8133L44.8533 50.9733L42 47.52L38 52.6667H54L48.8533 45.8133Z" fill="#CECECE"/>\n'+
        '                        <rect x="0.5" y="0.5" width="91" height="91" rx="7.5" stroke="#CECECE"/>\n'+
        '                    </svg>\n'+
        '                </div>\n'+
        '                <div class="w-1/2 flex justify-end items-start">\n'+
        '                    <div>\n'+
        '                        <div class="p-1 flex justify-around items-center rounded-full bg-white">\n'+
        '                            <h2 class="m-0 p-0">1</h2>\n'+
        '                            <div>\n'+
        '                            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M0.666748 3.3335L4.00008 0.000162601L7.33341 3.3335H0.666748Z" fill="#B3B4B5"/>\n'+
        '                            </svg>\n'+
        '                            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                <path d="M0.666748 0.666504L4.00008 3.99984L7.33341 0.666504H0.666748Z" fill="#B3B4B5"/>\n'+
        '                            </svg>\n'+
        '                            </div>\n'+
        '\n'+
        '                            <div class="w-6 h-6 flex justify-center items-center border-2 border-black rounded-full">\n'+
        '                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
        '                                    <path d="M11.8334 6.83317H6.83341V11.8332H5.16675V6.83317H0.166748V5.1665H5.16675V0.166504H6.83341V5.1665H11.8334V6.83317Z" fill="black"/>\n'+
        '                                </svg>\n'+
        '                            </div>\n'+
        '                        </div>\n'+
        '                        <div class="flex flex-col items-end">\n'+
        '                            <h2 class="m-0 p-0 font-bold text-base leading-6 ' + ecommerceThreeState.selectedFont + '">$1,0000.00</h2>\n'+
        '                        </div>\n'+
        '                    </div> \n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <div class="px-4 pb-4">\n'+
        '                <h2 class="m-0 p-0 font-bold text-sm leading-5 ' + ecommerceThreeState.selectedFont + '">Product Name</h2>\n'+
        '                <h3 class="m-0 p-0 text-gray-400 font-normal text-xs leading-4 ' + ecommerceThreeState.selectedFont + '">Product Description</h3>\n'+
        '            </div>\n'+
        '            <div class="px-4 pb-4">\n'+
        '                <h3 class="m-0 p-0 text-gray-300 font-normal text-xs leading-4 ' + ecommerceThreeState.selectedFont + '">Unis Item: <span class="text-gray-800">00-00-000000</span></h3>\n'+
        '            </div>\n'+
        '        </div>';
                        
                        
            
    return(
        <>
            <PreviewWindowDisabled 
            ecommerceThreeComp={ecommerceThreeComp} 
            ecommerceThreeCompString={ecommerceThreeCompString}
            showColor={ecommerceThreeState.showColor} 
            selectedColor={ecommerceThreeState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}