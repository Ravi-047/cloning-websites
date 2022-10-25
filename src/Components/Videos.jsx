import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "./";

const Videos = (props) => {
  const { video, direction } = props;
  if (!video?.length) return "Loading...";

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {video.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
