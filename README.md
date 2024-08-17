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
import { resolve } from 'path';
import { FileStorage } from '@flystorage/file-storage';
import { LocalStorageAdapter } from '@flystorage/local-fs';

const rootDirectory = resolve(process.cwd(), 'files');
const adapter = new LocalStorageAdapter(rootDirectory);
const storage = new FileStorage(adapter);

const DISK_NAME: DiskToken = 'disks:files';

const disks: Disk[] = [
  {
    token: DISK_NAME,
    storage,
  },
]

@Module({
  imports: [FlyStorageModule.forRoot({
    isGlobal: true,
    disks,
  })],
  // ...
})
```

And then to inject the storage within your application:

```typescript
import { InjectStorage } from "@oneduo/nestjs-flystorage";

@Injectable()
export class AppService {
  constructor(@InjectStorage(DISK_NAME) storage: FileStorage) {}
}
```

### Overriding disk for tests

Let's imagine you're using S3 or any other storage within your application, however you do not wish to implement mocks for your tests.
As Flystorage exposes a unified API that is adaptable to all supported storages, you can easily override the registered disk to use another adapter, such as the in-memory adapter.

```typescript
import { FileStorage } from "@flystorage/file-storage";
import { InMemoryStorageAdapter } from "@flystorage/in-memory";

const adapter = new InMemoryStorageAdapter();
const storage = new FileStorage(adapter);

describe("AppController", () => {
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      // add the following
      .overrideProvider(DISK_NAME)
      .useValue(storage)
      .compile();
  });
});
```

## Credits

- [duna-oss/flystorage](https://github.com/duna-oss/flystorage)

## Authors

- [Charaf Rezrazi](https://www.github.com/rezrazi)

See also the list of contributors who participated in this project.

## License

The MIT License (MIT). Please see [License](https://choosealicense.com/licenses/mit/) File for more information.
