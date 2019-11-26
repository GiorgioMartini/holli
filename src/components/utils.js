function getErrorMsg (message, username) {
  if (message === 'Not Found') {
    return `${username} doesn't exist`
  }

  return message
}

// function getProfile (username) {
//   return fetch(`https://api.github.com/users/${username}${params}`)
//     .then((res) => res.json())
//     .then((profile) => {
//       if (profile.message) {
//         throw new Error(getErrorMsg(profile.message, username))
//       }

//       return profile
//     })
// }

export function fetchHotels (endpoint) {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      // if (!data) {
      //   throw new Error(data.message)
      // }
      return data
    })
}
