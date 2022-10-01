export type ProductSummary = {
  name: string
  monthsToFreeze: number
  nextToExpireDate: Date
  nextToExpireUnits: number
}

export type ProductToSave = Exclude<
  ProductSummary,
  "nextToExpireDate" | "nextToExpireUnits"
> & {
  storageDate: Date
  units: number
}

export type ProductDetails = {
  name: string
  expirationDate: Date
  units: number
}

export class NewProduct implements ProductSummary {
  name = ""
  monthsToFreeze = 0
  nextToExpireDate = new Date()
  nextToExpireUnits = 0

  constructor(name: string) {
    this.name = name
  }
}
