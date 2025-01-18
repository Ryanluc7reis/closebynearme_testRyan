"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const multipart_1 = require("@fastify/multipart");
const config_1 = require("./common/modules/config");
const platform_fastify_1 = require("@nestjs/platform-fastify");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    await app.register(multipart_1.default, {
        throwFileSizeLimit: true,
        limits: {
            files: 1,
            fileSize: 50000000,
        },
    });
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    await app.listen(config_1.default.PORT, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map