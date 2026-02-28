'use client'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
  Divider,
} from '@mui/material'

interface PostProps {
  name: string
  content: string
}

export default function PostCard({ name, content }: PostProps) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{name.charAt(0)}</Avatar>}
        title={name}
        subheader="2h ago"
      />

      <CardContent>
        <Typography variant="body1">
          {content}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions>
        <Button fullWidth>Like</Button>
        <Button fullWidth>Comment</Button>
        <Button fullWidth>Share</Button>
      </CardActions>
    </Card>
  )
}