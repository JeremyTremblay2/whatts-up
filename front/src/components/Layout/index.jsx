import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import Menu from "@mui/material/Menu"
import { AppBar, Toolbar, Button, Container, Typography, MenuItem, IconButton } from "@mui/material"
import Box from "@mui/material/Box"
import AccountCircle from "@mui/icons-material/AccountCircle"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import { handleDisconnect } from "../../hooks/useAuthenticate"
import { UserContext, useUserInfo } from "../UserContext"
import { useIsLoading } from "../LoadingContext/index"
import ScrollTop from "./ScrollTop"
import LinearProgress from "@mui/material/LinearProgress"

const Layout = () => {
  const userInfo = useUserInfo()
  const [anchorEl, setAnchorEl] = useState(null)

  const navigate = useNavigate()

  const userContext = useContext(UserContext)
  const { isLoading } = useIsLoading()

  useEffect(() => {
    if (userInfo === null) {
      userContext.setRefreshUser(true)
    }
  }, [userInfo])

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClickProfile = () => {
    navigate("/profile")
    setAnchorEl(null)
  }

  const handleClickDisconnect = () => {
    setAnchorEl(null)
    handleDisconnect(navigate)
    userContext.setRefreshUser(true)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box>
        <AppBar position="static" id="top-anchor">
          <Toolbar sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
            <Typography variant="h6" component="div">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "unset" }}
              >
                Whatts Up
              </Link>
            </Typography>
            {userInfo ? (
              <>
                <div style={{ justifySelf: "end" }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={handleClickProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleClickDisconnect}>Disconnect</MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <>
                <div />
                <Button
                  sx={{ justifySelf: "end" }}
                  color="inherit"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {isLoading && <LinearProgress style={{ width: "100%" }} />}
      <Container maxWidth="xl" sx={{ padding: "20px 0", flexGrow: 1 }}>
        <Outlet />
      </Container>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>2025 – CROISIER Maxime – TREMBLAY Jérémy</Typography>
        </Toolbar>
      </AppBar>
      <ScrollTop />
    </div>
  )
}

export default Layout
