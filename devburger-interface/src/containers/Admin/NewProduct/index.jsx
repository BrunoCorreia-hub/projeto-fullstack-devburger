import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Form, LabelInput, Container, LabelUpload, Select, InputUpload, ButtonSubmit, ErrorMensage } from './style';
import { Image } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().required().typeError('Digite o preço do produto'),
    category: yup.object().required('Selecione a categoria'),   
    file: yup.mixed().test('required', 'Escolha um arquivo de imagem', (value) => {
        return value && value.length > 0;
    }).test('fileSize', 'Carregue arquivos de até 3mb', (value) => {
        return value && value.length > 0 && value[0].size <= 5000000;
    }).test('type', 'Carregue imagens JPEG ou PNG', (value) => {
        return value && value.length > 0 && (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
    }),
}).required();

export function NewProduct() {
    const [fileName, setFilename] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, [])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema)
            
        });
    const onSubmit = async (data) => {
        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando produto',
            success: 'Produto criado com sucesso',
            error: 'Erro ao adicionar produto, tente novamente'
        });  
        setTimeout(() => {
            navigate('/admin/produtos')
        }, 2000);     
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <LabelInput>
                    <label>Nome</label>
                    <input type="name" {...register("name")} />
                </LabelInput>
                <ErrorMensage>{errors.name?.message}</ErrorMensage>

                <LabelInput>
                    <label>Preço</label>
                    <input type="number" {...register("price")} />
                </LabelInput>
                <ErrorMensage>{errors.price?.message}</ErrorMensage>

                <LabelInput>
                    <LabelUpload>
                        <Image />
                        <InputUpload type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => (
                                setFilename(value.target.files[0]?.name),
                                register("file").onChange(value)
                            )}
                        />
                        {fileName || 'Upload do produto'}
                    </LabelUpload>
                    <ErrorMensage>{errors.file?.message}</ErrorMensage>
                </LabelInput>

                <LabelInput>
                    <label>Categoria</label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder='Categoria'
                                menuPortalTarget={document.body}
                            />
                        )} />
                </LabelInput>
                <ErrorMensage>{errors.category?.message}</ErrorMensage>
                <ButtonSubmit>Cadastrar produto</ButtonSubmit>
            </Form>
        </Container>
    )
}