const hostApi = 'http://localhost'
const portApi = '8080'
const baseUrlApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

const config = {
  baseUrlApi,
}

export default config