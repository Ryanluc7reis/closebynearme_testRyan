"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantPublishedStatusAllowed = exports.MerchantPublishedStatus = exports.ProductStatus = exports.DateTypeFilterAllowed = exports.FinanceStatusAllowed = exports.FinanceStatus = exports.AllStatusAllowed = exports.AllStatus = exports.AssetType = exports.ClientStatusAllowed = exports.ClientStatus = exports.StatusAllowed = exports.Status = void 0;
const graphql_1 = require("@nestjs/graphql");
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (exports.Status = Status = {}));
var StatusAllowed;
(function (StatusAllowed) {
    StatusAllowed["ACTIVE"] = "ACTIVE";
    StatusAllowed["INACTIVE"] = "INACTIVE";
    StatusAllowed["EMPTY"] = "";
})(StatusAllowed || (exports.StatusAllowed = StatusAllowed = {}));
var ClientStatus;
(function (ClientStatus) {
    ClientStatus["ACTIVE"] = "ACTIVE";
    ClientStatus["INACTIVE"] = "INACTIVE";
    ClientStatus["PENDING"] = "PENDING";
    ClientStatus["REJECTED"] = "REJECTED";
})(ClientStatus || (exports.ClientStatus = ClientStatus = {}));
var ClientStatusAllowed;
(function (ClientStatusAllowed) {
    ClientStatusAllowed["ACTIVE"] = "ACTIVE";
    ClientStatusAllowed["INACTIVE"] = "INACTIVE";
    ClientStatusAllowed["PENDING"] = "PENDING";
    ClientStatusAllowed["REJECTED"] = "REJECTED";
    ClientStatusAllowed["EMPTY"] = "";
})(ClientStatusAllowed || (exports.ClientStatusAllowed = ClientStatusAllowed = {}));
var AssetType;
(function (AssetType) {
    AssetType["VIDEO"] = "VIDEO";
    AssetType["IMAGE"] = "IMAGE";
})(AssetType || (exports.AssetType = AssetType = {}));
var AllStatus;
(function (AllStatus) {
    AllStatus["ACTIVE"] = "ACTIVE";
    AllStatus["APPROVED"] = "APPROVED";
    AllStatus["INACTIVE"] = "INACTIVE";
    AllStatus["PENDING"] = "PENDING";
    AllStatus["REJECTED"] = "REJECTED";
})(AllStatus || (exports.AllStatus = AllStatus = {}));
var AllStatusAllowed;
(function (AllStatusAllowed) {
    AllStatusAllowed["ACTIVE"] = "ACTIVE";
    AllStatusAllowed["APPROVED"] = "APPROVED";
    AllStatusAllowed["INACTIVE"] = "INACTIVE";
    AllStatusAllowed["PENDING"] = "PENDING";
    AllStatusAllowed["REJECTED"] = "REJECTED";
    AllStatusAllowed["EMPTY"] = "";
})(AllStatusAllowed || (exports.AllStatusAllowed = AllStatusAllowed = {}));
var FinanceStatus;
(function (FinanceStatus) {
    FinanceStatus["PAGO_TC"] = "PAGO_TC";
    FinanceStatus["MANUAL"] = "MANUAL";
    FinanceStatus["PENDING"] = "PENDING";
})(FinanceStatus || (exports.FinanceStatus = FinanceStatus = {}));
var FinanceStatusAllowed;
(function (FinanceStatusAllowed) {
    FinanceStatusAllowed["PAGO_TC"] = "PAGO_TC";
    FinanceStatusAllowed["MANUAL"] = "MANUAL";
    FinanceStatusAllowed["PENDING"] = "PENDING";
    FinanceStatusAllowed["EMPTY"] = "";
})(FinanceStatusAllowed || (exports.FinanceStatusAllowed = FinanceStatusAllowed = {}));
var DateTypeFilterAllowed;
(function (DateTypeFilterAllowed) {
    DateTypeFilterAllowed["GTE"] = "$gte";
    DateTypeFilterAllowed["LTE"] = "$lte";
    DateTypeFilterAllowed["EMPTY"] = "";
})(DateTypeFilterAllowed || (exports.DateTypeFilterAllowed = DateTypeFilterAllowed = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["INACTIVE"] = "INACTIVE";
    ProductStatus["EDIT_MODE"] = "EDIT_MODE";
    ProductStatus["DRAFT_MODE"] = "DRAFT_MODE";
    ProductStatus["ACTIVE"] = "ACTIVE";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
var MerchantPublishedStatus;
(function (MerchantPublishedStatus) {
    MerchantPublishedStatus["PUBLISHED"] = "PUBLISHED";
    MerchantPublishedStatus["NOT_LISTING"] = "NOT_LISTING";
})(MerchantPublishedStatus || (exports.MerchantPublishedStatus = MerchantPublishedStatus = {}));
var MerchantPublishedStatusAllowed;
(function (MerchantPublishedStatusAllowed) {
    MerchantPublishedStatusAllowed["PUBLISHED"] = "PUBLISHED";
    MerchantPublishedStatusAllowed["NOT_LISTING"] = "NOT_LISTING";
    MerchantPublishedStatusAllowed["EMPTY"] = "EMPTY";
})(MerchantPublishedStatusAllowed || (exports.MerchantPublishedStatusAllowed = MerchantPublishedStatusAllowed = {}));
(0, graphql_1.registerEnumType)(MerchantPublishedStatus, {
    name: 'MerchantPublishedStatus',
});
(0, graphql_1.registerEnumType)(MerchantPublishedStatusAllowed, {
    name: 'MerchantPublishedStatusAllowed',
});
(0, graphql_1.registerEnumType)(ProductStatus, {
    name: 'ProductStatus',
});
(0, graphql_1.registerEnumType)(Status, {
    name: 'Status',
});
(0, graphql_1.registerEnumType)(StatusAllowed, {
    name: 'StatusAllowed',
});
(0, graphql_1.registerEnumType)(ClientStatus, {
    name: 'ClientStatus',
});
(0, graphql_1.registerEnumType)(ClientStatusAllowed, {
    name: 'ClientStatusAllowed',
});
(0, graphql_1.registerEnumType)(AssetType, {
    name: 'AssetType',
});
(0, graphql_1.registerEnumType)(AllStatus, {
    name: 'AllStatus',
});
(0, graphql_1.registerEnumType)(AllStatusAllowed, {
    name: 'AllStatusAllowed',
});
(0, graphql_1.registerEnumType)(FinanceStatus, {
    name: 'FinanceStatus',
});
(0, graphql_1.registerEnumType)(FinanceStatusAllowed, {
    name: 'FinanceStatusAllowed',
});
(0, graphql_1.registerEnumType)(DateTypeFilterAllowed, {
    name: 'DateTypeFilterAllowed',
});
//# sourceMappingURL=status.enum.js.map