import { Body, Controller, Post , Get, Param, Put, Patch, Delete} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
 

@Controller('users')
export class UserController {
    //metodo de criação
    @Post()
    async create(@Body() {email,name,password}: CreateUserDTO){
        return {email,name,password};
    }
    //metodo de leitura de todos os usuarios
    @Get()
    async list(){
        return {users:[]}
    }
    //metodo de leitura de usuario especifico
    @Get(':id')
    async show(@Param() params){
        return {user:{}, params}
    }

    //Metodo de alteração total
    @Put(':id')
    async update(@Body() body, @Param() params ) {
        return {
            method: 'put',
            body,
            params
        }

    }
    //Metodo de alteração particial 
    @Patch(':id')
    async updatePartial(@Body() body, @Param() params){
        return {
            method: 'patch',
            body,
            params
        }   
    }
    //Metodo de Deletar
    @Delete(':id')
    async delete(@Param() params ){
        return {
            params
        }
    }
}