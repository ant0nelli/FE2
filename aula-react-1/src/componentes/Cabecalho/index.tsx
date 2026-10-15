const Cabecalho = ({ titulo }: {titulo:string}) => {
    return (
        <header>
            <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://images.vexels.com/media/users/3/151613/isolated/preview/71680abcac6aa750c99fa2589a48998b-icone-plano-de-fatia-de-bolo-de-cereja.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                            { titulo }
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho