import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_3305qbl', 'template_on590ll', form.current, {
          publicKey: 'aWj61erYGOSvBnxgN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    
    };



  return (
    <div className=' flex items-center justify-center bg-stone-600 w-fit mx-auto mt-[5rem] p-5 rounded-2xl ' >
        <form 
        ref={form}
         onSubmit={sendEmail}
          className=' flex flex-col gap-4  '>
            <input type="text" placeholder='name' name="to_name" className=' p-2 outline-none rounded-lg' />

            <input type="email"  id=""  placeholder='email' name="from_name" className=' p-2 outline-none rounded-lg' />

            {/* <input type="password" name="" id="" placeholder='password' className=' p-2 outline-none rounded-lg' /> */}

            <textarea name="message" id="" cols="30" rows="10"  placeholder='message' className=' p-2 outline-none rounded-lg'></textarea>
            
            <input type="submit" value="Send" className=' bg-gradient-to-r from-blue-400 to-green-500 rounded-xl' />
            
        </form>
    </div>
  )
}

export default Form