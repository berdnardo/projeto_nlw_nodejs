import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }


    async create(email: string) { 

        //verificar se existe
        const userExists = await this.usersRepository.findOne({
            email,
        });

        //se existir, retorna user
        if (userExists) {
            return userExists
        }

        //se não existir salva no DB
        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
      
        return user;
      }
}


export { UsersService }