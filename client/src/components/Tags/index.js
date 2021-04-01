import './style.css'

const index = ({ selectedTags, setSelectedTags, selectedTagsError }) => {
    const handleTagClick = (tag) => {
        if(tag.classList.contains("selected")){
            tag.classList.remove('selected')
            setSelectedTags(selectedTags.filter(item => item !== tag.id))
            return
        }
        tag.classList.add('selected')
        setSelectedTags([...selectedTags, tag.id])
    }

    return (
        <div className="tags-container">
            <label className="testtt" htmlFor="tags">Tags</label>
            <div className="tag-row">
                <div className="tag" id="606605513bb36c0edc2055f2" onClick={(e) => handleTagClick(e.target)}>Web</div>
                <div className="tag" id="6066055b44a62f5fa45461a2" onClick={(e) => handleTagClick(e.target)}>Ilustration</div>
                <div className="tag" id="60660564dcc3be090a3519aa" onClick={(e) => handleTagClick(e.target)}>Graphics</div>
                <div className="tag" id="60660569229d8a3866a2dee6" onClick={(e) => handleTagClick(e.target)}>UI</div>
            </div>
            <div className="tag-row">
                <div className="tag" id="60660572cd02a308f986ff0a" onClick={(e) => handleTagClick(e.target)}>Design</div>
                <div className="tag" id="606605785703ce67e8182ee1" onClick={(e) => handleTagClick(e.target)}>App</div>
                <div className="tag" id="6066057d7b89bf411ce5ad56" onClick={(e) => handleTagClick(e.target)}>Iphone</div>
                <div className="tag" id="60660584f791a14a33a84fb7" onClick={(e) => handleTagClick(e.target)}>Interface</div>
            </div>
            <div className="tag-row">
                <div className="tag" id="6066058ce629355244a02204" onClick={(e) => handleTagClick(e.target)}>Icon</div>
                <div className="tag" id="606605978889b906e8b23eb1" onClick={(e) => handleTagClick(e.target)}>Web Design</div>
            </div>
            <span className="input-error-message">{selectedTagsError}</span>
        </div>
    )
}

export default index