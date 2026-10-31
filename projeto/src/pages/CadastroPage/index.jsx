import './style.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function CadastroPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    async function cadastrar(evento) {
        // Impede o comportamento padrão do formulário

        evento.preventDefault()

        // Envia os dados para a API
        
        try {
            await api.post('/alunos', {nome, email, telefone})

            toast.success('Aluno cadastrado com sucesso!')

            setNome('')
            setEmail('')
            setTelefone('')
        } catch (error) {
            toast.error('Erro ao cadastrar aluno. Tente novamente.')
        }
    }

    return(
        <div className="cadastro-page">
           <form onSubmit={cadastrar}>
                <h2>Cadastro de Alunos</h2>
                <label>Nome:
                <input
                    id='campo-nome'
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    />
                </label>

                <label>Email:
                <input
                    id='campo-email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>

                <label>Telefone:
                <input
                    id='campo-telefone'
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                    />
                </label>


                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );

                    
}