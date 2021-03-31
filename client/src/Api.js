const createCard = async(body) => {
    const response = await fetch("http://localhost:3001/api/card", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
    return response.ok
}

export default createCard