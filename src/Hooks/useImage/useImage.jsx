import axios from "axios";

const key = import.meta.env.VITE_IMAGE_KEY;
console.log(key)

export const useImage = async (image) => {
    const IMAGE_HOSTING_URL = `https://api.imgbb.com/1/upload?key=${key}`
    const formData = new FormData()
    formData.append('image', image)
    const res = await axios.post(IMAGE_HOSTING_URL, formData)
    return res.data
};
