export default function () {
  return {
    httpEndpoint: 'http://localhost:8000/graphql',
    getAuth: () => `${localStorage.getItem('auth._token.local')}`,
  }
}
