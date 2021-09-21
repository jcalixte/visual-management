export interface Step {
  name: string
  prerequisites: string[]
  outputs: string[]
  people: string[]
  redBins?: string[]
}
