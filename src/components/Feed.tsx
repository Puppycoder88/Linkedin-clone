'use client'

import { Box, Card, CardContent, TextField, Button } from '@mui/material'
import PostCard from './PostCard'

const posts = [
  {
    id: 1,
    name: 'Alice Johnson',
    content: 'Excited to share that I just started a new role!',
  },
  {
    id: 2,
    name: 'Michael Smith',
    content: 'Just finished a great React + MUI project.',
  },
  {
    id: 3,
    name: 'Emma Williams',
    content: 'Looking for backend developers to join our team.',
  },
]

export default function Feed() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>

      {/* Create Post */}
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              placeholder="Start a post..."
              multiline
              minRows={2}
              fullWidth
            />
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained">
                Post
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          name={post.name}
          content={post.content}
        />
      ))}
    </Box>
  )
}