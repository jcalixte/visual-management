import { Step } from '@/models/step'

export const manuSteps: Step[] = [
  {
    name: 'Production',
    prerequisites: ['validated tests', 'up to date documentations'],
    outputs: ['users can use the feature! 🎉'],
    people: ['devops team']
  },
  {
    name: 'Acceptation testing',
    prerequisites: ['deployed services in acceptation testing environment'],
    outputs: ['validated tests', 'up to date documentation'],
    people: ['devops team', 'QA team', 'dev team'],
    redBins: ['missing test on Safari browser']
  },
  {
    name: 'Dev testing',
    prerequisites: ['deployment ready for testing in dev environment'],
    outputs: ['development validated in dev environment'],
    people: ['dev team']
  },
  {
    name: 'Deployment',
    prerequisites: ['development done in main branch'],
    outputs: ['updated dev environment with new code'],
    people: ['GitHub action'],
    redBins: ['network crash']
  },
  {
    name: 'Code review',
    prerequisites: [
      'Pull Request ready to be code reviewed',
      'unit tests up to date and running'
    ],
    outputs: ['merge on main branch'],
    people: ['tech lead team']
  },
  {
    name: 'Development',
    prerequisites: ['technical ticket with technical design'],
    outputs: ['branch with pull request ready to be code reviewed'],
    people: ['dev team'],
    redBins: [
      'missing tests',
      'missing edge case',
      'not working on Android',
      'acceptance criteria unfulfilled'
    ]
  },
  {
    name: 'Mockups',
    prerequisites: [`User stories`],
    outputs: [`Figma's mockups`],
    people: ['design team'],
    redBins: [
      'user story not clear',
      'long text taking 2 lines missing edge case'
    ]
  },
  {
    name: 'Step',
    prerequisites: ['prerequisites'],
    outputs: ['outputs'],
    people: ['people'],
    redBins: ['red bins']
  }
]
