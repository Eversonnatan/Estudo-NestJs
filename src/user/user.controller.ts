import { Body, Controller, Post , Get, Param, Put, Patch, Delete, ParseIntPipe} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
 

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
    async show(@Param('id',ParseIntPipe) id:number ){
        return {user:{}, id}
    }

    //Metodo de alteração total
    @Put(':id')
    async update(@Body() {email,name,password}: UpdatePutUserDTO, @Param('id',ParseIntPipe) id: number) {
        return {
            method: 'put',
            email,name,password,
            id
        }

    }
    //Metodo de alteração particial 
    @Patch(':id')
    async updatePartial(@Body() {email,name,password}: UpdatePatchUserDTO, @Param('id',ParseIntPipe) id: number){
        return {
            method: 'patch',
            email,name,password,
            id
        }   
    }
    //Metodo de Deletar
    @Delete(':id')
    //conversão de string para numero
    async delete(@Param('id',ParseIntPipe) id: number){
        return {
            id
        }
    }
}