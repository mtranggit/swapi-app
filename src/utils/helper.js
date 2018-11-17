export function formatEntities(entities) {
  if (!entities) {
    return {}
  }
  return entities.reduce((formattedEntities, entity) => {
    const entityKey = getIdFromUrl(entity['url'])
    formattedEntities[entityKey] = {
      ...entity,
    }
    return formattedEntities
  }, {})
}

export function getIdFromUrl(url) {
  return url
    .split('/')
    .filter(Boolean)
    .reverse()[0]
}

/**
 * This ES6(ECMAScript) function getQueryStringParameters takes url
 * as parmater and returns
 * parameters name and value in JSON key value format
 * @parameter {String} url
 * (if url is not passed it takes the current url from window.location.href)
 *
 **/
export const getQueryStringParameters = url => {
  let query
  if (url) {
    if (url.split('?').length > 0) {
      query = url.split('?')[1]
    }
  } else {
    url = window.location.href
    query = window.location.search.substring(1)
  }
  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [key, value] = param.split('=')
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
      return params
    }, {})
}
