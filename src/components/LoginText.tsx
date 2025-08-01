import React from 'react'
import '../globals.css'

type LoginTextProps = {
    name: string;
    value: string;
    onChange: (val: string) => void;
    type?: string;
}; 

const LoginText = ({name, value, onChange, type="text"}: LoginTextProps) => {
  return (
    <div className="flex items-center justify-center">
        <input 
            className="px-3 py-2 w-1/4 my-2 border rounded focus:ring-2 focus:ring-blue-500" 
            placeholder={name} 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type}
        />
    </div>
  )
}

export default LoginText