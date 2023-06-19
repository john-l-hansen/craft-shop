import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonRadio() {
  const [buttonRadioState, setButtonRadioState] = useState({
    showColor: false,
    selectedColor: 'bg-gray-800',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setButtonRadioState({
      ...buttonRadioState,
      showColor: !buttonRadioState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setButtonRadioState({
      ...buttonRadioState,
      showColor: !buttonRadioState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setButtonRadioState({
      ...buttonRadioState,
      selectedFont: e.target.value,
    })
  }

  let buttonRadioComp = (
    <div>
      {/*component start*/}
      <div
        className={'dark:bg-gray-900 dark:text-white flex items-center justify-start rounded-xl bg-gray-50 py-3'}
        style={{ width: '380px', height: 'auto' }}
      >
        <div className="flex w-4/5 items-center justify-start">
          <div className="ml-5">
            <div className="rounded-full bg-gray-100 py-4 px-4">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232" />
          </svg>
            </div>
          </div>
          <div className="ml-5">
            <h4
              className={
                'm-0 p-0 text-sm leading-5 ' + buttonRadioState.selectedFont
              }
            >
              Button Name
            </h4>
          </div>
        </div>
        <div className="flex w-1/5 items-center justify-end">
          <div className="mr-5">
          <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path class="fill-current"
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
            fill="#323232" />
          <path class="fill-current"
            d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
            fill="#32232" />
        </svg>
          </div>
        </div>
      </div>
      <br />
      {/*component start*/}
      <div
        className="flex items-center justify-start rounded-xl border border-gray-200 bg-white py-3 dark:bg-gray-900 dark:text-white"
        style={{ width: '380px', height: 'auto' }}
      >
        <div className="flex w-1/2 items-center justify-start">
          <div className="ml-5">
            <div className="rounded-full bg-gray-100 py-4 px-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232" />
              </svg>
            </div>
          </div>
          <div className="ml-5">
            <h4
              className={
                'm-0 p-0 text-sm leading-5 ' + buttonRadioState.selectedFont
              }
            >
              Button Name
            </h4>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-end">
          <div className="mr-5">
          <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path class="fill-current"
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
            fill="#323232" />
          <path class="fill-current"
            d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
            fill="#32232" />
        </svg>
          </div>
        </div>
      </div>
    </div>
  )

  let buttonRadioCompString =
    '<div class="py-3 flex justify-start items-center rounded-xl bg-gray-50" style="width:380px; height:auto">\n' +
    '                <div class="w-4/5 flex justify-start items-center">\n' +
    '                    <div class="ml-5">\n' +
    '                        <div class="py-4 px-4 bg-gray-100 rounded-full">\n' +
    '                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232"/>\n' +
    '                            </svg>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="ml-5">\n' +
    '                        <h4 class="p-0 m-0 leading-5 text-sm ' +
    buttonRadioState.selectedFont +
    '">Button Name</h4>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="w-1/5 flex justify-end items-center">\n' +
    '                    <div class="mr-5">\n' +
    '                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="#323232"/>\n' +
    '                            <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="#323232"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>'

  let buttonRadioCompStringTwo =
    '<div class="py-3 flex justify-start items-center border border-gray-200 rounded-xl bg-white" style="width:380px; height:auto">\n' +
    '                <div class="w-1/2 flex justify-start items-center">\n' +
    '                    <div class="ml-5">\n' +
    '                        <div class="py-4 px-4 bg-gray-100 rounded-full">\n' +
    '                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#323232"/>\n' +
    '                            </svg>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="ml-5">\n' +
    '                        <h4 class="p-0 m-0 leading-5 text-sm ' +
    buttonRadioState.selectedFont +
    '">Button Name</h4>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="w-1/2 flex justify-end items-center">\n' +
    '                    <div class="mr-5">\n' +
    '                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="#323232"/>\n' +
    '                            <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="#323232"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>'

  return (
    <>
      <PreviewWindowDisabled
        buttonRadioComp={buttonRadioComp}
        buttonRadioCompString={buttonRadioCompString}
        buttonRadioCompStringTwo={buttonRadioCompStringTwo}
        showColor={buttonRadioState.showColor}
        selectedColor={buttonRadioState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}

/*<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_404_17983)">
                                <rect width="40" height="40" rx="20" fill="#ECECEC"/>
                                <g clip-path="url(#clip1_404_17983)">
                                    <path d="M27 21H21V27H19V21H13V19H19V13H21V19H27V21Z" fill="#323232"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_404_17983">
                                    <rect width="40" height="40" rx="20" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_404_17983">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>*/
