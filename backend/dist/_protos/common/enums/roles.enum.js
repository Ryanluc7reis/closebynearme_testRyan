"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionState = exports.Scopes = exports.Provider = exports.AccountSchemaAllowed = exports.RolesAllowed = exports.Roles = void 0;
const graphql_1 = require("@nestjs/graphql");
var Roles;
(function (Roles) {
    Roles["SUPER_ADMIN"] = "SUPER_ADMIN";
    Roles["ADMIN"] = "ADMIN";
    Roles["MANAGER"] = "MANAGER";
})(Roles || (exports.Roles = Roles = {}));
var RolesAllowed;
(function (RolesAllowed) {
    RolesAllowed["ADMIN"] = "ADMIN";
    RolesAllowed["MANAGER"] = "MANAGER";
    RolesAllowed["EMPTY"] = "";
})(RolesAllowed || (exports.RolesAllowed = RolesAllowed = {}));
var AccountSchemaAllowed;
(function (AccountSchemaAllowed) {
    AccountSchemaAllowed["ADMIN"] = "ADMIN";
    AccountSchemaAllowed["CLIENT"] = "CLIENT";
    AccountSchemaAllowed["BUYER"] = "BUYER";
    AccountSchemaAllowed["SUPER_ADMIN"] = "SUPER_ADMIN";
    AccountSchemaAllowed["MANAGER"] = "MANAGER";
})(AccountSchemaAllowed || (exports.AccountSchemaAllowed = AccountSchemaAllowed = {}));
var Provider;
(function (Provider) {
    Provider["EMAIL"] = "EMAIL";
    Provider["PHONE"] = "PHONE";
})(Provider || (exports.Provider = Provider = {}));
var Scopes;
(function (Scopes) {
    Scopes["WEB"] = "WEB";
    Scopes["APP"] = "APP";
    Scopes["ADMIN"] = "ADMIN";
})(Scopes || (exports.Scopes = Scopes = {}));
var SessionState;
(function (SessionState) {
    SessionState["AVAILABLE"] = "AVAILABLE";
    SessionState["EXPIRED"] = "EXPIRED";
    SessionState["GOING_TO_EXPIRED"] = "GOING_TO_EXPIRED";
})(SessionState || (exports.SessionState = SessionState = {}));
(0, graphql_1.registerEnumType)(Roles, {
    name: 'Roles',
});
(0, graphql_1.registerEnumType)(RolesAllowed, {
    name: 'RolesAllowed',
});
(0, graphql_1.registerEnumType)(AccountSchemaAllowed, {
    name: 'AccountSchemaAllowed',
});
(0, graphql_1.registerEnumType)(AccountSchemaAllowed, {
    name: 'AccountSchemaAllowed',
});
(0, graphql_1.registerEnumType)(Provider, {
    name: 'Provider',
});
(0, graphql_1.registerEnumType)(Scopes, {
    name: 'Scopes',
});
(0, graphql_1.registerEnumType)(SessionState, {
    name: 'SessionState',
});
//# sourceMappingURL=roles.enum.js.map