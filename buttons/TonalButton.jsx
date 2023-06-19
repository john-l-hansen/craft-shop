import React, { Component, useState } from 'react'
import PreviewWindowFour from '../PreviewWindowFour'

export default function TonalButton() {
  const [tonalButtonState, setTonalButtonState] = useState({
    showColor: false,
    selectedColor:
      'bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setTonalButtonState({
      ...tonalButtonState,
      showColor: !tonalButtonState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setTonalButtonState({
      ...tonalButtonState,
      showColor: !tonalButtonState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setTonalButtonState({
      ...tonalButtonState,
      selectedFont: e.target.value,
    })
  }

  let tonalButtonComp = (
    <div>
      {/*Standard*/}
      <div className="flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 dark:active:bg-gray-800 ' +
            tonalButtonState.selectedColor +
            ' ' +
            tonalButtonState.selectedFont
          }
        >
          Enabled
        </button>
        {/*<button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    Hovered
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    Focused
                </button> 
                <button className="py-2 px-6 rounded-lg font-medium text-gray-800 bg-gray-300 ml-3 leading-5 text-sm">
                    Active
                </button>*/}
        <button
          className="ml-3 rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-300 disabled:bg-gray-100 disabled:dark:bg-gray-900 disabled:dark:text-gray-700"
          disabled
        >
          Disabled
        </button>
      </div>

      {/*Plus Left*/}
      <div className="mt-5 flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 dark:active:bg-gray-800 ' +
            tonalButtonState.selectedColor +
            ' ' +
            tonalButtonState.selectedFont
          }
        >
          <div>
            <svg
              width="12"
              height="12"
              class="fill-current"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
            </svg>
          </div>
          <div className="ml-3">Enabled</div>
        </button>
        {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Hovered</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Focused</div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-300 ml-3 leading-5 text-sm">
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                    <div className="ml-3">Actice</div>
                </button>*/}
        <button
          className="ml-3 flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-300 disabled:bg-gray-100 disabled:dark:bg-gray-900 disabled:dark:text-gray-700"
          disabled
        >
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
      <div className="mt-5 flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 dark:active:bg-gray-800 ' +
            tonalButtonState.selectedColor +
            ' ' +
            tonalButtonState.selectedFont
          }
        >
          <div className="mr-3">Enabled</div>
          <div>
          <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
          </div>
        </button>
        {/*<button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div className="mr-3">Hovered</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-200 ml-3 leading-5 text-sm">
                    <div className="mr-3">Focused</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button> 
                <button className="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 bg-gray-300 ml-3 leading-5 text-sm">
                    <div className="mr-3">Actice</div>
                    <div>
                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>
                        </svg>
                    </div>
                </button>*/}
        <button
          className="ml-3 flex items-center justify-center rounded-lg py-2 px-6 text-sm font-medium leading-5 text-gray-300 disabled:bg-gray-100 disabled:dark:bg-gray-900 disabled:dark:text-gray-700"
          disabled
        >
          <div className="mr-3">Disabled</div>
          <div>
          <svg width="12" height="12" class="fill-current" viewBox="0 0 12 12" fill="none"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" />
        </svg>
          </div>
        </button>
      </div>
    </div>
  )

  let tonalButtonCompString =
    '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' +
    tonalButtonState.selectedColor +
    ' ' +
    tonalButtonState.selectedFont +
    '">Enabled</button>'

  let tonalButtonCompStringTwo =
    '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' +
    tonalButtonState.selectedColor +
    ' ' +
    tonalButtonState.selectedFont +
    '">\n' +
    '                    <div>\n' +
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                    <div class="ml-3">Enabled</div>\n' +
    '                </button>'

  let tonalButtonCompStringThree =
    '<button class="py-2 px-6 flex justify-center items-center rounded-lg font-medium text-gray-800 leading-5 text-sm ' +
    tonalButtonState.selectedColor +
    ' ' +
    tonalButtonState.selectedFont +
    '">\n' +
    '                    <div class="mr-3">Enabled</div>\n' +
    '                    <div>\n' +
    '                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                            <path d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z" fill="#444545"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                </button>'

  return (
    <>
      <PreviewWindowFour
        tonalButtonComp={tonalButtonComp}
        tonalButtonCompString={tonalButtonCompString}
        tonalButtonCompStringTwo={tonalButtonCompStringTwo}
        tonalButtonCompStringThree={tonalButtonCompStringThree}
        showColor={tonalButtonState.showColor}
        selectedColor={tonalButtonState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
