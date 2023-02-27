import { FiSearch } from 'react-icons/fi';
import { Container, Profile } from "./styles";
import { ButtonText } from "../ButtonText"
import { Input } from "../Input"

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
        <div className='input'>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>

        </div>

      <Profile to='/profile'>
        <div>
          <strong>Rodrigo Faria</strong>
          <ButtonText title="sair" />
        </div>

        <img 
          src="http://github.com/rodrigo0089.png" 
          alt="Foto do usuário" 
        />

      </Profile>


    </Container>
  )
}