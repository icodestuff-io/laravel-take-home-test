import React, { useState } from "react";

export default function SuccessAlert({ message }) {
  const [open, setOpen] = useState(true)

  const classes = open
    ? 'flex items-center bg-green-100 border border-green-300 text-green-700 rounded px-4 py-3'
    : 'hidden flex items-center bg-green-100 border border-green-300 text-green-700 rounded px-4 py-3'

  return (
    <div className={classes}>
      <button
        onClick={() => setOpen(false)}
        className='transition duration-300 ease-in-out hover:bg-green-200 flex items-center justify-center rounded-full'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
      </button>
      <span className="ml-2">
        { message }
      </span>
    </div>
  )
}
