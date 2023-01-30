
export const Search = () => {

    const handleChange = (e) => {
        const { value } = e.target;
        // setSearch(value);
        // setcounter(counter + 1);
    }
    return (
        <div className=" row w-50 ">
            <div className=" col0-md-8 m-auto p-5 bg-light border border-dark rounded" >

        <form className="d-flex justify-content-around">
            <div className="w-75 " >
                <input type="text" className="form-control" id="inputSearch" placeholder="Enter Symbol..." onChange={(e) => handleChange(e)} />
            </div>
            <button type="submit" class="btn btn-dark w-25 mx-2 ">Search</button>
        </form>
        </div>
        </div>

    )
}