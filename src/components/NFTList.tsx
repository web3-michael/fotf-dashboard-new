import * as React from 'react';
import { Box, ImageList, createTheme, useMediaQuery, useTheme } from "@mui/material";
import { NFT } from '@thirdweb-dev/sdk';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ThirdwebNftMedia } from '@thirdweb-dev/react';
import "../styles/Dashboard.css";

interface NFTListProps {
    tokens: NFT[];
    searchText: string;
}
  
function NFTList(props: NFTListProps) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const isLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isFullScreen = useMediaQuery(theme.breakpoints.up(1800));
  console.log(`Mobile:  ${isMobile}`);
  console.log(`Small:  ${isSmall}`);
  console.log(`Medium:  ${isMedium}`);
  console.log(`Medium-Large:  ${isMediumLarge}`);
  console.log(`Large:  ${isLarge}`);
  console.log(`XL:  ${isXL}`);
  console.log(`Is 1920:  ${isFullScreen}`);



  const [columns, setColumns] = React.useState(3);

  React.useEffect(() => {
    if(isMobile) {
      if (isSmall) {
        setColumns(1);
      } else {
        setColumns(2);
      }
    } else {
      if (isSmall) {
        setColumns(1);
      } else if (isMedium) {
        setColumns(1);
      } else if (isMediumLarge) {
        setColumns(2);
      } else if (isLarge) {
        setColumns(2);
      } else if (isXL && !isFullScreen) {
        setColumns(3);
      } else if (isFullScreen){
        setColumns(4);
      } else {
        setColumns(3);
      }
    }
  }, [isMobile, isSmall, isMedium, isMediumLarge, isLarge, isXL, isFullScreen]);

    const add = () => {
        console.log("adding...");
    }

    const star = () => {
        console.log("staring...");
    }

    const filteredNFTs = props.tokens?.filter(e => e.metadata.id!.includes(props.searchText));
    console.log(filteredNFTs)
  
    return (
        <ImageList sx={{ justifyContent: "center", width: "100%", height: "100%", paddingLeft: "10px", paddingRight: "10px", overflowX: "hidden", 
        overflowY: "auto", backgroundColor: "white" }} cols={columns} gap={10} rowHeight={360}>
                {filteredNFTs.map(e =>
                <Box key={e.metadata.id} className="card" sx={{ marginLeft: "auto", marginRight: "auto", background: "none", maxHeight: "450px", maxWidth: "350px"}}>
                  <StarBorderIcon onClick={star} sx={{ position: "absolute", top: "5px", right: "5px" }}/>
                  <ThirdwebNftMedia metadata={e.metadata} style={{ maxHeight: "280px", maxWidth: "280px",
                    borderRadius: "10px", objectFit: "cover", width: "280px", height: "280px"
                     }}/>
                  <Box className="column-container" sx={{ marginBottom: "10px"}}>
                    <div className="large-left-column">
                      <h3 className="metadata-title">{e.metadata.name}</h3>
                      <h4 className="metadata">Last Transfer: 03/11/2023</h4>

                    </div>
                    <div className="small-right-column">
                      <ControlPointIcon onClick={add} fontSize='small'/>
                    </div>
                  </Box>
                  
                  
                </Box>
              )}
              </ImageList>
    )
}

export default NFTList;
