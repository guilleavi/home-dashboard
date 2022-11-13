export type ProductSummary = {
  name: string
  monthsToFreeze: number
  nextToExpireDate: Date
  nextToExpireUnits: number
}

export type ProductToSave = {
  name: string
  monthsToFreeze: number
  storageDate: Date
  units: number
}

export type ProductDetails = {
  instanceId: number
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
