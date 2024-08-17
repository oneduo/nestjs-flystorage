import { ConfigurableModuleBuilder } from "@nestjs/common";

import { ConfigModuleOptions } from "./types.js";

export const { ConfigurableModuleClass, OPTIONS_TYPE } = new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
