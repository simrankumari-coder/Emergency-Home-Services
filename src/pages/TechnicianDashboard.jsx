import React from 'react'
import { useState } from 'react'
const TechnicianDashboard = () => {
  const [requests, setRequests] = useState(() => {
    const storeRequests = localStorage.getItem("storeRequest");
    return storeRequests ? JSON.parse(storeRequests) : []
  })
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser") || "null")

  const assignedRequests = requests.filter((item) => item.technician?.id === loggedUser?.technicianId)
  console.log("log in technician", loggedUser)
  console.log("Saved reuqytes", requests)
  console.log("assinged requests", assignedRequests)
  const updateStatus = (requestIndex, newStatus) => {

    const updatedRequests = requests.map((item, index) =>
      index === requestIndex ? {
        ...item, status: newStatus
      } : item)
    setRequests(updatedRequests)
    localStorage.setItem("storeRequest", JSON.stringify(updatedRequests))
  }

  if (!loggedUser || loggedUser.role !== "Technician") {
    return (
      <div className='min-h-screen p-6'>
        <p>Please log in with a technician Account</p>
      </div>
    )
  }
  console.log("Logged-in user", loggedUser)
  console.log("saved requests", requests)
  return (
    <div>
      <div className='min-h-screen bg-gray-50 p-6'>
        <h1 className='text-3xl font-bold text-slate-900 mb-6'>Welcome , {loggedUser.name}</h1>
        <p className='text-gray-600 mb-6'>Your assigned service requests</p>
        {assignedRequests.length === 0 ? (<p className='text-gray-600 '>No service assinged yet .</p>) :
          (<div className='space-y-5'>
            {assignedRequests.map((item, index) => {
              const requestIndex = requests.indexOf(item)
              return (<div key={item.id || requestIndex} className='ng-white rounded-xl shadow-sm border p-6 mb-4'>
                <h2 className='text-xl font-bold'>{item.service}</h2>
                <p>Customer: {item.name}</p>
                <p>Phone: {item.phone}</p>
                <p>Address: {item.address}</p>
                <p>Problem: {item.problem}</p>
                <p>Technician:{item.technician?.name}</p>
                <p className='mt-3 font-semibold text-blue-700 '>Status:{item.status}</p>
                <div className='flex flex-wrap gap-3 mt-4'>
                  <button onClick={() => updateStatus(requestIndex, "Technician on the way")} className='bg-blue-700 text-white px-4 py-2'>On the Way</button>

                  <button onClick={() => updateStatus(requestIndex, "In Progress")} className='bg-blue-700 text-white px-4 py-2'>Start Service</button>

                  <button onClick={() => updateStatus(requestIndex, "Completed")} className='bg-blue-700 text-white px-4 py-2'>Complete Service</button>

                </div>

              </div>)
            })}
          </div>)}
      </div>
    </div>
  )
}

export default TechnicianDashboard
