import ky from 'https://cdn.skypack.dev/ky?dts';
export * from 'https://cdn.skypack.dev/ky?dts';

// export type {AfterResponseHook, BeforeRequestHook, BeforeRetryHook, DownloadProgress, Hooks, Input, Options, NormalizedOptions, ResponsePromise, RetryOptions} from "https://unpkg.com/ky@0.25.1/index.d.ts";

import { faker } from "https://raw.githubusercontent.com/jackfiszr/deno-faker/master/mod.ts";

// @deno-types="https://deno.land/x/fuse@v6.4.1/dist/fuse.d.ts"
import Fuse from 'https://deno.land/x/fuse@v6.4.1/dist/fuse.esm.min.js';

export * from "https://deno.land/std@0.83.0/testing/asserts.ts";

export {
    ky,
    faker,
    Fuse,
}