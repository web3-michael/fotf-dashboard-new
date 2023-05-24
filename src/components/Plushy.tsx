import { Box, Button, CircularProgress, Skeleton, Typography } from "@mui/material";
import { useTitle } from "../hooks/useTitle";
import "../styles/Dashboard.css";
import {
  ThirdwebProvider,
  coinbaseWallet,
  localWallet,
  metamaskWallet,
  safeWallet,
  useAddress,
  walletConnect,
} from "@thirdweb-dev/react";
import { useSDK } from "@thirdweb-dev/react";
import { LoadETHAccountDetails } from "../account/loadETHAccountDetails";
import { PolygonProps, PolygonPropsNoNav } from "../views/Dashboard";
import NFTList from "./NFTList";
import LoadingDialog from "./LoadingDialog";
import plushy from "../assets/plushy.jpg";

function Plushy() {

    return (
        <Box className="row-between" sx={{width: "100%", height: "100%", paddingLeft: "5px", paddingRight: "5px"}}>
            <Box className="half-col">
                <img src={plushy} alt="Plushies" className="plushyImage"/>
            </Box>
            <Box className="half-col">
                <Typography className="page-header-small"> 
                    Ted Plushy Launch
                </Typography>
                <Typography>
                    <span className="accent-text">$44.99</span> Collectors Box Edition Pre-Order
                </Typography>
                <Typography>
                    <span className="accent-text">$9.99</span> / Individual Teddy Plushy Pre-Order
                </Typography>
                <Typography className="small-text">
                    Who doesn't love a Teddy Bear? Stitched with large eyes, large face, tiny ears, non-toxic soft and silky plush fabric, soft huggable body and machine washable.
                </Typography>
                <Button className="dashboard-button" variant="contained" color="primary" onClick={() => window.open("https://shopfotf.com/")}>
                    Get Your Plushy
                </Button>
            </Box>
        </Box>
    );
}

export default Plushy;
