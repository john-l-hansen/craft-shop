import React, { Component, useState } from 'react' 
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function Inputchipfilled(){

    const [inputchipfilledState, setInputchipfilledState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setInputchipfilledState({
            ...inputchipfilledState,
            showColor:!inputchipfilledState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        console.log(e.target.classList.value)
        setInputchipfilledState({
            ...inputchipfilledState,
            showColor:!inputchipfilledState.showColor,
            selectedColor: e.target.classList.value,
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setInputchipfilledState({
            ...inputchipfilledState,
            selectedFont: e.target.value,
        })
    }


    let inputchipfilledComp = (
        <div>
            <div className="flex justify-center items-center ">
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white " + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont}>
                    Enabled
                </button>
            </div>

            <div className="flex justify-center items-center mt-5">
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm " + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont}>
                    <div className="mr-3">Enabled</div>
                    <div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="white"/>
                        </svg>
                    </div>
                </button>
            </div>

            <div className="flex justify-center items-center mt-5">
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm " + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont}>
                    <div>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.19 0.7575C12.04 0.315 11.62 0 11.125 0H2.875C2.38 0 1.9675 0.315 1.81 0.7575L0.25 5.25V11.25C0.25 11.6625 0.5875 12 1 12H1.75C2.1625 12 2.5 11.6625 2.5 11.25V10.5H11.5V11.25C11.5 11.6625 11.8375 12 12.25 12H13C13.4125 12 13.75 11.6625 13.75 11.25V5.25L12.19 0.7575ZM3.1375 1.5H10.855L11.665 3.8325H2.3275L3.1375 1.5ZM12.25 9H1.75V5.25H12.25V9Z" fill="white"/>
                        <path d="M3.625 8.25C4.24632 8.25 4.75 7.74632 4.75 7.125C4.75 6.50368 4.24632 6 3.625 6C3.00368 6 2.5 6.50368 2.5 7.125C2.5 7.74632 3.00368 8.25 3.625 8.25Z" fill="white"/>
                        <path d="M10.375 8.25C10.9963 8.25 11.5 7.74632 11.5 7.125C11.5 6.50368 10.9963 6 10.375 6C9.75368 6 9.25 6.50368 9.25 7.125C9.25 7.74632 9.75368 8.25 10.375 8.25Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button> 
            </div>

            <div className="flex justify-center items-center  mt-5">
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm " + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont}>
                    <div>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.19 0.7575C12.04 0.315 11.62 0 11.125 0H2.875C2.38 0 1.9675 0.315 1.81 0.7575L0.25 5.25V11.25C0.25 11.6625 0.5875 12 1 12H1.75C2.1625 12 2.5 11.6625 2.5 11.25V10.5H11.5V11.25C11.5 11.6625 11.8375 12 12.25 12H13C13.4125 12 13.75 11.6625 13.75 11.25V5.25L12.19 0.7575ZM3.1375 1.5H10.855L11.665 3.8325H2.3275L3.1375 1.5ZM12.25 9H1.75V5.25H12.25V9Z" fill="white"/>
                        <path d="M3.625 8.25C4.24632 8.25 4.75 7.74632 4.75 7.125C4.75 6.50368 4.24632 6 3.625 6C3.00368 6 2.5 6.50368 2.5 7.125C2.5 7.74632 3.00368 8.25 3.625 8.25Z" fill="white"/>
                        <path d="M10.375 8.25C10.9963 8.25 11.5 7.74632 11.5 7.125C11.5 6.50368 10.9963 6 10.375 6C9.75368 6 9.25 6.50368 9.25 7.125C9.25 7.74632 9.75368 8.25 10.375 8.25Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3 mr-3">Enabled</div>
                    <div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="white"/>
                        </svg>
                    </div>
                </button> 
            </div>

            <div className="flex justify-center items-center  mt-5">
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm " + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont}>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#5E5F5F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6001 9.6C15.6001 11.5882 13.9884 13.2 12.0001 13.2C10.0119 13.2 8.40015 11.5882 8.40015 9.6C8.40015 7.61177 10.0119 6 12.0001 6C13.9884 6 15.6001 7.61177 15.6001 9.6ZM14.4001 9.6C14.4001 10.9255 13.3256 12 12.0001 12C10.6747 12 9.60015 10.9255 9.60015 9.6C9.60015 8.27452 10.6747 7.2 12.0001 7.2C13.3256 7.2 14.4001 8.27452 14.4001 9.6Z" fill="white"/>
                        <path d="M12.0001 15C8.11552 15 4.80571 17.297 3.54492 20.5152C3.85206 20.8202 4.1756 21.1087 4.51412 21.3792C5.45296 18.4246 8.39818 16.2 12.0001 16.2C15.6021 16.2 18.5473 18.4246 19.4862 21.3792C19.8247 21.1087 20.1482 20.8202 20.4554 20.5152C19.1946 17.2971 15.8848 15 12.0001 15Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3">Enabled</div>
                </button> 
            </div>

            <div className="flex justify-center items-center  mt-5">
                <button className={"py-1.5 px-3 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm " + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont}>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#5E5F5F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6001 9.6C15.6001 11.5882 13.9884 13.2 12.0001 13.2C10.0119 13.2 8.40015 11.5882 8.40015 9.6C8.40015 7.61177 10.0119 6 12.0001 6C13.9884 6 15.6001 7.61177 15.6001 9.6ZM14.4001 9.6C14.4001 10.9255 13.3256 12 12.0001 12C10.6747 12 9.60015 10.9255 9.60015 9.6C9.60015 8.27452 10.6747 7.2 12.0001 7.2C13.3256 7.2 14.4001 8.27452 14.4001 9.6Z" fill="white"/>
                        <path d="M12.0001 15C8.11552 15 4.80571 17.297 3.54492 20.5152C3.85206 20.8202 4.1756 21.1087 4.51412 21.3792C5.45296 18.4246 8.39818 16.2 12.0001 16.2C15.6021 16.2 18.5473 18.4246 19.4862 21.3792C19.8247 21.1087 20.1482 20.8202 20.4554 20.5152C19.1946 17.2971 15.8848 15 12.0001 15Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="ml-3 mr-3">Enabled</div>
                    <div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="white"/>
                        </svg>
                    </div>
                </button> 
            </div>

            
        </div>
    )

    
    let inputchipfilledCompString = '<button class="py-1.5 px-3 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont + '">\n'+
    '                    Enabled\n'+
    '                </button>';
    
    let inputchipfilledCompStringTwo = '<button class="py-1.5 px-3 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm ' + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont + '">\n'+
    '                    <div class="mr-3">Enabled</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                            <path d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                </button>';

    let inputchipfilledCompStringThree = '<button class="py-1.5 px-3 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm ' + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont + '">\n'+
    '                    <div>\n'+
    '                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                        <path d="M12.19 0.7575C12.04 0.315 11.62 0 11.125 0H2.875C2.38 0 1.9675 0.315 1.81 0.7575L0.25 5.25V11.25C0.25 11.6625 0.5875 12 1 12H1.75C2.1625 12 2.5 11.6625 2.5 11.25V10.5H11.5V11.25C11.5 11.6625 11.8375 12 12.25 12H13C13.4125 12 13.75 11.6625 13.75 11.25V5.25L12.19 0.7575ZM3.1375 1.5H10.855L11.665 3.8325H2.3275L3.1375 1.5ZM12.25 9H1.75V5.25H12.25V9Z" fill="white"/>\n'+
    '                        <path d="M3.625 8.25C4.24632 8.25 4.75 7.74632 4.75 7.125C4.75 6.50368 4.24632 6 3.625 6C3.00368 6 2.5 6.50368 2.5 7.125C2.5 7.74632 3.00368 8.25 3.625 8.25Z" fill="white"/>\n'+
    '                        <path d="M10.375 8.25C10.9963 8.25 11.5 7.74632 11.5 7.125C11.5 6.50368 10.9963 6 10.375 6C9.75368 6 9.25 6.50368 9.25 7.125C9.25 7.74632 9.75368 8.25 10.375 8.25Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3">Enabled</div>\n'+
    '                </button> ';

    let inputchipfilledCompStringFour = '<button class="py-1.5 px-3 flex justify-center items-center rounded-lg font-medium text-white leading-5 text-sm ' + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont + '">\n'+
    '                    <div>\n'+
    '                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                        <path d="M12.19 0.7575C12.04 0.315 11.62 0 11.125 0H2.875C2.38 0 1.9675 0.315 1.81 0.7575L0.25 5.25V11.25C0.25 11.6625 0.5875 12 1 12H1.75C2.1625 12 2.5 11.6625 2.5 11.25V10.5H11.5V11.25C11.5 11.6625 11.8375 12 12.25 12H13C13.4125 12 13.75 11.6625 13.75 11.25V5.25L12.19 0.7575ZM3.1375 1.5H10.855L11.665 3.8325H2.3275L3.1375 1.5ZM12.25 9H1.75V5.25H12.25V9Z" fill="white"/>\n'+
    '                        <path d="M3.625 8.25C4.24632 8.25 4.75 7.74632 4.75 7.125C4.75 6.50368 4.24632 6 3.625 6C3.00368 6 2.5 6.50368 2.5 7.125C2.5 7.74632 3.00368 8.25 3.625 8.25Z" fill="white"/>\n'+
    '                        <path d="M10.375 8.25C10.9963 8.25 11.5 7.74632 11.5 7.125C11.5 6.50368 10.9963 6 10.375 6C9.75368 6 9.25 6.50368 9.25 7.125C9.25 7.74632 9.75368 8.25 10.375 8.25Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3 mr-3">Enabled</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                            <path d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                </button> ';

    let inputchipfilledCompStringFive = '<button class="py-1.5 px-3 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm ' + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont + '">\n'+
    '                    <div>\n'+
    '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                        <rect width="24" height="24" rx="12" fill="#5E5F5F"/>\n'+
    '                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6001 9.6C15.6001 11.5882 13.9884 13.2 12.0001 13.2C10.0119 13.2 8.40015 11.5882 8.40015 9.6C8.40015 7.61177 10.0119 6 12.0001 6C13.9884 6 15.6001 7.61177 15.6001 9.6ZM14.4001 9.6C14.4001 10.9255 13.3256 12 12.0001 12C10.6747 12 9.60015 10.9255 9.60015 9.6C9.60015 8.27452 10.6747 7.2 12.0001 7.2C13.3256 7.2 14.4001 8.27452 14.4001 9.6Z" fill="white"/>\n'+
    '                        <path d="M12.0001 15C8.11552 15 4.80571 17.297 3.54492 20.5152C3.85206 20.8202 4.1756 21.1087 4.51412 21.3792C5.45296 18.4246 8.39818 16.2 12.0001 16.2C15.6021 16.2 18.5473 18.4246 19.4862 21.3792C19.8247 21.1087 20.1482 20.8202 20.4554 20.5152C19.1946 17.2971 15.8848 15 12.0001 15Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3">Enabled</div>\n'+
    '                </button> ';

    let inputchipfilledCompStringSix = '<button class="py-1.5 px-3 flex justify-center items-center rounded-full font-medium text-white leading-5 text-sm ' + inputchipfilledState.selectedColor +" "+ inputchipfilledState.selectedFont + '">\n'+
    '                    <div>\n'+
    '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                        <rect width="24" height="24" rx="12" fill="#5E5F5F"/>\n'+
    '                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6001 9.6C15.6001 11.5882 13.9884 13.2 12.0001 13.2C10.0119 13.2 8.40015 11.5882 8.40015 9.6C8.40015 7.61177 10.0119 6 12.0001 6C13.9884 6 15.6001 7.61177 15.6001 9.6ZM14.4001 9.6C14.4001 10.9255 13.3256 12 12.0001 12C10.6747 12 9.60015 10.9255 9.60015 9.6C9.60015 8.27452 10.6747 7.2 12.0001 7.2C13.3256 7.2 14.4001 8.27452 14.4001 9.6Z" fill="white"/>\n'+
    '                        <path d="M12.0001 15C8.11552 15 4.80571 17.297 3.54492 20.5152C3.85206 20.8202 4.1756 21.1087 4.51412 21.3792C5.45296 18.4246 8.39818 16.2 12.0001 16.2C15.6021 16.2 18.5473 18.4246 19.4862 21.3792C19.8247 21.1087 20.1482 20.8202 20.4554 20.5152C19.1946 17.2971 15.8848 15 12.0001 15Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                    <div class="ml-3 mr-3">Enabled</div>\n'+
    '                    <div>\n'+
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n'+
    '                            <path d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="white"/>\n'+
    '                        </svg>\n'+
    '                    </div>\n'+
    '                </button>';

    return(
        <>
            <PreviewWindowTwo
            inputchipfilledComp={inputchipfilledComp} 
            inputchipfilledCompString={inputchipfilledCompString}
            inputchipfilledCompStringTwo={inputchipfilledCompStringTwo}
            inputchipfilledCompStringThree={inputchipfilledCompStringThree}
            inputchipfilledCompStringFour={inputchipfilledCompStringFour}
            inputchipfilledCompStringFive={inputchipfilledCompStringFive}
            inputchipfilledCompStringSix={inputchipfilledCompStringSix}
            showColor={inputchipfilledState.showColor} 
            selectedColor={inputchipfilledState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />
        </>
    )
}

