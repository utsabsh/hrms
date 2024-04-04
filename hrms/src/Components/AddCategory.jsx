import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_category', {category})
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/category')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='flex justify-center items-center h-3/4'>
    <div className='p-3 rounded w-1/4 border'>
        <h2 className="text-xl font-bold">Add Category</h2>
        <form onSubmit={handleSubmit} className="mt-3">
            <div className='mb-3'>
                <label htmlFor="category" className="block"><strong>Category:</strong></label>
                <input type="text" name='category' placeholder='Enter Category'
                 onChange={(e) => setCategory(e.target.value)} className='border rounded p-2 w-full'/>
            </div>
            <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full'>Add Category</button>
        </form>
    </div>
</div>

  )
}

export default AddCategory