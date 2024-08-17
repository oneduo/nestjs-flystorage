import { ConfigurableModuleBuilder } from "@nestjs/common";

import { ConfigModuleOptions } from "./types.js";

export const { ConfigurableModuleClass, ASYNC_OPTIONS_TYPE, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
