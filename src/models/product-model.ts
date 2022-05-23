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
  readonly id?: string
  name: string
  price: number
  readonly createdAt?: Date
  updatedAt?: Date
  type: string
  count?: number
}

const ProductModel = sequelize.define<ProductModel>('product', {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
    defaultValue: DataTypes.UUIDV4,
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
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
})

export default ProductModel
