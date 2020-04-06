import bcrypt from 'bcrypt';
import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY } from '../database/constants';

/**
 * user service
 *
 * @export
 * @class UserService
 */
@Injectable()
export class UserService {
	constructor(
		@Inject(USER_REPOSITORY)
		private readonly repository: Repository<User>
	) {}

	/**
	 * 查找所有用户
	 *
	 * @returns {Promise<User[]>}
	 * @memberof UserService
	 */
	public async findAll(): Promise<User[]> {
		return this.repository.find();
	}

	/**
	 * 查找单个用户
	 *
	 * @param {number} id
	 * @returns {(Promise<User | undefined>)}
	 * @memberof UserService
	 */
	public async findOne(id: number): Promise<User | undefined> {
		return this.repository.findOne(id);
	}

	/**
	 * 通过EMAIL查找用户
	 *
	 * @param {string} email
	 * @returns {(Promise<User | undefined>)}
	 * @memberof UserService
	 */
	public async findOneByEmail(email: string): Promise<User | undefined> {
		return this.repository.findOne({ email });
	}

	/**
	 * 创建用户
	 *
	 * @param {CreateUserDto} createUserDto
	 * @returns {Promise<User>}
	 * @memberof UserService
	 */
	public async create(createUserDto: CreateUserDto): Promise<User> {
		let { name, email, password } = createUserDto;
		password = await bcrypt.hash(password, 8);

		return this.repository.create({ name, email, password });
	}

	/**
	 * 保存用户
	 *
	 * @param {User} user
	 * @returns {Promise<User>}
	 * @memberof UserService
	 */
	public async save(user: User): Promise<User> {
		return this.repository.save(user);
	}

	/**
	 * 删除用户
	 *
	 * @param {number} id
	 * @returns {Promise<DeleteResult>}
	 * @memberof UserService
	 */
	public async delete(id: number): Promise<DeleteResult> {
		return this.repository.delete(id);
	}
}