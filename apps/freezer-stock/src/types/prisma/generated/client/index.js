Object.defineProperty(exports, "__esModule", { value: true })

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
} = require("./runtime/index")

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.1
 * Query Engine version: ca7fcef713137fa11029d519a9780db130cca91d
 */
Prisma.prismaVersion = {
  client: "4.8.1",
  engine: "ca7fcef713137fa11029d519a9780db130cca91d",
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
}

const path = require("path")

const { findSync } = require("./runtime")
const fs = require("fs")

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== "undefined" && __dirname !== "/"

// will work in most cases, ie. if the client has not been bundled
const regularDirname =
  hasDirname &&
  fs.existsSync(path.join(__dirname, "schema.prisma")) &&
  __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname =
  !regularDirname &&
  findSync(
    process.cwd(),
    [
      "src\\types\\prisma\\generated\\client",
      "types\\prisma\\generated\\client",
    ],
    ["d"],
    ["d"],
    1,
  )[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) {
  return x
}

exports.Prisma.ProductInstanceScalarFieldEnum = makeEnum({
  instanceId: "instanceId",
  name: "name",
  units: "units",
  storageDate: "storageDate",
})

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  productId: "productId",
  name: "name",
  monthsToFreeze: "monthsToFreeze",
})

exports.Prisma.SortOrder = makeEnum({
  asc: "asc",
  desc: "desc",
})

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
})

exports.Prisma.ModelName = makeEnum({
  Product: "Product",
  ProductInstance: "ProductInstance",
})

const dmmfString =
  '{"datamodel":{"enums":[],"models":[{"name":"Product","dbName":null,"fields":[{"name":"productId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"monthsToFreeze","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"instances","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProductInstance","relationName":"ProductToProductInstance","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"ProductInstance","dbName":null,"fields":[{"name":"instanceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Product","relationName":"ProductToProductInstance","relationFromFields":["name"],"relationToFields":["name"],"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"units","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"storageDate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}],"types":[]},"mappings":{"modelOperations":[{"model":"Product","plural":"products","findUnique":"findUniqueProduct","findUniqueOrThrow":"findUniqueProductOrThrow","findFirst":"findFirstProduct","findFirstOrThrow":"findFirstProductOrThrow","findMany":"findManyProduct","create":"createOneProduct","createMany":"createManyProduct","delete":"deleteOneProduct","update":"updateOneProduct","deleteMany":"deleteManyProduct","updateMany":"updateManyProduct","upsert":"upsertOneProduct","aggregate":"aggregateProduct","groupBy":"groupByProduct"},{"model":"ProductInstance","plural":"productInstances","findUnique":"findUniqueProductInstance","findUniqueOrThrow":"findUniqueProductInstanceOrThrow","findFirst":"findFirstProductInstance","findFirstOrThrow":"findFirstProductInstanceOrThrow","findMany":"findManyProductInstance","create":"createOneProductInstance","createMany":"createManyProductInstance","delete":"deleteOneProductInstance","update":"updateOneProductInstance","deleteMany":"deleteManyProductInstance","updateMany":"updateManyProductInstance","upsert":"upsertOneProductInstance","aggregate":"aggregateProductInstance","groupBy":"groupByProductInstance"}],"otherOperations":{"read":[],"write":["executeRaw","queryRaw"]}}}'
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "C:\\Users\\guill\\Documents\\MyRepos\\home-dashboard\\apps\\freezer-stock\\src\\types\\prisma\\generated\\client",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: "..\\..\\..\\..\\..\\.env",
    schemaEnvPath: "..\\..\\..\\..\\..\\.env",
  },
  relativePath: "..\\..\\..\\..\\..\\prisma",
  clientVersion: "4.8.1",
  engineVersion: "ca7fcef713137fa11029d519a9780db130cca91d",
  datasourceNames: ["db"],
  activeProvider: "mysql",
  dataProxy: false,
}
config.document = dmmf
config.dirname = dirname

const { warnEnvConflicts } = require("./runtime/index")

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath),
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node")
path.join(
  process.cwd(),
  "src\\types\\prisma\\generated\\client\\query_engine-windows.dll.node",
)
path.join(__dirname, "schema.prisma")
path.join(process.cwd(), "src\\types\\prisma\\generated\\client\\schema.prisma")
