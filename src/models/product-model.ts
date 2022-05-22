import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import sequelize from '../config/database'

interface ProductModel
  extends Model<
    InferAttributes<ProductModel>,
    InferCreationAttributes<ProductModel>
  > {
  readonly id: number
  name: string
  price: number
  readonly createdAt: Date
  updatedAt: Date
  type: string
}

const ProductModel = sequelize.define<ProductModel>('product', {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
})

export default ProductModel
