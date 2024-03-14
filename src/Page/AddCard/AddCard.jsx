import { useState } from 'react';
import Select from 'react-select';
import usePostProject from '../../Hooks/usePostProject/usePostProject';
import { HostImg } from '../../Hooks/useImage/useImage';
import toast from 'react-hot-toast';

const AddCard = () => {
    const options = [
        { value: 'HTML5', label: 'HTML5' },
        { value: 'CSS3', label: 'CSS3' },
        { value: 'Tailwind Css', label: 'Tailwind Css' },
        { value: 'Bootstrap', label: 'Bootstrap' },
        { value: 'Java Script', label: 'Java Script' },
        { value: 'React js', label: 'React js' },
        { value: 'Node js', label: 'Node js' },
        { value: 'Express js', label: 'Express js' },
        { value: 'MongoDb', label: 'MongoDb' },
        { value: 'React Metarial', label: 'React Metarial' },
    ]

    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedOptions2, setSelectedOptions] = useState([]);
    const handleOptionChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
    };

    const handleSelectChange2 = (event) => {
        setSelectedOptions(event)
    }

    const HandleToSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const link = form.link.value
        const option = selectedOption
        const option2 = selectedOptions2
        const description = form.description.value
        const image = form.file.files[0]
        HostImg(image).then(data => {
            if (data.success) {
                const img = data.data.display_url
                const project = { name, link, description, option, option2, img }
                fetch('https://portfolio-server-297y.onrender.com/addProject',{
                // fetch('https://portfolio-server-297y.onrender.com/addProject',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(project)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success(`${name} added successful`)
                })
                // usePostProject(project)
                    // .then(data => {
                    //     console.log(data)
                    //     toast.success(`${name} added successful`)
                    // })
            }
        })
    }

    return (
        <form onSubmit={HandleToSubmit}>
            <div className='flex gap-6 mx-3'>
                <input type="text" name='name' placeholder="Type Your Project Name" className="input border-[#00FFFF] rounded-sm w-6/12  font-mono font-bold" />
                <input type="text" name='link' placeholder="Type Your Project Live Link" className="input border-[#00FFFF] rounded-sm w-6/12  font-mono font-bold" />
            </div>
            <div className=' mt-8'>
                <Select
                    isMulti
                    name="colors"
                    options={options}
                    value={selectedOptions2}
                    onChange={handleSelectChange2}
                    className="basic-multi-select font-bold font-mono hover:text-[#00FFFF] text-start"
                    classNamePrefix="select"
                />
            </div>
            <div className='flex gap-6 mt-8'>
                <input type="file" name='file' className="file-input border-[#00FFFF] w-6/12 rounded-sm" />
                <select
                    className="select select-accent w-6/12 rounded-sm"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="All">All</option>
                    <option value="Dynamic">Dynamic</option>
                    <option value="Static">Static</option>
                </select>
            </div>
            <div className='mt-8'>
                <input type="text" name='description' placeholder="Type Your Project Description" className="input border-[#00FFFF] rounded-sm   font-mono font-bold w-full h-40" />
            </div>
            <div className=' mt-8'>
                <button className=' bg-[#00FFFF] hover:bg-[#51e1e1] w-full rounded-sm py-2 text-white font-bold uppercase font-mono'>Submit</button>
            </div>
        </form>
    );
};

export default AddCard;