import { useForm } from 'react-hook-form';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { Container, BannerLogo, ContainerInput, Paragraph, Input, Label, Form, NavLink } from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const schema = Yup.object({
    name: Yup.string()
        .required('Campo obrigatório'),

    email: Yup.string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),

    password: Yup.string()
        .min(6, 'A senha deve conter no minimo 6 digitos')
        .required(),

    passwordConfirm: Yup.string()
        .min(6, 'A senha deve conter no minimo6 digitos')
        .required()
        .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
}).required();

export function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema)
        });
    const onSubmit = async (data) => {
        try {
            const response = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            });
            
            if(response.status === 201){
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
                return toast.success('Cadastro efetuado com sucesso');
            }
        } catch (error) {
            if(error.response?.status === 401){
                return toast.error('Usuário já existe')
            } else {
                return toast.error('Falha ao realizar o cadastro, tente novamente')
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
                    Cadastrar
                </Paragraph>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input>
                        <Label>Nome</Label>
                        <input {...register("name")} type='name' />
                        <p>{errors.name?.message}</p>
                    </Input>
                    <Input>
                        <Label>Email</Label>
                        <input {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </Input>
                    <Input>
                        <Label>Senha</Label>
                        <input {...register("password")} type='password' />
                        <p>{errors.password?.message}</p>
                    </Input>
                    <Input>
                        <Label>Confirmar Senha</Label>
                        <input {...register("passwordConfirm")} type='password' />
                        <p>{errors.passwordConfirm?.message}</p>
                    </Input>
                    <Button type='submit'>Cadastrar</Button>
                </Form>
                <p>Já possui conta? <NavLink to='/login'>Clique aqui</NavLink></p>
            </ContainerInput>
        </Container>
    )
}