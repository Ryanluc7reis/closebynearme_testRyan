import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
      installSubscriptionHandlers: false,
      playground: false,
      introspection: true,
      formatError(er) {
        const originalError = er.extensions?.originalError as any;
        let message = er.message;
        let validationMessages: string[] = [];
        let errorMessage: string[] = [];
        if (originalError) {
          validationMessages = originalError.message as string[];
          message = originalError.error ? originalError.error : message;
          if (originalError.error !== 'Bad Request') {
            errorMessage = validationMessages;
            validationMessages = [];
          }
        }

        // console.log(er);
        return {
          message,
          path: er.path,
          extensions: {
            validationMessages: validationMessages.length
              ? validationMessages
              : undefined,
            errorMessage: errorMessage.length ? errorMessage : undefined,
          },
          locations: undefined,
        };
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        'graphql-ws': {
          onConnect: (context: any) => {
            const { connectionParams, extra } = context;
            if (!connectionParams.Authorization) {
              return false;
            }
            extra.request = {
              headers: { authorization: connectionParams.Authorization },
            };
          },
        },
      },
      context: (context) => {
        if (context?.extra?.request) {
          return {
            req: {
              ...context?.extra?.request,
              headers: {
                ...context?.extra?.request?.headers,
                ...context?.connectionParams,
              },
            },
          };
        }

        return { req: context?.req };
      },
      resolvers: {
        ObjectId: GraphQLObjectId,
      },
    }),
  ],
})
export class GraphqlModule {}
