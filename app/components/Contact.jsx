import { useState } from 'react';

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  async function submitForm(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      return 
    } else {
      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.warn('The form could not be sent, please try again later.', error);
      }
    }
  }

  return (
    <div className="absolute z-20 bg-[#000000b3] px-8 pt-4 border-1 border-gray-100 rounded-md">
      <div className="mx-auto my-8 text-center">
        <h2 className="">Get in Touch with me</h2>
      </div>
      <form className="font-[Roboto] text-sm">
        <div className="mx-4 my-4">
          <input name='name' onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}} className="border-1 border-gray-500 rounded-sm p-1" type="text" placeholder="Name" required/>
        </div>
        <div className="mx-4 my-4">
          <input name='email' onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}} className="border-1 border-gray-500 rounded-sm p-1" type="email" placeholder="Email" required/>
        </div>
        <div className="mx-4 my-4">
          <input name='subject' onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}} className="border-1 border-gray-500 rounded-sm p-1" type="text" placeholder="Subject" required/>
        </div>
        <div className="mx-4 my-4">
          <textarea name='message' onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}} className="border-1 border-gray-500 rounded-sm p-1" type="text" placeholder="Message" required/>
        </div>
        <button className="mx-4 my-4 px-4 py-2 bg-gray-500 rounded-full hover:bg-gray-100 hover:text-black transition-all cursor-pointer" onClick={(e) => submitForm(e)}>Submit</button>
      </form>
    </div>
  );
}