/**
 * Client
 **/

import * as runtime from "./runtime/index"
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & { [prisma]: true }
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>
}

/**
 * Model Product
 *
 */
export type Product = {
  productId: number
  name: string
  monthsToFreeze: number
}

/**
 * Model ProductInstance
 *
 */
export type ProductInstance = {
  instanceId: number
  name: string
  units: number
  expirationDate: Date
}

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = "rejectOnNotFound" extends keyof T
    ? T["rejectOnNotFound"]
    : false,
> {
  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>)
  $on<V extends U | "beforeExit">(
    eventType: V,
    callback: (
      event: V extends "query"
        ? Prisma.QueryEvent
        : V extends "beforeExit"
        ? () => Promise<void>
        : Prisma.LogEvent,
    ) => void,
  ): void

  /**
   * Connect with the database
   */
  $connect(): Promise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): Promise<UnwrapTuple<P>>

  $transaction<R>(
    fn: (prisma: Prisma.TransactionClient) => Promise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    },
  ): Promise<R>

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<GlobalReject>

  /**
   * `prisma.productInstance`: Exposes CRUD operations for the **ProductInstance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProductInstances
   * const productInstances = await prisma.productInstance.findMany()
   * ```
   */
  get productInstance(): Prisma.ProductInstanceDelegate<GlobalReject>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue }

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null
  }

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? "Please either choose `select` or `include`"
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = W extends unknown
    ? A extends Narrowable
      ? Cast<A, W>
      : Cast<
          { [K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never },
          { [K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K] }
        >
    : never

  type Narrowable = string | number | boolean | bigint

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  export function validator<V>(): <S>(select: Exact<S, V>) => S

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma
    private readonly debug
    private readonly hooks?
    constructor(
      prisma: PrismaClient<any, any>,
      debug?: boolean,
      hooks?: Hooks | undefined,
    )
    request<T>(
      document: any,
      dataPath?: string[],
      rootField?: string,
      typeName?: string,
      isList?: boolean,
      callsite?: string,
    ): Promise<T>
    sanitizeMessage(message: string): string
    protected unpack(
      document: any,
      data: any,
      path: string[],
      rootField?: string,
      isList?: boolean,
    ): any
  }

  export const ModelName: {
    Product: "Product"
    ProductInstance: "ProductInstance"
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation = {
    [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound
  }
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
    ? True
    : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions["rejectOnNotFound"],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName,
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = "pretty" | "colorless" | "minimal"

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: {
      query: string
      path: string[]
      rootField?: string
      typeName?: string
      document: any
    }) => any
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error"
  export type LogDefinition = {
    level: LogLevel
    emit: "stdout" | "event"
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findMany"
    | "findFirst"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
  >

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    instances: number
  }

  export type ProductCountOutputTypeSelect = {
    instances?: boolean
  }

  export type ProductCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCountOutputTypeArgs,
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? ProductCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & ProductCountOutputTypeArgs
    ? ProductCountOutputType
    : S extends { select: any } & ProductCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof ProductCountOutputType
          ? ProductCountOutputType[P]
          : never
      }
    : ProductCountOutputType

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     *
     **/
    select?: ProductCountOutputTypeSelect | null
  }

  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productId: number | null
    monthsToFreeze: number | null
  }

  export type ProductSumAggregateOutputType = {
    productId: number | null
    monthsToFreeze: number | null
  }

  export type ProductMinAggregateOutputType = {
    productId: number | null
    name: string | null
    monthsToFreeze: number | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: number | null
    name: string | null
    monthsToFreeze: number | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    name: number
    monthsToFreeze: number
    _all: number
  }

  export type ProductAvgAggregateInputType = {
    productId?: true
    monthsToFreeze?: true
  }

  export type ProductSumAggregateInputType = {
    productId?: true
    monthsToFreeze?: true
  }

  export type ProductMinAggregateInputType = {
    productId?: true
    name?: true
    monthsToFreeze?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    name?: true
    monthsToFreeze?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    name?: true
    monthsToFreeze?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }

  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: number
    name: string
    monthsToFreeze: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof ProductGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
          : GetScalarType<T[P], ProductGroupByOutputType[P]>
      }
    >
  >

  export type ProductSelect = {
    productId?: boolean
    name?: boolean
    monthsToFreeze?: boolean
    instances?: boolean | Product$instancesArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductInclude = {
    instances?: boolean | Product$instancesArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? Product
    : S extends undefined
    ? never
    : S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product & {
        [P in TruthyKeys<S["include"]>]: P extends "instances"
          ? Array<ProductInstanceGetPayload<S["include"][P]>>
          : P extends "_count"
          ? ProductCountOutputTypeGetPayload<S["include"][P]>
          : never
      }
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "instances"
          ? Array<ProductInstanceGetPayload<S["select"][P]>>
          : P extends "_count"
          ? ProductCountOutputTypeGetPayload<S["select"][P]>
          : P extends keyof Product
          ? Product[P]
          : never
      }
    : Product

  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, "select" | "include"> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
  > {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends ProductFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, ProductFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Product"
    > extends True
      ? Prisma__ProductClient<ProductGetPayload<T>>
      : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends ProductFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, ProductFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Product"
    > extends True
      ? Prisma__ProductClient<ProductGetPayload<T>>
      : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     *
     **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>,
    ): PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs["orderBy"] }
        : { orderBy?: ProductGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ]
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never>
    implements PrismaPromise<T>
  {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: "PrismaClientPromise"

    instances<T extends Product$instancesArgs = {}>(
      args?: Subset<T, Product$instancesArgs>,
    ): PrismaPromise<Array<ProductInstanceGetPayload<T>> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     *
     **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     *
     **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     *
     **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     *
     **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     *
     **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     *
     **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     *
     **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     *
     **/
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     *
     **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     *
     **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     *
     **/
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     *
     **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     *
     **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     *
     **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     *
     **/
    where?: ProductWhereInput
  }

  /**
   * Product.instances
   */
  export type Product$instancesArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    where?: ProductInstanceWhereInput
    orderBy?: Enumerable<ProductInstanceOrderByWithRelationInput>
    cursor?: ProductInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductInstanceScalarFieldEnum>
  }

  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     *
     **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInclude | null
  }

  /**
   * Model ProductInstance
   */

  export type AggregateProductInstance = {
    _count: ProductInstanceCountAggregateOutputType | null
    _avg: ProductInstanceAvgAggregateOutputType | null
    _sum: ProductInstanceSumAggregateOutputType | null
    _min: ProductInstanceMinAggregateOutputType | null
    _max: ProductInstanceMaxAggregateOutputType | null
  }

  export type ProductInstanceAvgAggregateOutputType = {
    instanceId: number | null
    units: number | null
  }

  export type ProductInstanceSumAggregateOutputType = {
    instanceId: number | null
    units: number | null
  }

  export type ProductInstanceMinAggregateOutputType = {
    instanceId: number | null
    name: string | null
    units: number | null
    expirationDate: Date | null
  }

  export type ProductInstanceMaxAggregateOutputType = {
    instanceId: number | null
    name: string | null
    units: number | null
    expirationDate: Date | null
  }

  export type ProductInstanceCountAggregateOutputType = {
    instanceId: number
    name: number
    units: number
    expirationDate: number
    _all: number
  }

  export type ProductInstanceAvgAggregateInputType = {
    instanceId?: true
    units?: true
  }

  export type ProductInstanceSumAggregateInputType = {
    instanceId?: true
    units?: true
  }

  export type ProductInstanceMinAggregateInputType = {
    instanceId?: true
    name?: true
    units?: true
    expirationDate?: true
  }

  export type ProductInstanceMaxAggregateInputType = {
    instanceId?: true
    name?: true
    units?: true
    expirationDate?: true
  }

  export type ProductInstanceCountAggregateInputType = {
    instanceId?: true
    name?: true
    units?: true
    expirationDate?: true
    _all?: true
  }

  export type ProductInstanceAggregateArgs = {
    /**
     * Filter which ProductInstance to aggregate.
     *
     **/
    where?: ProductInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductInstances to fetch.
     *
     **/
    orderBy?: Enumerable<ProductInstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     *
     **/
    cursor?: ProductInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductInstances from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductInstances.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductInstances
     **/
    _count?: true | ProductInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductInstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductInstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductInstanceMaxAggregateInputType
  }

  export type GetProductInstanceAggregateType<
    T extends ProductInstanceAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateProductInstance]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductInstance[P]>
      : GetScalarType<T[P], AggregateProductInstance[P]>
  }

  export type ProductInstanceGroupByArgs = {
    where?: ProductInstanceWhereInput
    orderBy?: Enumerable<ProductInstanceOrderByWithAggregationInput>
    by: Array<ProductInstanceScalarFieldEnum>
    having?: ProductInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductInstanceCountAggregateInputType | true
    _avg?: ProductInstanceAvgAggregateInputType
    _sum?: ProductInstanceSumAggregateInputType
    _min?: ProductInstanceMinAggregateInputType
    _max?: ProductInstanceMaxAggregateInputType
  }

  export type ProductInstanceGroupByOutputType = {
    instanceId: number
    name: string
    units: number
    expirationDate: Date
    _count: ProductInstanceCountAggregateOutputType | null
    _avg: ProductInstanceAvgAggregateOutputType | null
    _sum: ProductInstanceSumAggregateOutputType | null
    _min: ProductInstanceMinAggregateOutputType | null
    _max: ProductInstanceMaxAggregateOutputType | null
  }

  type GetProductInstanceGroupByPayload<T extends ProductInstanceGroupByArgs> =
    PrismaPromise<
      Array<
        PickArray<ProductInstanceGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof ProductInstanceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductInstanceGroupByOutputType[P]>
        }
      >
    >

  export type ProductInstanceSelect = {
    instanceId?: boolean
    product?: boolean | ProductArgs
    name?: boolean
    units?: boolean
    expirationDate?: boolean
  }

  export type ProductInstanceInclude = {
    product?: boolean | ProductArgs
  }

  export type ProductInstanceGetPayload<
    S extends boolean | null | undefined | ProductInstanceArgs,
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? ProductInstance
    : S extends undefined
    ? never
    : S extends { include: any } & (
        | ProductInstanceArgs
        | ProductInstanceFindManyArgs
      )
    ? ProductInstance & {
        [P in TruthyKeys<S["include"]>]: P extends "product"
          ? ProductGetPayload<S["include"][P]>
          : never
      }
    : S extends { select: any } & (
        | ProductInstanceArgs
        | ProductInstanceFindManyArgs
      )
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "product"
          ? ProductGetPayload<S["select"][P]>
          : P extends keyof ProductInstance
          ? ProductInstance[P]
          : never
      }
    : ProductInstance

  type ProductInstanceCountArgs = Merge<
    Omit<ProductInstanceFindManyArgs, "select" | "include"> & {
      select?: ProductInstanceCountAggregateInputType | true
    }
  >

  export interface ProductInstanceDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
  > {
    /**
     * Find zero or one ProductInstance that matches the filter.
     * @param {ProductInstanceFindUniqueArgs} args - Arguments to find a ProductInstance
     * @example
     * // Get one ProductInstance
     * const productInstance = await prisma.productInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends ProductInstanceFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, ProductInstanceFindUniqueArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "ProductInstance"
    > extends True
      ? Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>
      : Prisma__ProductInstanceClient<ProductInstanceGetPayload<T> | null, null>

    /**
     * Find one ProductInstance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ProductInstanceFindUniqueOrThrowArgs} args - Arguments to find a ProductInstance
     * @example
     * // Get one ProductInstance
     * const productInstance = await prisma.productInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ProductInstanceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductInstanceFindUniqueOrThrowArgs>,
    ): Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>

    /**
     * Find the first ProductInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceFindFirstArgs} args - Arguments to find a ProductInstance
     * @example
     * // Get one ProductInstance
     * const productInstance = await prisma.productInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends ProductInstanceFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, ProductInstanceFindFirstArgs>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "ProductInstance"
    > extends True
      ? Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>
      : Prisma__ProductInstanceClient<ProductInstanceGetPayload<T> | null, null>

    /**
     * Find the first ProductInstance that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceFindFirstOrThrowArgs} args - Arguments to find a ProductInstance
     * @example
     * // Get one ProductInstance
     * const productInstance = await prisma.productInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ProductInstanceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductInstanceFindFirstOrThrowArgs>,
    ): Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>

    /**
     * Find zero or more ProductInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductInstances
     * const productInstances = await prisma.productInstance.findMany()
     *
     * // Get first 10 ProductInstances
     * const productInstances = await prisma.productInstance.findMany({ take: 10 })
     *
     * // Only select the `instanceId`
     * const productInstanceWithInstanceIdOnly = await prisma.productInstance.findMany({ select: { instanceId: true } })
     *
     **/
    findMany<T extends ProductInstanceFindManyArgs>(
      args?: SelectSubset<T, ProductInstanceFindManyArgs>,
    ): PrismaPromise<Array<ProductInstanceGetPayload<T>>>

    /**
     * Create a ProductInstance.
     * @param {ProductInstanceCreateArgs} args - Arguments to create a ProductInstance.
     * @example
     * // Create one ProductInstance
     * const ProductInstance = await prisma.productInstance.create({
     *   data: {
     *     // ... data to create a ProductInstance
     *   }
     * })
     *
     **/
    create<T extends ProductInstanceCreateArgs>(
      args: SelectSubset<T, ProductInstanceCreateArgs>,
    ): Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>

    /**
     * Create many ProductInstances.
     *     @param {ProductInstanceCreateManyArgs} args - Arguments to create many ProductInstances.
     *     @example
     *     // Create many ProductInstances
     *     const productInstance = await prisma.productInstance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ProductInstanceCreateManyArgs>(
      args?: SelectSubset<T, ProductInstanceCreateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductInstance.
     * @param {ProductInstanceDeleteArgs} args - Arguments to delete one ProductInstance.
     * @example
     * // Delete one ProductInstance
     * const ProductInstance = await prisma.productInstance.delete({
     *   where: {
     *     // ... filter to delete one ProductInstance
     *   }
     * })
     *
     **/
    delete<T extends ProductInstanceDeleteArgs>(
      args: SelectSubset<T, ProductInstanceDeleteArgs>,
    ): Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>

    /**
     * Update one ProductInstance.
     * @param {ProductInstanceUpdateArgs} args - Arguments to update one ProductInstance.
     * @example
     * // Update one ProductInstance
     * const productInstance = await prisma.productInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProductInstanceUpdateArgs>(
      args: SelectSubset<T, ProductInstanceUpdateArgs>,
    ): Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>

    /**
     * Delete zero or more ProductInstances.
     * @param {ProductInstanceDeleteManyArgs} args - Arguments to filter ProductInstances to delete.
     * @example
     * // Delete a few ProductInstances
     * const { count } = await prisma.productInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProductInstanceDeleteManyArgs>(
      args?: SelectSubset<T, ProductInstanceDeleteManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductInstances
     * const productInstance = await prisma.productInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProductInstanceUpdateManyArgs>(
      args: SelectSubset<T, ProductInstanceUpdateManyArgs>,
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductInstance.
     * @param {ProductInstanceUpsertArgs} args - Arguments to update or create a ProductInstance.
     * @example
     * // Update or create a ProductInstance
     * const productInstance = await prisma.productInstance.upsert({
     *   create: {
     *     // ... data to create a ProductInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductInstance we want to update
     *   }
     * })
     **/
    upsert<T extends ProductInstanceUpsertArgs>(
      args: SelectSubset<T, ProductInstanceUpsertArgs>,
    ): Prisma__ProductInstanceClient<ProductInstanceGetPayload<T>>

    /**
     * Count the number of ProductInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceCountArgs} args - Arguments to filter ProductInstances to count.
     * @example
     * // Count the number of ProductInstances
     * const count = await prisma.productInstance.count({
     *   where: {
     *     // ... the filter for the ProductInstances we want to count
     *   }
     * })
     **/
    count<T extends ProductInstanceCountArgs>(
      args?: Subset<T, ProductInstanceCountArgs>,
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProductInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductInstanceAggregateArgs>(
      args: Subset<T, ProductInstanceAggregateArgs>,
    ): PrismaPromise<GetProductInstanceAggregateType<T>>

    /**
     * Group by ProductInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInstanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProductInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductInstanceGroupByArgs["orderBy"] }
        : { orderBy?: ProductInstanceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`,
                ]
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductInstanceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetProductInstanceGroupByPayload<T>
      : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductInstanceClient<T, Null = never>
    implements PrismaPromise<T>
  {
    [prisma]: true
    private readonly _dmmf
    private readonly _fetcher
    private readonly _queryType
    private readonly _rootField
    private readonly _clientMethod
    private readonly _args
    private readonly _dataPath
    private readonly _errorFormat
    private readonly _measurePerformance?
    private _isList
    private _callsite
    private _requestPromise?
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    )
    readonly [Symbol.toStringTag]: "PrismaClientPromise"

    product<T extends ProductArgs = {}>(
      args?: Subset<T, ProductArgs>,
    ): Prisma__ProductClient<ProductGetPayload<T> | Null>

    private get _document()
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>
  }

  // Custom InputTypes

  /**
   * ProductInstance base type for findUnique actions
   */
  export type ProductInstanceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * Filter, which ProductInstance to fetch.
     *
     **/
    where: ProductInstanceWhereUniqueInput
  }

  /**
   * ProductInstance findUnique
   */
  export interface ProductInstanceFindUniqueArgs
    extends ProductInstanceFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * ProductInstance findUniqueOrThrow
   */
  export type ProductInstanceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * Filter, which ProductInstance to fetch.
     *
     **/
    where: ProductInstanceWhereUniqueInput
  }

  /**
   * ProductInstance base type for findFirst actions
   */
  export type ProductInstanceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * Filter, which ProductInstance to fetch.
     *
     **/
    where?: ProductInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductInstances to fetch.
     *
     **/
    orderBy?: Enumerable<ProductInstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductInstances.
     *
     **/
    cursor?: ProductInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductInstances from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductInstances.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductInstances.
     *
     **/
    distinct?: Enumerable<ProductInstanceScalarFieldEnum>
  }

  /**
   * ProductInstance findFirst
   */
  export interface ProductInstanceFindFirstArgs
    extends ProductInstanceFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound
  }

  /**
   * ProductInstance findFirstOrThrow
   */
  export type ProductInstanceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * Filter, which ProductInstance to fetch.
     *
     **/
    where?: ProductInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductInstances to fetch.
     *
     **/
    orderBy?: Enumerable<ProductInstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductInstances.
     *
     **/
    cursor?: ProductInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductInstances from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductInstances.
     *
     **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductInstances.
     *
     **/
    distinct?: Enumerable<ProductInstanceScalarFieldEnum>
  }

  /**
   * ProductInstance findMany
   */
  export type ProductInstanceFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * Filter, which ProductInstances to fetch.
     *
     **/
    where?: ProductInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductInstances to fetch.
     *
     **/
    orderBy?: Enumerable<ProductInstanceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductInstances.
     *
     **/
    cursor?: ProductInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductInstances from the position of the cursor.
     *
     **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductInstances.
     *
     **/
    skip?: number
    distinct?: Enumerable<ProductInstanceScalarFieldEnum>
  }

  /**
   * ProductInstance create
   */
  export type ProductInstanceCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * The data needed to create a ProductInstance.
     *
     **/
    data: XOR<ProductInstanceCreateInput, ProductInstanceUncheckedCreateInput>
  }

  /**
   * ProductInstance createMany
   */
  export type ProductInstanceCreateManyArgs = {
    /**
     * The data used to create many ProductInstances.
     *
     **/
    data: Enumerable<ProductInstanceCreateManyInput>
    skipDuplicates?: boolean
  }

  /**
   * ProductInstance update
   */
  export type ProductInstanceUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * The data needed to update a ProductInstance.
     *
     **/
    data: XOR<ProductInstanceUpdateInput, ProductInstanceUncheckedUpdateInput>
    /**
     * Choose, which ProductInstance to update.
     *
     **/
    where: ProductInstanceWhereUniqueInput
  }

  /**
   * ProductInstance updateMany
   */
  export type ProductInstanceUpdateManyArgs = {
    /**
     * The data used to update ProductInstances.
     *
     **/
    data: XOR<
      ProductInstanceUpdateManyMutationInput,
      ProductInstanceUncheckedUpdateManyInput
    >
    /**
     * Filter which ProductInstances to update
     *
     **/
    where?: ProductInstanceWhereInput
  }

  /**
   * ProductInstance upsert
   */
  export type ProductInstanceUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * The filter to search for the ProductInstance to update in case it exists.
     *
     **/
    where: ProductInstanceWhereUniqueInput
    /**
     * In case the ProductInstance found by the `where` argument doesn't exist, create a new ProductInstance with this data.
     *
     **/
    create: XOR<ProductInstanceCreateInput, ProductInstanceUncheckedCreateInput>
    /**
     * In case the ProductInstance was found with the provided `where` argument, update it with this data.
     *
     **/
    update: XOR<ProductInstanceUpdateInput, ProductInstanceUncheckedUpdateInput>
  }

  /**
   * ProductInstance delete
   */
  export type ProductInstanceDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
    /**
     * Filter which ProductInstance to delete.
     *
     **/
    where: ProductInstanceWhereUniqueInput
  }

  /**
   * ProductInstance deleteMany
   */
  export type ProductInstanceDeleteManyArgs = {
    /**
     * Filter which ProductInstances to delete
     *
     **/
    where?: ProductInstanceWhereInput
  }

  /**
   * ProductInstance without action
   */
  export type ProductInstanceArgs = {
    /**
     * Select specific fields to fetch from the ProductInstance
     *
     **/
    select?: ProductInstanceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     *
     **/
    include?: ProductInstanceInclude | null
  }

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProductInstanceScalarFieldEnum: {
    instanceId: "instanceId"
    name: "name"
    units: "units"
    expirationDate: "expirationDate"
  }

  export type ProductInstanceScalarFieldEnum =
    (typeof ProductInstanceScalarFieldEnum)[keyof typeof ProductInstanceScalarFieldEnum]

  export const ProductScalarFieldEnum: {
    productId: "productId"
    name: "name"
    monthsToFreeze: "monthsToFreeze"
  }

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]

  export const SortOrder: {
    asc: "asc"
    desc: "desc"
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted"
    ReadCommitted: "ReadCommitted"
    RepeatableRead: "RepeatableRead"
    Serializable: "Serializable"
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  /**
   * Deep Input Types
   */

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    productId?: IntFilter | number
    name?: StringFilter | string
    monthsToFreeze?: IntFilter | number
    instances?: ProductInstanceListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    productId?: SortOrder
    name?: SortOrder
    monthsToFreeze?: SortOrder
    instances?: ProductInstanceOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    productId?: number
    name?: string
  }

  export type ProductOrderByWithAggregationInput = {
    productId?: SortOrder
    name?: SortOrder
    monthsToFreeze?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    productId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    monthsToFreeze?: IntWithAggregatesFilter | number
  }

  export type ProductInstanceWhereInput = {
    AND?: Enumerable<ProductInstanceWhereInput>
    OR?: Enumerable<ProductInstanceWhereInput>
    NOT?: Enumerable<ProductInstanceWhereInput>
    instanceId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    name?: StringFilter | string
    units?: IntFilter | number
    expirationDate?: DateTimeFilter | Date | string
  }

  export type ProductInstanceOrderByWithRelationInput = {
    instanceId?: SortOrder
    product?: ProductOrderByWithRelationInput
    name?: SortOrder
    units?: SortOrder
    expirationDate?: SortOrder
  }

  export type ProductInstanceWhereUniqueInput = {
    instanceId?: number
  }

  export type ProductInstanceOrderByWithAggregationInput = {
    instanceId?: SortOrder
    name?: SortOrder
    units?: SortOrder
    expirationDate?: SortOrder
    _count?: ProductInstanceCountOrderByAggregateInput
    _avg?: ProductInstanceAvgOrderByAggregateInput
    _max?: ProductInstanceMaxOrderByAggregateInput
    _min?: ProductInstanceMinOrderByAggregateInput
    _sum?: ProductInstanceSumOrderByAggregateInput
  }

  export type ProductInstanceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductInstanceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductInstanceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductInstanceScalarWhereWithAggregatesInput>
    instanceId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    units?: IntWithAggregatesFilter | number
    expirationDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductCreateInput = {
    name: string
    monthsToFreeze: number
    instances?: ProductInstanceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    productId?: number
    name: string
    monthsToFreeze: number
    instances?: ProductInstanceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthsToFreeze?: IntFieldUpdateOperationsInput | number
    instances?: ProductInstanceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    monthsToFreeze?: IntFieldUpdateOperationsInput | number
    instances?: ProductInstanceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    productId?: number
    name: string
    monthsToFreeze: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthsToFreeze?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    monthsToFreeze?: IntFieldUpdateOperationsInput | number
  }

  export type ProductInstanceCreateInput = {
    product: ProductCreateNestedOneWithoutInstancesInput
    units: number
    expirationDate: Date | string
  }

  export type ProductInstanceUncheckedCreateInput = {
    instanceId?: number
    name: string
    units: number
    expirationDate: Date | string
  }

  export type ProductInstanceUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutInstancesNestedInput
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInstanceUncheckedUpdateInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInstanceCreateManyInput = {
    instanceId?: number
    name: string
    units: number
    expirationDate: Date | string
  }

  export type ProductInstanceUpdateManyMutationInput = {
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInstanceUncheckedUpdateManyInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ProductInstanceListRelationFilter = {
    every?: ProductInstanceWhereInput
    some?: ProductInstanceWhereInput
    none?: ProductInstanceWhereInput
  }

  export type ProductInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    monthsToFreeze?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    productId?: SortOrder
    monthsToFreeze?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    monthsToFreeze?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    monthsToFreeze?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    productId?: SortOrder
    monthsToFreeze?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ProductInstanceCountOrderByAggregateInput = {
    instanceId?: SortOrder
    name?: SortOrder
    units?: SortOrder
    expirationDate?: SortOrder
  }

  export type ProductInstanceAvgOrderByAggregateInput = {
    instanceId?: SortOrder
    units?: SortOrder
  }

  export type ProductInstanceMaxOrderByAggregateInput = {
    instanceId?: SortOrder
    name?: SortOrder
    units?: SortOrder
    expirationDate?: SortOrder
  }

  export type ProductInstanceMinOrderByAggregateInput = {
    instanceId?: SortOrder
    name?: SortOrder
    units?: SortOrder
    expirationDate?: SortOrder
  }

  export type ProductInstanceSumOrderByAggregateInput = {
    instanceId?: SortOrder
    units?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ProductInstanceCreateNestedManyWithoutProductInput = {
    create?: XOR<
      Enumerable<ProductInstanceCreateWithoutProductInput>,
      Enumerable<ProductInstanceUncheckedCreateWithoutProductInput>
    >
    connectOrCreate?: Enumerable<ProductInstanceCreateOrConnectWithoutProductInput>
    createMany?: ProductInstanceCreateManyProductInputEnvelope
    connect?: Enumerable<ProductInstanceWhereUniqueInput>
  }

  export type ProductInstanceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<
      Enumerable<ProductInstanceCreateWithoutProductInput>,
      Enumerable<ProductInstanceUncheckedCreateWithoutProductInput>
    >
    connectOrCreate?: Enumerable<ProductInstanceCreateOrConnectWithoutProductInput>
    createMany?: ProductInstanceCreateManyProductInputEnvelope
    connect?: Enumerable<ProductInstanceWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductInstanceUpdateManyWithoutProductNestedInput = {
    create?: XOR<
      Enumerable<ProductInstanceCreateWithoutProductInput>,
      Enumerable<ProductInstanceUncheckedCreateWithoutProductInput>
    >
    connectOrCreate?: Enumerable<ProductInstanceCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductInstanceUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductInstanceCreateManyProductInputEnvelope
    set?: Enumerable<ProductInstanceWhereUniqueInput>
    disconnect?: Enumerable<ProductInstanceWhereUniqueInput>
    delete?: Enumerable<ProductInstanceWhereUniqueInput>
    connect?: Enumerable<ProductInstanceWhereUniqueInput>
    update?: Enumerable<ProductInstanceUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductInstanceUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductInstanceScalarWhereInput>
  }

  export type ProductInstanceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<
      Enumerable<ProductInstanceCreateWithoutProductInput>,
      Enumerable<ProductInstanceUncheckedCreateWithoutProductInput>
    >
    connectOrCreate?: Enumerable<ProductInstanceCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductInstanceUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductInstanceCreateManyProductInputEnvelope
    set?: Enumerable<ProductInstanceWhereUniqueInput>
    disconnect?: Enumerable<ProductInstanceWhereUniqueInput>
    delete?: Enumerable<ProductInstanceWhereUniqueInput>
    connect?: Enumerable<ProductInstanceWhereUniqueInput>
    update?: Enumerable<ProductInstanceUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductInstanceUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductInstanceScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutInstancesInput = {
    create?: XOR<
      ProductCreateWithoutInstancesInput,
      ProductUncheckedCreateWithoutInstancesInput
    >
    connectOrCreate?: ProductCreateOrConnectWithoutInstancesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<
      ProductCreateWithoutInstancesInput,
      ProductUncheckedCreateWithoutInstancesInput
    >
    connectOrCreate?: ProductCreateOrConnectWithoutInstancesInput
    upsert?: ProductUpsertWithoutInstancesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<
      ProductUpdateWithoutInstancesInput,
      ProductUncheckedUpdateWithoutInstancesInput
    >
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ProductInstanceCreateWithoutProductInput = {
    units: number
    expirationDate: Date | string
  }

  export type ProductInstanceUncheckedCreateWithoutProductInput = {
    instanceId?: number
    units: number
    expirationDate: Date | string
  }

  export type ProductInstanceCreateOrConnectWithoutProductInput = {
    where: ProductInstanceWhereUniqueInput
    create: XOR<
      ProductInstanceCreateWithoutProductInput,
      ProductInstanceUncheckedCreateWithoutProductInput
    >
  }

  export type ProductInstanceCreateManyProductInputEnvelope = {
    data: Enumerable<ProductInstanceCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductInstanceUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductInstanceWhereUniqueInput
    update: XOR<
      ProductInstanceUpdateWithoutProductInput,
      ProductInstanceUncheckedUpdateWithoutProductInput
    >
    create: XOR<
      ProductInstanceCreateWithoutProductInput,
      ProductInstanceUncheckedCreateWithoutProductInput
    >
  }

  export type ProductInstanceUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductInstanceWhereUniqueInput
    data: XOR<
      ProductInstanceUpdateWithoutProductInput,
      ProductInstanceUncheckedUpdateWithoutProductInput
    >
  }

  export type ProductInstanceUpdateManyWithWhereWithoutProductInput = {
    where: ProductInstanceScalarWhereInput
    data: XOR<
      ProductInstanceUpdateManyMutationInput,
      ProductInstanceUncheckedUpdateManyWithoutInstancesInput
    >
  }

  export type ProductInstanceScalarWhereInput = {
    AND?: Enumerable<ProductInstanceScalarWhereInput>
    OR?: Enumerable<ProductInstanceScalarWhereInput>
    NOT?: Enumerable<ProductInstanceScalarWhereInput>
    instanceId?: IntFilter | number
    name?: StringFilter | string
    units?: IntFilter | number
    expirationDate?: DateTimeFilter | Date | string
  }

  export type ProductCreateWithoutInstancesInput = {
    name: string
    monthsToFreeze: number
  }

  export type ProductUncheckedCreateWithoutInstancesInput = {
    productId?: number
    name: string
    monthsToFreeze: number
  }

  export type ProductCreateOrConnectWithoutInstancesInput = {
    where: ProductWhereUniqueInput
    create: XOR<
      ProductCreateWithoutInstancesInput,
      ProductUncheckedCreateWithoutInstancesInput
    >
  }

  export type ProductUpsertWithoutInstancesInput = {
    update: XOR<
      ProductUpdateWithoutInstancesInput,
      ProductUncheckedUpdateWithoutInstancesInput
    >
    create: XOR<
      ProductCreateWithoutInstancesInput,
      ProductUncheckedCreateWithoutInstancesInput
    >
  }

  export type ProductUpdateWithoutInstancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    monthsToFreeze?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateWithoutInstancesInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    monthsToFreeze?: IntFieldUpdateOperationsInput | number
  }

  export type ProductInstanceCreateManyProductInput = {
    instanceId?: number
    units: number
    expirationDate: Date | string
  }

  export type ProductInstanceUpdateWithoutProductInput = {
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInstanceUncheckedUpdateWithoutProductInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInstanceUncheckedUpdateManyWithoutInstancesInput = {
    instanceId?: IntFieldUpdateOperationsInput | number
    units?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
