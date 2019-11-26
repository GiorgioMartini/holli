export function fetchHotels (endpoint) {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
}
