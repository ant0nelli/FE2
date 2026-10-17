const Cabecalho = ({ titulo }: {titulo:string}) => {
    return (
        <header>
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://cdn-icons-png.flaticon.com/512/17008/17008681.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                            { titulo }
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho