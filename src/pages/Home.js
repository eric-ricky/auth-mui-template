import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
//////////////////////////////////////

const Home = ({ setAuth }) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box sx={{ mb: 5, mt: -10 }}>
        <Logo />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "-4rem",
          fontSize: "5rem",
          fontWeight: 700,
          letterSpacing: "-0.5rem",
          display: "inline-block",
          whiteSpace: "nowrap",
          [theme.breakpoints.down("sm")]: {
            fontSize: "4rem",
            letterSpacing: "-0.4rem",
          },
        }}
        gutterBottom
      >
        Welcome Back
      </Typography>

      <Button size="large" variant="contained" onClick={() => setAuth(false)}>
        Log out
      </Button>
    </Container>
  );
};

// const comp = () => (
//   <motion.span
//     variants={stagger}
//     initial="initial"
//     animate="animate"
//     style={{
//       textAlign: "center",
//       marginTop: 4,
//       padding: 4,
//       fontSize: "8rem",
//       fontWeight: 500,
//       position: "relative",
//       letterSpacing: "-0.8rem",
//       display: "inline-block",
//       whiteSpace: "nowrap",
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "4rem",
//         letterSpacing: "-0.4rem",
//         paddin: 0,
//       },
//     }}
//   >
//     {[..."Welcome Back"].map((l, i) => (
//       <motion.span variants={animation} key={i}>
//         {l}
//       </motion.span>
//     ))}
//   </motion.span>
// );
export default Home;
