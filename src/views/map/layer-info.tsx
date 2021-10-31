import { Box, chakra, Icon, Image, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Info as InfoIcon } from "react-feather";

const LayerInfo = () => {
  const [loading, setLoading] = useState(false);
  const [infoLayer, setInfoLayer] = useState(null);
  const [tipeInfo, setTipeInfo] = useState();

  useEffect(() => {}, []);

  if (!infoLayer) {
    return (
      <Box mt="1">
        <Stack spacing={5} mx="auto" mt="36" justify="center" align="center">
          <Image src={NoDataMap} alt="Empty" />
          <Stack direction="row" spacing={3} align="center" color="gray.500">
            <Icon as={InfoIcon} />
            <chakra.p>Silahkan pilih map untuk melihat data</chakra.p>
          </Stack>
        </Stack>
      </Box>
    );
  }

  switch (tipeInfo) {
    default:
      return <></>;
  }
};

export default LayerInfo;
