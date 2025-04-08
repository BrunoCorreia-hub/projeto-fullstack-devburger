import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';

class ProductController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required(),
            offer: Yup.boolean(),
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (error) {
            return res.status(400).json({ error: error.errors })
        }

        const { admin: isAdmin } = await User.findByPk(req.userId);

        if (!isAdmin) {
            return res.status(401).json();
        }

        const { filename: path } = req.file;
        const { name, price, category_id, offer } = req.body;

        const products = await Product.create({
            name,
            price,
            category_id,
            path,
            offer,
        });

        return res.status(201).json(products)
    };

    async update(req, res) {
        const schema = Yup.object({
            name: Yup.string(),
            price: Yup.number(),
            category_id: Yup.number(),
            offer: Yup.boolean(),
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (error) {
            return res.status(400).json({ error: error.errors })
        }

        const { admin: isAdmin } = await User.findByPk(req.userId);

        if (!isAdmin) {
            return res.status(401).json();
        };

        const { id } = req.params;
        const findProduct = await Product.findByPk(id);

        if (!findProduct) {
            return res.status(400).json({ error: 'make sure the ID is correct' })
        };

        let path;
        if (req.file) {
            path = req.file.filename;
        }

        const { name, price, category_id, offer } = req.body;

        await Product.update({
            name,
            price,
            category_id,
            path,
            offer,
        }, {
            where: {
                id,
            }
        });

        return res.status(200).json()
    }

    async index(req, res) {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }
            ]
        });

        return res.json(products);
    };

    async delete(req, res) {
        const { id } = req.params;

        // Verifica se o produto existe
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        // Verifica se o usuário é admin antes de excluir
        const { admin: isAdmin } = await User.findByPk(req.userId);
        if (!isAdmin) {
            return res.status(401).json({ error: 'Usuário não autorizado' });
        }

        // Deleta o produto
        await Product.destroy({ where: { id } });

        return res.status(200).json({ message: 'Produto deletado com sucesso' });
    }
    
}

export default new ProductController();
