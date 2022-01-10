import { KINDS } from "./constant";

export type Kinds = typeof KINDS[keyof typeof KINDS];
