import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return(
        <header>
            <h1>Sistema Escolar</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link to='/lista'>Listar Alunos</Link>
            </nav>
        </header>
    )
}