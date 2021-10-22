import { ReactNode } from "react";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  Icon,
  Tooltip,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Info as InfoIcon,
  Layers as LayersIcon,
  Map as LegendIcon,
} from "react-feather";

type TabsMapProps = {
  children: ReactNode;
};

const TabsMap = ({ children }: TabsMapProps) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="primary">
      <TabList
        p="5"
        position="fixed"
        top="0"
        bg="white"
        w="full"
        borderBottomWidth="1px"
        zIndex="999"
      >
        <Tab
          borderRadius="full"
          w="12"
          h="12"
          mr="3"
          _focus={{
            boxShadow: "none",
          }}
        >
          <Tooltip label="Info" placement="bottom" hasArrow>
            <Icon as={InfoIcon} />
          </Tooltip>
        </Tab>

        <Tab
          borderRadius="full"
          w="12"
          h="12"
          mr="3"
          _focus={{
            boxShadow: "none",
          }}
        >
          <Tooltip label="Layer" placement="bottom" hasArrow>
            <Icon as={LayersIcon} />
          </Tooltip>
        </Tab>

        <Tab
          borderRadius="full"
          w="12"
          h="12"
          mr="3"
          _focus={{
            boxShadow: "none",
          }}
        >
          <Tooltip label="Legenda" placement="bottom" hasArrow>
            <Icon as={LegendIcon} />
          </Tooltip>
        </Tab>

        <Tab
          borderRadius="full"
          display={{ base: "block", lg: "none" }}
          w="12"
          h="12"
          mr="3"
          ml="auto"
          _focus={{
            boxShadow: "none",
          }}
        >
          <DrawerCloseButton />
        </Tab>
      </TabList>
      <TabPanels pt="20">{children}</TabPanels>
    </Tabs>
  );
};

export default TabsMap;
