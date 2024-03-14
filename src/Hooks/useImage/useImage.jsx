
const image_hosting_token = import.meta.env.VITE_IMAGE_KEY;

export const HostImg = async (image) => {
    const url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const formData = new FormData()
    formData.append("image", image)
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    console.log(data)
    return data


}
