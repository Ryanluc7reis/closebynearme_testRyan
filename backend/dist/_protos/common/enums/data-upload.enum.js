"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadStatusAllowed = exports.FileUploadStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus["FILE_COMPLETED"] = "FILE_COMPLETED";
    FileUploadStatus["FILE_PROCESSING"] = "FILE_PROCESSING";
    FileUploadStatus["NO_PROCESSING"] = "NO_PROCESSING";
})(FileUploadStatus || (exports.FileUploadStatus = FileUploadStatus = {}));
var FileUploadStatusAllowed;
(function (FileUploadStatusAllowed) {
    FileUploadStatusAllowed["FILE_COMPLETED"] = "FILE_COMPLETED";
    FileUploadStatusAllowed["FILE_PROCESSING"] = "FILE_PROCESSING";
    FileUploadStatusAllowed["NO_PROCESSING"] = "NO_PROCESSING";
    FileUploadStatusAllowed["EMPTY"] = "";
})(FileUploadStatusAllowed || (exports.FileUploadStatusAllowed = FileUploadStatusAllowed = {}));
(0, graphql_1.registerEnumType)(FileUploadStatus, {
    name: 'FileUploadStatus',
});
(0, graphql_1.registerEnumType)(FileUploadStatusAllowed, {
    name: 'FileUploadStatusAllowed',
});
//# sourceMappingURL=data-upload.enum.js.map