import { Inject } from "@nestjs/common";
import type { DiskToken } from "./types";

export const InjectStorage = (token: DiskToken) => Inject(token);
