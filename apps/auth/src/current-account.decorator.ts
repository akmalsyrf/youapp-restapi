import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Account } from './account/schema/account.schema';

export const getCurrentAccountByContext = (
  context: ExecutionContext,
): Account => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const CurrentAccount = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentAccountByContext(context),
);
