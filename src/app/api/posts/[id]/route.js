import find from 'lodash.find'

export async function GET(request) {
  console.log('request', request)
  const urlArray = request.url.split('/')

  const id = urlArray[urlArray.length - 1]

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const posts = await response.json()

  const post = find(posts, { id: parseInt(id) })

  if (!post) {
    throw new Error(`Could not find post with ${id}`)
  }

  return Response.json({ post })
}
