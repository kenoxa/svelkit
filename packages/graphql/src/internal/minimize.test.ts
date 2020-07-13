// For comparing: import { parse, print, stripIgnoredCharacters } from 'graphql'

import { minimize } from './minimize'

const cases = [
  ['query shorthand', '{\n  field\n}', '{field}'],
  [
    'mutation',
    `mutation {
    likeStory(storyID: 12345) {
      story {
        likeCount
      }
    }
  }`,
    'mutation{likeStory(storyID:12345){story{likeCount}}}',
  ],
  [
    'selection set',
    `
  {
    id
    firstName
    lastName
  }
  `,
    '{id firstName lastName}',
  ],
  ['selection set with comma', `{ id, firstName, lastName }`, '{id firstName lastName}'],
  [
    'fields',
    `
    {
      me {
        id
        firstName
        lastName
        birthday {
          month
          day
        }
        friends {
          name
        }
      }
    }
    `,
    '{me{id firstName lastName birthday{month day}friends{name}}}',
  ],
  [
    'comment: first line',
    `# \`me\` could represent the currently logged in viewer.
    {
      me {
        name
      }
    }`,
    '{me{name}}',
  ],
  [
    'comment: in selection set',
    `
    # \`user\` represents one of many users in a graph of data\n\r
    # referred to by a unique identifier.
    {
      user(id: 4) {
        # the unique identifier
        id # base64url encoded
        # the name
        name
      }
    }`,
    '{user(id:4){id name}}',
  ],
  [
    'field arguments with comma',
    `{
      picture(width: 200, height: 100)
    }`,
    '{picture(width:200 height:100)}',
  ],
  [
    'field arguments with space',
    `{
      picture(
        width: 200
        height: 100
      )
    }`,
    '{picture(width:200 height:100)}',
  ],
  [
    'field alias',
    `{
      user(id: 4) {
        id
        name
        smallPic: profilePic(size: 64)
        bigPic: profilePic(size: 1024)
      }
    }`,
    '{user(id:4){id name smallPic:profilePic(size:64)bigPic:profilePic(size:1024)}}',
  ],
  [
    'with fragments',
    `
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

    fragment friendFields on User {
      id
      name
      profilePic(size: 50)
    }
    `,
    `query withFragments{user(id:4){friends(first:10){...friendFields}mutualFriends(first:10){...friendFields}}}` +
      `fragment friendFields on User{id name profilePic(size:50)}`,
  ],
  [
    `with nested fragments`,
    `
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

    fragment friendFields on User {
      id
      name
      ...standardProfilePic
    }

    fragment standardProfilePic on User {
      profilePic(size: 50)
    }
    `,
    `query withNestedFragments{user(id:4){friends(first:10){...friendFields}mutualFriends(first:10){...friendFields}}}` +
      `fragment friendFields on User{id name...standardProfilePic}` +
      `fragment standardProfilePic on User{profilePic(size:50)}`,
  ],
  [
    'inline fragment typing',
    `
    query inlineFragmentTyping {
      profiles(handles: ["zuck", "coca cola"]) {
        handle
        ... on User {
          friends {
            count
          }
        }
        ... on Page {
          likers {
            count
          }
        }
      }
    }
    `,
    `query inlineFragmentTyping{profiles(handles:["zuck""coca cola"]){handle` +
      `...on User{friends{count}}` +
      `...on Page{likers{count}}}}`,
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
    `query inlineFragmentNoType($expandedInfo:Boolean){user(handle:"zuck"){id name` +
      `...@include(if:$expandedInfo){firstName lastName birthday}}}`,
  ],
  [
    'block string',
    `
      mutation {
        sendEmail(message: """
          Hello,
            World!

          Yours,
            GraphQL.
        """)
      }
    `,
    `mutation{sendEmail(message:"Hello,\n  World!\n\nYours,\n  GraphQL.")}`,
  ],
  [
    'string value escaped',
    `{
      user(name: "some \\"    name") {
        id
      }
    }`,
    `{user(name:"some \\"    name"){id}}`,
  ],
  [
    'block string escaped',
    `
      mutation {
        sendEmail(message: """
          Hello,
            World!
          \\"""
          Yours,
            GraphQL.
        """)
      }
    `,
    `mutation{sendEmail(message:"Hello,\n  World!\n\\"\\"\\"\nYours,\n  GraphQL.")}`,
  ],
  [
    'input object fields',
    `{
      nearestThing(location: { lon: 12.43, lat: -53.211 })
    }`,
    `{nearestThing(location:{lon:12.43 lat:-53.211})}`,
  ],
  [
    'variables',
    `query getZuckProfile($devicePicSize: Int) {
      user(id: 4) {
        id
        name
        profilePic(size: $devicePicSize)
      }
    }`,
    `query getZuckProfile($devicePicSize:Int){user(id:4){id name profilePic(size:$devicePicSize)}}`,
  ],
  [
    '@skip',
    `query myQuery($someTest: Boolean!) {
      experimentalField @skip(if: $someTest)
    }`,
    `query myQuery($someTest:Boolean!){experimentalField@skip(if:$someTest)}`,
  ],
  [
    '@include',
    `query myQuery($someTest: Boolean!) {
      experimentalField @include(if: $someTest)
    }`,
    `query myQuery($someTest:Boolean!){experimentalField@include(if:$someTest)}`,
  ],
  [
    'introspection query',
    `{
      __type(name: "User") {
        name
        fields {
          name
          type {
            name
          }
        }
      }
    }`,
    `{__type(name:"User"){name fields{name type{name}}}}`,
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
    `subscription sub{...newMessageFields}fragment newMessageFields on Subscription{newMessage{body sender}}`,
  ],
  [
    'complex input',
    `query goodComplexDefaultValue($search: ComplexInput = { name: "Fido" }) {
      findDog(complex: $search)
    }`,
    `query goodComplexDefaultValue($search:ComplexInput={name:"Fido"}){findDog(complex:$search)}`,
  ],
  [
    '@defer',
    `query NewsFeed {
      newsFeed {
        stories {
          id
          title
          comments @defer {
            id
            text
          }
        }
        recommendedForYou @defer {
          story {
            id
            title
            comments @defer {
              id
              text
            }
          }
          matchScore
        }
      }
    }`,
    `query NewsFeed{newsFeed{stories{id title comments@defer{id text}}` +
      `recommendedForYou@defer{story{id title comments@defer{id text}}matchScore}}}`,
  ],
  [
    'nested input object values',
    `{
      search(
        where: {
          company: {eq: "acme"},
          _or_: {
            givenName: {startsWith: "A"},
            sn: {startsWith: "A"}
          }
          _not_: { sn: { eq: "Alfred"} }
        }
      ) {
        id
      }
    }`,
    `{search(where:{company:{eq:"acme"}_or_:{givenName:{startsWith:"A"}sn:{startsWith:"A"}}_not_:{sn:{eq:"Alfred"}}}){id}}`,
  ],
]
test.each(cases)('%s', (_, gql, minified): void => {
  expect(minimize(gql)).toBe(minified)
  expect(minimize(minified)).toBe(minified)

  // For testing: expect(minimize(gql)).toBe(stripIgnoredCharacters(print(parse(gql))))
})
