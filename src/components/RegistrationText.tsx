import React from 'react'
import '../globals.css'

const RegistrationText = ({name}: {name: string}) => {
  return (
    <div className="flex items-center justify-center">
     <div className="grid gap-4">
        <div className="flex gap-2">
            <p>{name}</p>
            <input type="text" className="mb-5 bg-gray-200"></input>
        </div>
     </div>
    </div>
  )
}

export default RegistrationText