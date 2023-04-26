export interface ProductSummary {
  name: string
  monthsToFreeze: number
  nextToExpireDate: Date
  nextToExpireUnits: number
}

export interface ProductToSave {
  name: string
  monthsToFreeze: number
  storageDate: Date
  units: number
}

export interface ProductDetails {
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

export interface UpdateNamePayload {
  key: "name"
  value: string
}

export interface UpdateMonthsPayload {
  key: "monthsToFreeze"
  value: number
}

export interface UpdateDatePayload {
  key: "storageDate"
  value: string
}

export interface UpdateUnitsPayload {
  key: "units"
  value: number
}
