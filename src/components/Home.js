import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
  return (
    <div className="flex h-full justify-center align-center">
      <button onClick={()=>navigate('/countries')} className="bg-red-300 p-3 rounded-md">
        Get Countries
      </button>
    </div>
  );
}
