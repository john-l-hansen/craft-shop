import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonToggleLarge() {
  const [buttonToggleLargeState, setButtonToggleLargeState] = useState({
    showColor: false,
    selectedColor: 'bg-gray-800',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setButtonToggleLargeState({
      ...buttonToggleLargeState,
      showColor: !buttonToggleLargeState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setButtonToggleLargeState({
      ...buttonToggleLargeState,
      showColor: !buttonToggleLargeState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setButtonToggleLargeState({
      ...buttonToggleLargeState,
      selectedFont: e.target.value,
    })
  }

  let buttonToggleLargeCompString =
    '<div class="flex justify-center items-center bg-white items-center">\n' +
    '                <button class="py-4 px-8 flex justify-center items-center border border-solid border-gray-300 rounded-l-lg font-medium text-gray-800 bg-white focus:border-gray-800">\n' +
    '                    <div>\n' +
    '                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M26.7833 2.34984C26.45 1.3665 25.5167 0.666504 24.4167 0.666504H6.08333C4.98333 0.666504 4.06667 1.3665 3.71667 2.34984L0.25 12.3332V25.6665C0.25 26.5832 1 27.3332 1.91667 27.3332H3.58333C4.5 27.3332 5.25 26.5832 5.25 25.6665V23.9998H25.25V25.6665C25.25 26.5832 26 27.3332 26.9167 27.3332H28.5833C29.5 27.3332 30.25 26.5832 30.25 25.6665V12.3332L26.7833 2.34984ZM6.66667 3.99984H23.8167L25.6167 9.18317H4.86667L6.66667 3.99984ZM26.9167 20.6665H3.58333V12.3332H26.9167V20.6665Z" fill="#444545"/>\n' +
    '                            <path d="M7.75 18.9998C9.13071 18.9998 10.25 17.8805 10.25 16.4998C10.25 15.1191 9.13071 13.9998 7.75 13.9998C6.36929 13.9998 5.25 15.1191 5.25 16.4998C5.25 17.8805 6.36929 18.9998 7.75 18.9998Z" fill="#444545"/>\n' +
    '                            <path d="M22.75 18.9998C24.1307 18.9998 25.25 17.8805 25.25 16.4998C25.25 15.1191 24.1307 13.9998 22.75 13.9998C21.3693 13.9998 20.25 15.1191 20.25 16.4998C20.25 17.8805 21.3693 18.9998 22.75 18.9998Z" fill="#444545"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                    <div class="ml-6">\n' +
    '                        <div class="text-base text-gray-800 leading-6 ' +
    buttonToggleLargeState.selectedFont +
    '">Selection</div>\n' +
    '                        <div class="text-xs text-gray-400 leading-4 ' +
    buttonToggleLargeState.selectedFont +
    '">description</div>\n' +
    '                    </div>\n' +
    '                </button>\n' +
    '                <button class="py-4 px-8 flex justify-center items-center border border-solid border-gray-300 rounded-r-lg font-medium text-gray-800 bg-white focus:border-gray-800">\n' +
    '                    <div>\n' +
    '                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M29.9167 0L29.65 0.05L20.75 3.5L10.75 0L1.35 3.16667C1 3.28333 0.75 3.58333 0.75 3.96667V29.1667C0.75 29.6333 1.11667 30 1.58333 30L1.85 29.95L10.75 26.5L20.75 30L30.15 26.8333C30.5 26.7167 30.75 26.4167 30.75 26.0333V0.833333C30.75 0.366667 30.3833 0 29.9167 0ZM12.4167 4.11667L19.0833 6.45V25.8833L12.4167 23.55V4.11667ZM4.08333 5.76667L9.08333 4.08333V23.5833L4.08333 25.5167V5.76667ZM27.4167 24.2333L22.4167 25.9167V6.43333L27.4167 4.5V24.2333Z" fill="#777879"/>\n' +
    '                    </svg>\n' +
    '                    </div>\n' +
    '                    <div class="ml-6">\n' +
    '                        <div class="text-base text-gray-800 leading-6 ' +
    buttonToggleLargeState.selectedFont +
    '">Selection</div>\n' +
    '                        <div class="text-xs text-gray-400 leading-4 ' +
    buttonToggleLargeState.selectedFont +
    '">description</div>\n' +
    '                    </div>\n' +
    '                </button>\n' +
    '            </div>'

  let buttonToggleLargeComp = (
    <div>
      {/*component start*/}
      <div className="flex items-center items-center justify-center">
        <button className="flex items-center justify-center rounded-l-lg border border-solid border-gray-300 py-4 px-8 font-medium text-gray-800 focus:border-gray-800 dark:bg-transparent dark:text-gray-700   dark:focus:border-gray-200 dark:focus:text-gray-200">
          <div>
            <svg
              class="fill-current"
              width="31"
              height="28"
              viewBox="0 0 31 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.7833 2.34984C26.45 1.3665 25.5167 0.666504 24.4167 0.666504H6.08333C4.98333 0.666504 4.06667 1.3665 3.71667 2.34984L0.25 12.3332V25.6665C0.25 26.5832 1 27.3332 1.91667 27.3332H3.58333C4.5 27.3332 5.25 26.5832 5.25 25.6665V23.9998H25.25V25.6665C25.25 26.5832 26 27.3332 26.9167 27.3332H28.5833C29.5 27.3332 30.25 26.5832 30.25 25.6665V12.3332L26.7833 2.34984ZM6.66667 3.99984H23.8167L25.6167 9.18317H4.86667L6.66667 3.99984ZM26.9167 20.6665H3.58333V12.3332H26.9167V20.6665Z"
                fill=""
              />
              <path
                d="M7.75 18.9998C9.13071 18.9998 10.25 17.8805 10.25 16.4998C10.25 15.1191 9.13071 13.9998 7.75 13.9998C6.36929 13.9998 5.25 15.1191 5.25 16.4998C5.25 17.8805 6.36929 18.9998 7.75 18.9998Z"
                fill=""
              />
              <path
                d="M22.75 18.9998C24.1307 18.9998 25.25 17.8805 25.25 16.4998C25.25 15.1191 24.1307 13.9998 22.75 13.9998C21.3693 13.9998 20.25 15.1191 20.25 16.4998C20.25 17.8805 21.3693 18.9998 22.75 18.9998Z"
                fill=""
              />
            </svg>
          </div>
          <div className="ml-6">
            <div
              className={
                'text-base leading-6 ' +
                buttonToggleLargeState.selectedFont
              }
            >
              Selection
            </div>
            <div
              className={
                'text-xs leading-4 ' +
                buttonToggleLargeState.selectedFont
              }
            >
              description
            </div>
          </div>
        </button>
        <button className="flex items-center justify-center rounded-r-lg border border-solid border-gray-300 bg-white bg-white py-4 px-8 font-medium text-gray-800 focus:border-gray-800 focus:border-gray-800 dark:bg-transparent dark:text-gray-700 dark:focus:border-gray-200 dark:focus:text-gray-200 -ml-[1px]">
          <div>
          <svg class="fill-current" width="31" height="30" viewBox="0 0 31 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.9167 0L29.65 0.05L20.75 3.5L10.75 0L1.35 3.16667C1 3.28333 0.75 3.58333 0.75 3.96667V29.1667C0.75 29.6333 1.11667 30 1.58333 30L1.85 29.95L10.75 26.5L20.75 30L30.15 26.8333C30.5 26.7167 30.75 26.4167 30.75 26.0333V0.833333C30.75 0.366667 30.3833 0 29.9167 0ZM12.4167 4.11667L19.0833 6.45V25.8833L12.4167 23.55V4.11667ZM4.08333 5.76667L9.08333 4.08333V23.5833L4.08333 25.5167V5.76667ZM27.4167 24.2333L22.4167 25.9167V6.43333L27.4167 4.5V24.2333Z"
            fill="" />
        </svg>
          </div>
          <div className="ml-6">
            <div
              className={
                'text-base leading-6 ' +
                buttonToggleLargeState.selectedFont
              }
            >
              Selection
            </div>
            <div
              className={
                'text-xs leading-4 ' +
                buttonToggleLargeState.selectedFont
              }
            >
              description
            </div>
          </div>
        </button>
      </div>
    </div>
  )

  return (
    <>
      <PreviewWindowDisabled
        buttonToggleLargeComp={buttonToggleLargeComp}
        buttonToggleLargeCompString={buttonToggleLargeCompString}
        showColor={buttonToggleLargeState.showColor}
        selectedColor={buttonToggleLargeState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
