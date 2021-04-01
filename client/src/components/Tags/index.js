import './style.css'

const index = ({ selectedTags, setSelectedTags, selectedTagsError }) => {
    const handleTagClick = async (tag) => {
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
                <div className="tag" id="606333d89bc0fe7aaecd1678" onClick={(e) => handleTagClick(e.target)}>Web</div>
                <div className="tag" id="6065143664acd42705927100" onClick={(e) => handleTagClick(e.target)}>Ilustration</div>
                <div className="tag" id="6065143f1da7ef271325f22f" onClick={(e) => handleTagClick(e.target)}>Graphics</div>
                <div className="tag" id="6065144b8f9676593214f819" onClick={(e) => handleTagClick(e.target)}>UI</div>
            </div>
            <div className="tag-row">
                <div className="tag" id="6065145483a7a52326a445da" onClick={(e) => handleTagClick(e.target)}>Design</div>
                <div className="tag" id="6065145ba5fd4a1f6b89837f" onClick={(e) => handleTagClick(e.target)}>App</div>
                <div className="tag" id="606514623e4dec8e1dd767de" onClick={(e) => handleTagClick(e.target)}>Iphone</div>
                <div className="tag" id="6065146c1c2cdb3f38e11d35" onClick={(e) => handleTagClick(e.target)}>Interface</div>
            </div>
            <div className="tag-row">
                <div className="tag" id="60651476a781033f70e57fdf" onClick={(e) => handleTagClick(e.target)}>Icon</div>
                <div className="tag" id="60651485359098187546e344" onClick={(e) => handleTagClick(e.target)}>Web Design</div>
            </div>
            <span className="input-error-message">{selectedTagsError}</span>
        </div>
    )
}

export default index