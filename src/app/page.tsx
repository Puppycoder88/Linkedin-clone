import { Container, Grid } from '@mui/material'
import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
// import Grid from '@mui/material/Grid2'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          
          {/* Left Sidebar */}
          <Grid  xs={12} md={3}>
            <LeftSidebar />
          </Grid>

          {/* Feed */}
          <Grid  xs={12} md={6}>
            <Feed />
          </Grid>

          {/* Right Sidebar */}
          <Grid
            
            xs={12}
            md={3}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <RightSidebar />
          </Grid>

        </Grid>
      </Container>
    </>
  )
}