import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Form, LabelInput, Container, LabelUpload, Select, InputUpload, ButtonSubmit, ErrorMensage, CheckoutOffer } from './style';
import { Image } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().required().typeError('Digite o preço do produto'),
    category: yup.object().required('Selecione a categoria'),
    offer: yup.bool().required(),
}).required();

export function EditProducts() {
    const [fileName, setFilename] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const { state: {product} } = useLocation();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, []);

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
        productFormData.append('offer', data.offer);

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando produto',
            success: 'Produto editado com sucesso',
            error: 'Erro ao editar produto, tente novamente'
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
                    <input type="name" {...register("name")} defaultValue={product.name} />
                </LabelInput>
                <ErrorMensage>{errors.name?.message}</ErrorMensage>

                <LabelInput>
                    <label>Preço</label>
                    <input type="number" {...register("price")} defaultValue={product.price / 100}/>
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
                    defaultValue={product.category}
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
                                defaultValue={product.category}
                            />
                        )} />
                </LabelInput>
                <ErrorMensage>{errors.category?.message}</ErrorMensage>
                <LabelInput>
                    <CheckoutOffer>
                        <input type="checkbox"
                        {...register('offer')}/>
                        <p>produto em oferta?</p>
                    </CheckoutOffer>
                </LabelInput>
                <ButtonSubmit>Editar produto</ButtonSubmit>
            </Form>
        </Container>
    )
}