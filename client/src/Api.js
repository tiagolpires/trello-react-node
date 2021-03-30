module.exports = {
    async createCard(body) {
        await fetch("http://localhost:3001/api/card", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        .then((response) => {
            return
        })
        .catch((error) => {
            console.error(error)
        })
    }
}