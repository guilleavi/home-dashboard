export type ProductSummary = {
  name: string
  howLongToFreeze: number
  nextToExpireDate: string
  nextToExpireUnits: number
}

export type ProductToSave = {
  name: string
  howLongToFreeze: number
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
  howLongToFreeze = 0
  nextToExpireDate = new Date().toDateString()
  nextToExpireUnits = 0

  constructor(name: string) {
    this.name = name
  }
}