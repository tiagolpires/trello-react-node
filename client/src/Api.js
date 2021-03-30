module.exports = {
    async createCard(body) {
        try {
            await fetch("http://localhost:3001/api/card", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            return
        } catch (error) {
            console.error(error.message)
        }
    }
}