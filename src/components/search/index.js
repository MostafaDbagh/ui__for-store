
export const Search = () => {


    return (
        <div className="row d-flex"  style={{width:"99%",margin:"0 auto",background:'#212529',borderRadius:'10px',}}>
            <div className="w-25 text-white d-flex justify-content-center align-items-center" style={{fontFamily:'oswald'}} >Toma Botique</div>
            <div className="w-75"  style={{padding:'32px'}}>
        <form className="flex-row-reverse d-flex">
            <div style={{fontFamily:'lato'}} >
                <input type="text" className="form-control" style={{minWidth:'270px',minHeight:'50px',}} id="inputSearch" placeholder="Enter Symbol..." onChange={()=>{}} />
            </div>
            <button type="submit" className="btn btn-dark mx-2" style={{width:'120px',background:"#27c8a3",fontFamily:'lato'}}>Search</button>
        </form>
        </div>
        </div>

    )
}