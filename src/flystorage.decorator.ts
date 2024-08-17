import { Inject } from "@nestjs/common";

import type { DiskToken } from "./types.js";

export const InjectStorage = (token: DiskToken) => Inject(token);
