import React from 'react'

export const Home = () => {
  return (
    <div className="flex h-screen">
      

      <main className="flex-1 p-10 bg-white">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-2xl">Settings</h2>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search..." className="p-2 rounded-md border border-gray-300"/>
            <div className="relative">
              <span className="bg-red-600 text-white rounded-full px-2 py-1 absolute -top-2 -right-2">36</span>
            </div>
          </div>
        </header>

        <section className="space-y-10">
          <div className="flex space-x-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <img src="profile-pic.png" alt="Profile" className="w-full h-full object-cover rounded-full"/>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Upload New</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
            </div>
          </div>

          <div className="max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
                <input type="email" id="email" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">Phone Number</label>
                <input type="text" id="phone" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="fax" className="block font-semibold mb-1">Fax</label>
                <input type="text" id="fax" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="country" className="block font-semibold mb-1">Country</label>
                <input type="text" id="country" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="city" className="block font-semibold mb-1">City</label>
                <input type="text" id="city" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="postcode" className="block font-semibold mb-1">Postcode</label>
                <input type="text" id="postcode" className="w-full p-2 border rounded-md"/>
              </div>
              <div>
                <label htmlFor="state" className="block font-semibold mb-1">State</label>
                <input type="text" id="state" className="w-full p-2 border rounded-md"/>
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Save Changes</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
