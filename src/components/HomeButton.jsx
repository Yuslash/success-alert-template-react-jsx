// import React from 'react'

const HomeButton = () => {

  const handleClick = () => {
    window.location.href = 'https://billionoillid-registration-page.vercel.app/';
  }

  return (
    <div className="mt-10 flex justify-center p-4 ">
          <button onClick={handleClick} className="text-white border rounded-lg border-gray-600 py-4 px-8">Return to Homepage</button>
    </div>
  )
}

export default HomeButton
