export type ProductSummary = {
  name: string
  monthsToFreeze: number
  nextToExpireDate: string // TODO: convert to Date
  nextToExpireUnits: number
}

export type ProductToSave = {
  name: string
  monthsToFreeze: number
  storageDate: string
  units: number
}

export type ProductDetails = {
  name: string
  expirationDate: string
  units: number
}

export class NewProduct implements ProductSummary {
  name = ""
  monthsToFreeze = 0
  nextToExpireDate = new Date().toDateString()
  nextToExpireUnits = 0

  constructor(name: string) {
    this.name = name
  }
}
