import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xrgwllzg");
if (state.succeeded) {
    toast.success('message send successful')
}

    return (
        <form onSubmit={handleSubmit}>
            <div className='shadow-2xl dark:bg-gray-800 dark:border-gray-700 mt-9 px-10 py-6 border rounded-lg space-y-5'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold text-white">Name</span>
                    </label>
                    <input type="text" id='name' name='name' placeholder="Enter your name" className="input input-bordered w-full border-[#00FFFF] rounded-sm " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold text-white">Email</span>
                    </label>
                    <input type="email" id='email' name='email' placeholder="Enter your email" className="input input-bordered w-full border-[#00FFFF] rounded-sm " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold text-white">Subject</span>
                    </label>
                    <input type="text" id='subject' name='subject' placeholder="Enter subject" className="input input-bordered w-full border-[#00FFFF] rounded-sm " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-bold text-white">Subject</span>
                    </label>
                    <input type="text" id='message' name='message' placeholder="Enter message" className="input input-bordered w-full h-36 border-[#00FFFF] rounded-sm " />
                </div>
                <div className=' text-start'>
                    <button type='submit'disabled={state.submitting} className=' bg-[#00FFFF] text-black  uppercase px-8 py-2 rounded-sm hover:bg-white font-[ Radio Canada,sans-serif]'>SEND</button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;