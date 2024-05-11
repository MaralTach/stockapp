

const handleChange = (event) => {
   
    setInfo({...info, [e.target.name]: e.target.value })

}
const handleSubmit = (event) => {

    event.preventDefault()
    console.log(info)
    postStock()
}

const addFirm = async () => {

    try {
        const { data } = await axios.post(`/firms/`, info)
    }catch (error) {
        console.log(error)
    }    
}

const handleEdit = (event) => {

    event.preventDefault()
    console.log(info)
    editStock()
}

editStock = async () => {

    try {
        const { data } = await axiosToken.put(`/firms/${id}/`, info)
    }catch (error) {
        console.log(error)
    }
}

putStok = async () => {
    
}
