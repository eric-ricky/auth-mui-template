import { Icon } from "@iconify/react";
import { Stack, Button, IconButton } from "@mui/material";

const SocialAuth = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
          }}
        >
          <Icon icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </IconButton>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
          }}
        >
          <Icon
            icon="eva:facebook-fill"
            color="#1877F2"
            width={22}
            height={22}
          />
        </IconButton>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
          }}
        >
          <Icon
            icon="eva:twitter-fill"
            color="#1C9CEA"
            width={22}
            height={22}
          />
        </IconButton>
      </Stack>
    </>
  );
};

export default SocialAuth;
