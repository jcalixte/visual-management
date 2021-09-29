import { Step } from '@/models/step'

export const manuSteps: Step[] = [
  {
    name: 'Production',
    prerequisites: ['validated tests', 'up to date documentations'],
    outputs: ['feature available for users'],
    people: ['deployment team']
  },
  {
    name: 'Acceptation testing',
    prerequisites: ['deployed services in acceptation testing environment'],
    outputs: ['validated tests', 'up to date documentation'],
    people: ['deployment team', 'QA team'],
    redBins: ['missing test on Firefox browser']
  },
  // {
  //   name: 'Dev testing',
  //   prerequisites: ['deployment ready for testing in dev environment'],
  //   outputs: ['development validated in dev environment'],
  //   people: ['dev team']
  // },
  // {
  //   name: 'Deployment',
  //   prerequisites: ['development done in main branch'],
  //   outputs: ['updated dev environment with new code'],
  //   people: ['GitHub action'],
  //   redBins: ['network crash']
  // },
  {
    name: 'Code review',
    prerequisites: ['Code ready to be reviewed', 'technical tests up to date'],
    outputs: ['code validated'],
    people: ['tech lead team']
  },
  {
    name: 'Development',
    prerequisites: ['technical ticket'],
    outputs: ['code ready to be reviewed'],
    people: ['dev team'],
    redBins: [
      'missing tests',
      'missing edge case',
      'not working on Android',
      'acceptance criteria unfulfilled'
    ]
  },
  {
    name: 'Technical design',
    prerequisites: [`user stories`, 'mockups'],
    outputs: [`Figma's mockups`],
    people: ['design team'],
    redBins: ['missing ']
  },
  {
    name: 'Mockups',
    prerequisites: [`user stories`],
    outputs: [`mockups`],
    people: ['design team'],
    redBins: [
      'user story not clear',
      'long text taking 2 lines missing edge case'
    ]
  }
]
