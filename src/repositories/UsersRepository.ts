import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";



@EntityRepository(User)
class UsersRepositoty extends Repository<User> {}

export { UsersRepositoty };