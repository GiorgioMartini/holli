export function fetchPirateApi (endpoint) {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error)
      }
      return data
    })
}
