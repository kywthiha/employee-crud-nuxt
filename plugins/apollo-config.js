export default function () {
  return {
    httpEndpoint: `${process.env.BASE_URL}/graphql`,
    getAuth: () => `${localStorage.getItem('auth._token.local')}`,
  }
}
