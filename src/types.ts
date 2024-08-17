import type { FileStorage } from "@flystorage/file-storage";

export type ConfigModuleOptions = {
	isGlobal: boolean;
	disks: Disk[];
};

export type Disk = {
	token: DiskToken;
	storage: FileStorage;
};

export type DiskToken = string & symbol & {};
