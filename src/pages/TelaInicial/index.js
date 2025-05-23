import { useNavigate } from 'react-router-dom';
import './styles.css'

function Tela() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bem-vindo ao nosso time!</h1>
      <p>Escolha uma das opções abaixo para continuar.</p>
      <button onClick={() => navigate('/cadastro')}>Ir para o Cadastro</button>
      <button onClick={() => navigate('/usuarios')}>Ver usuários cadastrados</button>
    </div>
  );
}

export default Tela;
