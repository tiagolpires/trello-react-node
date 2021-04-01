const formValidation = (cardName, setCardNameError, email, setEmailError, desc, setDescError, selectedTags, setSelectedTagsError, checkBox, setCheckBoxError) => {
    let isError = false
    if(cardName.length === 0) {
        setCardNameError('Insira um nome')
        isError = true
    }
    if(!email.includes('@')) {
        setEmailError('Insira um @ no campo')
        isError = true
    }
    if(email.length < 4) {
        setEmailError('Insira um e-mail válido')
        isError = true
    }
    if(desc.length === 0) {
        setDescError('Insira uma descrição')
        isError = true
    }
    if(selectedTags.length === 0) {
        setSelectedTagsError('Escolha pelo menos uma tag')
        isError = true
    }
    if(checkBox.length === 0) {
        setCheckBoxError('Escolha a posição do card')
        isError = true
    }
    if(isError) {
        return false
    }
    return true
}

export default formValidation
