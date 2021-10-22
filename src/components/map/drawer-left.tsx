import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  IconButton,
  Icon,
  Tooltip,
  TabPanel,
} from "@chakra-ui/react";
import { ChevronLeft } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import { LeafletControl } from "./control";
import TabsMap from "./tabs";
// import LayerLegend from "~/views/map/layer-legend";
// import LayerInfo from "~/views/map/layer-info";
// import LayerSettings from "~/views/map/layer-setting";
import "react-perfect-scrollbar/dist/css/styles.css";

const DrawerMapLeft = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="sm"
        variant="alwaysOpen"
        onClose={onToggle}
      >
        <DrawerContent>
          <PerfectScrollbar>
            <DrawerBody p="0">
              <TabsMap>
                <TabPanel>
                  <LayerInfo />
                </TabPanel>
                <TabPanel>
                  <LayerSettings />
                </TabPanel>
                <TabPanel>
                  <LayerLegend />
                </TabPanel>
              </TabsMap>
            </DrawerBody>
          </PerfectScrollbar>
        </DrawerContent>
      </Drawer>

      <LeafletControl position="topleft">
        <Tooltip
          hasArrow
          placement="right"
          label={isOpen ? "Cuitkan panel samping" : "Luaskan panel samping"}
        >
          <IconButton
            position="absolute"
            borderLeftRadius="none"
            top="50%"
            bg="white"
            h="16"
            label={isOpen ? "Cuitkan panel samping" : "Luaskan panel samping"}
            ml={isOpen ? "435px" : "-10px"}
            transition=".5s ease"
            onClick={onToggle}
            icon={<Icon as={ChevronLeft} />}
          />
        </Tooltip>
      </LeafletControl>
    </>
  );
};

export default DrawerMapLeft;
