const pusher = {
  api_key: process.env.PUSHER.KEY,
  options: {
    cluster: process.env.PUSHER.CLUSTER,
    encrypted: true
  }
}

export default pusher
