import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Banner() {
  const [bannerState, setBannerState] = useState({
    showColor: false,
    selectedColor:
      'bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setBannerState({
      ...bannerState,
      showColor: !bannerState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setBannerState({
      ...bannerState,
      showColor: !bannerState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setBannerState({
      ...bannerState,
      selectedFont: e.target.value,
    })
  }

  let bannerComp = (
    <div>
      <div
        className="rounded-l bg-gray-100 dark:bg-gray-800"
        style={{ width: '750px', height: 'auto' }}
      >
        <div className="relative flex items-center justify-center py-3">
          <p
            className={
              'm-0 p-0 text-base font-bold leading-5 text-gray-900 dark:text-gray-50 ' +
              bannerState.selectedFont
            }
          >
            Insert message here
          </p>
          <div className="absolute right-0 mr-5%">
            <svg
              class="fill-current"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill=""
              />
            </svg>
          </div>
        </div>
      </div>
      <br />
      <div
        className="rounded-l bg-red-100 text-red-50 dark:bg-red-900 dark:text-red-300"
        style={{ width: '750px', height: 'auto' }}
      >
        <div className="relative flex items-center justify-center py-3">
          <p
            className={
              '0 m-0 p-0 text-base font-bold  leading-5 ' +
              bannerState.selectedFont
            }
          >
            Insert message here
          </p>
          <div className="absolute right-0 mr-5%">
            <svg
              class="fill-current"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill=""
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )

  let bannerCompString =
    '<div class="rounded-l bg-gray-100" style="width:750px; height:auto">\n' +
    '                <div class="py-3 flex justify-center items-center relative">\n' +
    '                    <p class="p-0 m-0 font-bold text-base text-gray-900 leading-5 ' +
    bannerState.selectedFont +
    '">Insert message here</p>\n' +
    '                    <div class="mr-5% absolute right-0">\n' +
    '                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#5E5F5F"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>'

  let bannerCompStringTwo =
    '<div class="rounded-l bg-red-100" style="width:750px; height:auto">\n' +
    '                <div class="py-3 flex justify-center items-center relative">\n' +
    '                    <p class="p-0 m-0 font-bold text-base text-red-500 leading-5 ' +
    bannerState.selectedFont +
    '">Insert message here</p>\n' +
    '                    <div class="mr-5% absolute right-0">\n' +
    '                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#E52628"/>\n' +
    '                        </svg>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>'

  return (
    <>
      <PreviewWindowDisabled
        bannerComp={bannerComp}
        bannerCompString={bannerCompString}
        bannerCompStringTwo={bannerCompStringTwo}
        showColor={bannerState.showColor}
        selectedColor={bannerState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
