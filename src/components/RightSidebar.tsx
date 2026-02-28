'use client'

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material'

export default function RightSidebar() {
  return (
    <Box sx={{ position: { md: 'sticky' }, top: { md: 80 } }}>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add to your feed
          </Typography>
          <List>
            <ListItemButton>
              <ListItemText primary="Follow Sarah Connor" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Follow Bruce Wayne" />
            </ListItemButton>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Trending
          </Typography>
          <List>
            <ListItemButton>
              <ListItemText primary="#NextJS" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="#MaterialUI" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="#Frontend" />
            </ListItemButton>
          </List>
        </CardContent>
      </Card>

    </Box>
  )
}