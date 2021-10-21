import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../entities/user.entity";
import { CreateListOfGameDto } from "src/list-of-games/dto/create-list-of-game.dto";
import { CreatePerfilDto } from "src/perfil/dto/create-perfil.dto";
export class CreateUserDto extends User{
    @IsNotEmpty()
    @IsString()
    name:           string;
    @IsNotEmpty()
    @IsString()
    lastName:       string;
    @IsNotEmpty()
    @IsString()
    email:          string;
    @IsNotEmpty()
    @IsString()
    password:       string;
    @IsNotEmpty()
    @IsString()
    CPF:            string;
    @IsOptional()
    games?:         CreateListOfGameDto[] | null;
    @IsOptional()
    Perfil?:        CreatePerfilDto[];
}
