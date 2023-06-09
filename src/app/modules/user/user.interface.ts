import { Model, Types } from 'mongoose'

import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface'
import { IAdmin } from './../admin/admin.interface';
import { IStudent } from '../student/student.interface'

export type IUser = {
  id: string
  role: string
  password: string
  student?: Types.ObjectId | IStudent
  faculty?: Types.ObjectId | IAcademicFaculty
  admin?:Types.ObjectId | IAdmin
}

export type UserModel = Model<IUser, object>
