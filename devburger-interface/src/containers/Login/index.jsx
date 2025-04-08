import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, BannerLogo, ContainerInput, Paragraph, Input, Label, Form, LinkNav } from './styles';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

const schema = Yup.object({
    email: Yup.string().email('O campo deve ser um email válido').required('Esse campo é obrigatório'),
    password: Yup.string().min(6, 'A senha deve conter no minimo 6 digitos').required()
}).required();

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();
    const { 
        register, 
        handleSubmit,
        formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmit = async (data) => {
        try {
            const response = await api.post('/session', {
                email: data.email,
                password: data.password,
            });

            const { data: userData } = response;

            if(response.status === 200){
                setTimeout(() => {
                    if(userData?.admin === true){
                        navigate('/admin/pedidos');
                    } else {
                        navigate('/');
                    }
                    
                }, 2000);
                putUserData(userData)
                //localStorage.setItem('token', token);
                return toast.success(`Seja bem-vindo(a), ${userData.name}`);           
            }
        } catch (error) {
            if(error.response?.status === 401){
                return toast.error('Email ou senha invalidos');
            } else {
                return toast.error('Erro ao fazer login, tente novamente');
            }
        }
       
      }
    return (
        <Container>
            <BannerLogo>
                <img src={Logo} />
            </BannerLogo>
            <ContainerInput>
                <Paragraph>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span><br />
                    Acesse com seu <span>Login e senha.</span>
                </Paragraph>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input>
                        <Label>Email</Label>
                        <input {...register("email")}/>
                        <p>{errors.email?.message}</p>
                    </Input>
                    <Input>
                        <Label>Senha</Label>
                        <input {...register("password")} type='password'/>
                        <p>{errors.password?.message}</p>
                    </Input>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <LinkNav to='/cadastro'>Clique aqui</LinkNav></p>
            </ContainerInput>
        </Container>
    )
}