import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from './../auth/model/AuthRequest';
import { User } from './../users/entities/user.entity';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.principal;
  },
);