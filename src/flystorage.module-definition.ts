import { ConfigurableModuleBuilder } from "@nestjs/common";
import type { ConfigModuleOptions } from "./types";

export const { ConfigurableModuleClass, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
	new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
