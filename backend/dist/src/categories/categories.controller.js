"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const nest_file_fastify_1 = require("@blazity/nest-file-fastify");
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
let CategoriesController = class CategoriesController {
    async uploadCsv(data, file) {
        await this.service.processCsv(file, data.categoryId);
        return 'Success';
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", categories_service_1.CategoriesService)
], CategoriesController.prototype, "service", void 0);
__decorate([
    (0, common_1.Post)('upload-csv'),
    (0, common_1.UseInterceptors)((0, nest_file_fastify_1.FileInterceptor)('csv')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, nest_file_fastify_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "uploadCsv", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, common_1.Controller)('categories')
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map