import { type DynamicModule, Module, type Provider } from "@nestjs/common";
import { RuntimeException } from "@nestjs/core/errors/exceptions";
import { type ASYNC_OPTIONS_TYPE, ConfigurableModuleClass, type OPTIONS_TYPE } from "./flystorage.module-definition";

@Module({})
export class FlyStorageModule extends ConfigurableModuleClass {
	public static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
		const providers: Provider[] = options.disks.map((disk) => ({
			provide: disk.token,
			useValue: disk.storage,
		}));

		return {
			module: FlyStorageModule,
			global: options.isGlobal,
			providers,
			exports: providers,
		};
	}

	public static forRootAsync(_options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
		throw new RuntimeException("Not implemented");
	}
}
