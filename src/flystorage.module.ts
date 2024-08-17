import { type DynamicModule, Module, type Provider } from "@nestjs/common";
import { RuntimeException } from "@nestjs/core/errors/exceptions";

import { ConfigurableModuleClass, type OPTIONS_TYPE } from "./flystorage.module-definition.js";

@Module({})
export class FlyStorageModule extends ConfigurableModuleClass {
  public static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
    const providers: Provider[] = options.disks.map((disk) => ({
      provide: disk.token,
      useValue: disk.storage,
    }));

    return {
      global: options.isGlobal,
      module: FlyStorageModule,
      exports: providers,
      providers,
    };
  }

  public static forRootAsync(): DynamicModule {
    throw new RuntimeException("Not implemented");
  }
}
