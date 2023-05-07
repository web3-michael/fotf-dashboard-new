import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useTitle } from "../hooks/useTitle";
import "../styles/Dashboard.css";
import { useAddress } from "@thirdweb-dev/react";
import { useSDK } from "@thirdweb-dev/react";
import accessDeniedImage from "../assets/access_denied_2.png";

function ConnectWalletPage() {
  useTitle("FOTF | Connect Your Wallet");
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const sdk = useSDK();
  const provider = sdk?.getProvider();
  const address = useAddress();

  return (
    <Box className="inner-container">
      <img
        src={accessDeniedImage}
        alt="access denied"
        className={isMobile ? "accessDeniedImage-mobile" : "accessDeniedImage"}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          zIndex: "1 !important",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        className={isMobile ? "" : "add-padding"}
      >
        <h1 className={isMobile ? "comingSoon-Mobile" : "comingSoon"}>
          <span
            className={isMobile ? "comingSoonBlack-Mobile" : "comingSoonBlack"}
          >
            Connect Your
          </span>{" "}
          Wallet
        </h1>
      </Box>
    </Box>
  );
}

export default ConnectWalletPage;
