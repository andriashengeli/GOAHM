const rendervideo = () => new Promise(resolve => setTimeout(() => resolve("RENDERING...."),4000))
const upload = () => new Promise(resolve => setTimeout(() => resolve("UPLOADING"),3000));
const addtitle = () => new Promise(resolve => setTimeout(() => resolve("Metadata added..."),1500))



const published = async () => {
    try{
        const rendering = await rendervideo()
        console.log(rendering)
        console.log("video is rendered")

        const uploading = await upload()
        console.log(uploading)
        console.log("video is uploaded")

        const addTitle = await addtitle()
        console.log(addTitle)
        console.log("metadata is added ")


        console.log("your video is uploaded on youtube succesfully")
    } catch(err){
        console.log(err)
    }
    
}

published()
    


