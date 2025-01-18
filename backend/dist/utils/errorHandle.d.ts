import { GraphQLError } from 'graphql';
export declare function handleErrorFormat(errors: GraphQLError[]): {
    message: any;
    status: unknown;
}[];
export declare function generateCode(): string;
