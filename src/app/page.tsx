import Grid from "@mui/material/Grid";
import Navbar from '../components/Navbar'
import LeftSidebar from '../components/LeftSidebar'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
// import Grid from '@mui/material/Grid2'

export default function HomePage() {
  return (
    <>
      <Navbar />

       <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <LeftSidebar />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Feed />
      </Grid>

      <Grid
        size={{ xs: 12, md: 3 }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <RightSidebar />
      </Grid>
    </Grid>
    </>
  )
}