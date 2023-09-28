import { IsString,IsEmail, MaxLength, MinLength, isString, } from "class-validator";

export class CreateUserDTO{
  //Validação de criação
    @IsString()
    name: string;

    @IsEmail()
    email: string;


    @IsString()
    @MinLength(6)
    @MaxLength(24) 
    password: string;
}

function IsStrongPassword(arg0: { minlen: any; }): (target: CreateUserDTO, propertyKey: "password") => void {
    throw new Error("Function not implemented.");
}
