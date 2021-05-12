const Header = (props) => {
    return (
        <div className="Header-container">
            <h1>What to Watch</h1>
            <input className="Header" value={props.value} type="text" name="searchTitle" onChange={(e) => props.onType(e)} placeholder="Title" />
            <button className="button" onClick={(e) => props.onSubmit()}>Search</button>
        </div>

    );
}

export default Header;