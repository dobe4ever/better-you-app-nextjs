// pages/api/users/[id].ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  // Fetch user data from the database
  const user = await fetchUserFromDatabase('id')
  res.status(200).json(user)
}

const fetchUserFromDatabase = async (id: string) => {
  // Implement database fetching logic here
  return {
    username: 'Brotastic',
    avatarUrl: 'https://i.pravatar.cc/300'
  }
}
