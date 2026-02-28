"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  InputBase,
  Container,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LEFT SECTION */}
          <Box display="flex" alignItems="center" gap={2}>
            <Image
              src="/linkedin.webp"
              alt="LinkedIn Logo"
              width={60}
              height={60}
              priority
            />

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              px={2}
              py={0.5}
              sx={{ borderRadius: 5, backgroundColor: "action.hover" }}
            >
              <SearchIcon fontSize="small" />
              <InputBase placeholder="Search" />
            </Box>
          </Box>

          {/* CENTER SECTION */}
          <Box display="flex" alignItems="center" gap={3}>
            <NavItem icon={<HomeIcon />} label="Home" active />
            <NavItem icon={<GroupIcon />} label="My Network" />
            <NavItem icon={<WorkIcon />} label="Jobs" />
            <NavItem icon={<ChatBubbleIcon />} label="Messaging" />
            <NavItem icon={<NotificationsIcon />} label="Notifications" />
          </Box>

          {/* RIGHT SECTION */}
          <Box display="flex" alignItems="center" gap={3}>
            <Box textAlign="center">
              <Avatar sx={{ width: 28, height: 28, mx: "auto" }} />
              <Typography variant="caption">Me</Typography>
            </Box>

            <Box
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={0.5}
            >
              <AppsIcon />
              <Typography variant="caption">For Business</Typography>
            </Box>

            <Typography variant="body2">Try Premium for ₹0</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        borderBottom: active ? 2 : 0,
        pb: 1,
      }}
    >
      <IconButton size="small">{icon}</IconButton>
      <Typography variant="caption">{label}</Typography>
    </Box>
  );
}
