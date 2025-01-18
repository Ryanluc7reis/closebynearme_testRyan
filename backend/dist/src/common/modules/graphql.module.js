"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const default_1 = require("@apollo/server/plugin/landingPage/default");
let GraphqlModule = class GraphqlModule {
};
exports.GraphqlModule = GraphqlModule;
exports.GraphqlModule = GraphqlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: './schema.gql',
                installSubscriptionHandlers: false,
                playground: false,
                introspection: true,
                formatError(er) {
                    const originalError = er.extensions?.originalError;
                    let message = er.message;
                    let validationMessages = [];
                    let errorMessage = [];
                    if (originalError) {
                        validationMessages = originalError.message;
                        message = originalError.error ? originalError.error : message;
                        if (originalError.error !== 'Bad Request') {
                            errorMessage = validationMessages;
                            validationMessages = [];
                        }
                    }
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
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
                subscriptions: {
                    'graphql-ws': {
                        onConnect: (context) => {
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
                    ObjectId: graphql_type_object_id_no_deps_1.default,
                },
            }),
        ],
    })
], GraphqlModule);
//# sourceMappingURL=graphql.module.js.map