# Nestjs Flystorage

a NestJS module for abstracted, modular and testable storage systems using Flystorage.

## About Flystorage

Flystorage is a file storage abstraction for NodeJS and TypeScript. Provides a straight-forward API that is easy to use. Allows application code to be unaware WHERE files are stored while providing strong functionality and flexibility.

To learn more: https://flystorage.dev/

## Requirements

Depending on which underlying file storage system you wish to use, you're expected to install the required associated adapter.

- [Local Filesystem](https://www.npmjs.com/package/@flystorage/local-fs)
- [AWS S3 (using the V3 SDK)](https://www.npmjs.com/package/@flystorage/aws-s3)
- [Azure Blob Storage](https://www.npmjs.com/package/@flystorage/azure-storage-blob)
- [Test implementation (in-memory)](https://www.npmjs.com/package/@flystorage/in-memory)
- [Google Cloud Storage](https://www.npmjs.com/package/@flystorage/google-cloud-storage)

## Installation

You can install the package using the following command:

```bash
npm i @oneduo/nestjs-flystorage
```

## Usage

You may start using the module by importing it into your application.

```typescript

```
