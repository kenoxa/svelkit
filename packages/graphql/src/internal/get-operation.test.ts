import type { GraphQLOperationType } from '../types'

import { minimize } from './minimize'
import { getOperation } from './get-operation'

const cases: [string, string, { type: GraphQLOperationType; name: string | undefined }][] = [
  ['query shorthand', '{\n  field\n}', { type: 'query', name: undefined }],
  [
    'mutation',
    `mutation {
    likeStory(storyID: 12345) {
      story {
        likeCount
      }
    }
  }`,
    { type: 'mutation', name: undefined },
  ],
  [
    'mutation with name',
    `mutation LikeStory {
    likeStory(storyID: 12345) {
      story {
        likeCount
      }
    }
  }`,
    { type: 'mutation', name: 'LikeStory' },
  ],
  [
    'comment: first line',
    `
    # \`me\` could represent the currently logged in viewer.
    query Me {
      me {
        name
      }
    }`,
    { type: 'query', name: 'Me' },
  ],
  [
    'comment: in selection set',
    `
    # query users one of many users in a graph of data\n\r
    # referred to by a unique identifier.
    query User {
      user(id: 4) {
        # the unique identifier
        id # base64url encoded
        # the name
        name
      }
    }`,
    { type: 'query', name: 'User' },
  ],
  [
    'with fragments',
    `
    fragment friendFields on User {
      id
      name
      profilePic(size: 50)
    }

    query withFragments {
      user(id: 4) {
        friends(first: 10) {
          ...friendFields
        }
        mutualFriends(first: 10) {
          ...friendFields
        }
      }
    }
    `,
    { type: 'query', name: 'withFragments' },
  ],
  [
    `with nested fragments`,
    `
    fragment friendFields on User {
      id
      name
      ...standardProfilePic
    }

    query withNestedFragments {
      user(id: 4) {
        friends(first: 10) {
          ...friendFields
        }
        mutualFriends(first: 10) {
          ...friendFields
        }
      }
    }

    fragment standardProfilePic on User {
      profilePic(size: 50)
    }
    `,
    { type: 'query', name: 'withNestedFragments' },
  ],
  [
    'inline fragment no type',
    `
    query inlineFragmentNoType($expandedInfo: Boolean) {
      user(handle: "zuck") {
        id
        name
        ... @include(if: $expandedInfo) {
          firstName
          lastName
          birthday
        }
      }
    }
    `,
    { type: 'query', name: 'inlineFragmentNoType' },
  ],
  [
    'subscription',
    `subscription sub {
      ...newMessageFields
    }

    fragment newMessageFields on Subscription {
      newMessage {
        body
        sender
      }
    }`,
    { type: 'subscription', name: 'sub' },
  ],
]
test.each(cases)('%s', (_, gql, expected): void => {
  expect(getOperation(gql)).toStrictEqual(expected)
  expect(getOperation(minimize(gql))).toStrictEqual(expected)
})
