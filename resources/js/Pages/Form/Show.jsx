import React from 'react';
import { useForm, usePage } from '@inertiajs/react'
import SuccessAlert from '../../Components/SuccessAlert';
import ErrorAlert from '../../Components/ErrorAlert';

export default function ShowForm() {
  // Flash message
  const { flash } = usePage().props

  // use form
  const { data, post, errors, processing, setData, reset, wasSuccessful } = useForm({
    email: '',
    subject: '',
    body: ''
  })

  // onHandleChange
  const onHandleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    post('/submit', {
      data: data,
      onSuccess: () => reset()
    })
  }

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Email form</h1>

      <p className="text-sm text-gray-700">Use this form to submit an email.</p>

      {
        flash.status &&
        (flash.status == 'OK'
          ? <SuccessAlert message={flash.message} />
          : <ErrorAlert message={flash.message} />)
      }

      <form className="space-y-2 w-full max-w-lg" onSubmit={handleSubmit}>
        <input
          onChange={onHandleChange}
          value={data.email}
          className="block w-full border border-gray-500 p-1"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
        />
        {
          errors.email && <small className='text-red-500'>{errors.email}</small>
        }

        <input
          onChange={onHandleChange}
          value={data.subject}
          className="block w-full border border-gray-500 p-1"
          type="text"
          name="subject"
          placeholder="Subject"
          required={true}
        />
        {
          errors.subject && <small className='text-red-500'>{errors.subject}</small>
        }

        <textarea
          onChange={onHandleChange}
          value={data.body}
          className="block w-full border border-gray-500 p-1"
          name="body"
          placeholder="Email body"
          rows="5"
          required={true}
        />
        {
          errors.body && <small className='text-red-500'>{errors.body}</small>
        }

        <div>
          <button
            disabled={processing}
            type="submit"
            className="bg-gray-800 hover:bg-black text-white p-2 rounded"
          >Submit form</button>
        </div>
      </form>
    </div>
  );
}
