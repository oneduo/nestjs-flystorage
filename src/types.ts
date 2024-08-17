import type { FileStorage } from "@flystorage/file-storage";

export interface ConfigModuleOptions {
  disks: Disk[];
  isGlobal: boolean;
}

export interface Disk {
  storage: FileStorage;
  token: DiskToken;
}

export type DiskToken = string | symbol;
