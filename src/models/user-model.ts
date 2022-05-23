import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import sequelize from '../config/database'

interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  readonly id?: string
  email: string
  name: string
  hash: string
  salt: string
}
const UserModel = sequelize.define<UserModel>('user', {
  id: {
    unique: true,
    defaultValue: DataTypes.UUIDV4,
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default UserModel
