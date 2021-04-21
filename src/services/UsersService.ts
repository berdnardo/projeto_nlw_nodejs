import { getCustomRepository } from "typeorm"
import { UsersRepositoty } from "../repositories/UsersRepository"



class UsersService {
    async create(email: string) {

        const usersRepository = getCustomRepository(UsersRepositoty);

        //verificar se existe
        const userExists = await usersRepository.findOne({
            email,
        });

        //se existir, retorna user
        if (userExists) {
            return userExists
        }

        //se não existir salva no DB
        const user = usersRepository.create({
            email,
        });

        await usersRepository.save(user);

        return user;
    }
}


export { UsersService }