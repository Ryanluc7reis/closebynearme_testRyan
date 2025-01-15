import { GraphQLError } from 'graphql';

export function handleErrorFormat(errors: GraphQLError[]) {
  return errors.map((err) => {
    const { status } = err.extensions;
    const message = JSON.parse(err.message);
    return {
      message,
      status: status || 400,
    };
  });
}

export function generateCode(): string {
  const unix = Math.floor(Date.now() / 1000);
  const referralCode = String(unix);
  const ini = referralCode.length - 6;
  return referralCode.substring(ini, referralCode.length);
}
