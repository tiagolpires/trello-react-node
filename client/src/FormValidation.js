const formValidation = (cardName, setCardNameError, email, setEmailError, desc, setDescError) => {
    let isError = false
    if(cardName.length === 0) {
        setCardNameError('Please enter a name')
        isError = true
    }
    if(!email.includes('@')) {
        setEmailError('Insert a @ on the email field')
        isError = true
    }
    if(email.length < 4) {
        setEmailError('Please enter an email')
        isError = true
    }
    if(desc.length === 0) {
        setDescError('Please enter a description')
        isError = true
    }
    if(isError) {
        return false
    }
    return true
}

export default formValidation
