import React,{ useState } from 'react';
import { Container, Form, Input, Button, Image } from './styles'
// import Api from '../../services/api';

// const { autentication } = Api()

function Login({ history }) {

  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');
  // const [msgErro, setMsgErro] = useState('');
  // const [isLoading, setLoading] = useState(false);

  const [dados, setDados] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setDados(Object.assign(dados, { [name]: value }));
  };
  
  // const executaLogin = async evento =>{
  //   try{
  //     evento.preventDefault();
  //     setLoading(true);
  //     setMsgErro('');
      

  //     const resultado = await autentication(dados.email, dados.password);
  //     if(resultado?.data?.token){
  //       console.log('===',resultado)
  //       localStorage.setItem('accessToken', resultado.data.token);
  //       localStorage.setItem('usuarioNome', resultado.data.nome);
  //       localStorage.setItem('usuarioEmail', resultado.data.email);
  //       props.setAccessToken(resultado.data.token);
        
  //       history.push('/home')
  //     }
  // }catch(e){
  //     console.log('e');
  //     if(e?.response?.data?.erro){
  //         setMsgErro(e.response.data.erro);
  //     }else{
  //         setMsgErro('Não foi possível efetuar o login, fale com o administrador.')
  //     }
  // }
  // setLoading(false);
  // }
  const executaLogin = () => { 
    history.push('/home')
  }

  return (
    <>

      <Container>

        <Image src="images/logo.png"/>
        <Form onSubmit={handleSubmit}>
          
          <Input
            type="text"
            name="email"
            placeholder="Informe seu email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={handleChange}
          />
          <Button onClick={executaLogin}>Entrar</Button>
        </Form>
      </Container>
    </>
  );
}
export default Login;