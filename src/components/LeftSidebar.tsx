'use client'

import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'

export default function LeftSidebar() {
  return (
    <Box sx={{ position: { md: 'sticky' }, top: { md: 80 } }}>
      
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            <Avatar sx={{ width: 72, height: 72 }}>
              GJ
            </Avatar>
            <Typography variant="h6">Garima Jain</Typography>
            <Typography variant="body2" color="text.secondary">
              Web Developer
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <List>
          <ListItemButton>
            <ListItemText primary="Connections" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Groups" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Events" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Saved Items" />
          </ListItemButton>
        </List>
      </Card>

    </Box>
  )
}