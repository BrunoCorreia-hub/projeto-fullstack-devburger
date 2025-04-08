import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';
import Order from '../schemas/Order';
import User from '../models/User';

class OrderController {
    async store(req, res){
        const schema = Yup.object({
            products: Yup.array().required().of(
                Yup.object({
                    id: Yup.number().required(),
                    quantity: Yup.number().required(),
                })
            ),
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (error) {
            return res.status(400).json({ error: error.errors })
        }

       
        const { products } = req.body;

        const productsId = products.map((product) => product.id);
        const findProducts = await Product.findAll({
            where: {
                id: productsId,
            },
            include:[
                {
                    model: Category,
                    as: 'category',
                    attributes: [ 'name' ]
                }
            ]
        });

        const formatedProducts = findProducts.map((product) => {
            const productIndex = products.findIndex((item) => item.id === product.id);

            const newProducts = {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category.name,
                url: product.url,
                quantity: products[productIndex].quantity,
            };
            return newProducts;
        });

       const order = {
        user: {
            id: req.userId,
            name: req.userName
        },
        products: formatedProducts,
        status: 'pedido realizado'
       };

       const createdOder = await Order.create(order)

        return res.status(201).json(createdOder)
    };
    async index(req, res){
        const orders = await Order.find();

        return res.json(orders);
    };

    async update(req, res){
        const schema = Yup.object({
            status: Yup.string().required()
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (error) {
            return res.status(400).json({ error: error.errors })
        };

        const { admin: isAdmin } = await User.findByPk(req.userId);

        if(!isAdmin){
            return res.status(401).json();
        }

        const { id } = req.params;
        const { status } = req.body;

        try {
            await Order.updateOne({ _id: id }, { status });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }

        

        return res.json({ message: 'status update sucsses' })
    }

}

export default new OrderController();     