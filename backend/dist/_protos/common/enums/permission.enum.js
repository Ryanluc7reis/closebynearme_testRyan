"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionAllowed = exports.PermissionsMenu = void 0;
const graphql_1 = require("@nestjs/graphql");
var PermissionsMenu;
(function (PermissionsMenu) {
    PermissionsMenu["DASHBOARD"] = "DASHBOARD";
    PermissionsMenu["ADMINS"] = "ADMINS";
    PermissionsMenu["CATEGORIES"] = "CATEGORIES";
    PermissionsMenu["LOCATIONS"] = "LOCATIONS";
    PermissionsMenu["COMPANIES"] = "COMPANIES";
    PermissionsMenu["ARTICLES"] = "ARTICLES";
    PermissionsMenu["FAQS"] = "FAQS";
    PermissionsMenu["SETTINGS"] = "SETTINGS";
    PermissionsMenu["BUYERS"] = "BUYERS";
})(PermissionsMenu || (exports.PermissionsMenu = PermissionsMenu = {}));
var PermissionAllowed;
(function (PermissionAllowed) {
    PermissionAllowed["DASHBOARD"] = "DASHBOARD";
    PermissionAllowed["ADMINS"] = "ADMINS";
    PermissionAllowed["CATEGORIES"] = "CATEGORIES";
    PermissionAllowed["LOCATIONS"] = "LOCATIONS";
    PermissionAllowed["COMPANIES"] = "COMPANIES";
    PermissionAllowed["ARTICLES"] = "ARTICLES";
    PermissionAllowed["FAQS"] = "FAQS";
    PermissionAllowed["SETTINGS"] = "SETTINGS";
    PermissionAllowed["BUYERS"] = "BUYERS";
    PermissionAllowed["EMPTY"] = "";
})(PermissionAllowed || (exports.PermissionAllowed = PermissionAllowed = {}));
(0, graphql_1.registerEnumType)(PermissionsMenu, {
    name: 'PermissionsMenu',
});
(0, graphql_1.registerEnumType)(PermissionAllowed, {
    name: 'PermissionAllowed',
});
//# sourceMappingURL=permission.enum.js.map