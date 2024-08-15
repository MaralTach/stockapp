import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button, IconButton, } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { blue, red } from "@mui/material/colors"
import { Formik, Form } from "formik"
import { object, string } from "yup"
// import { login } from "../services/useApiRequest"
import useApiRequest from "../services/useApiRequest"
// import bgImage from "../assets/bottom-removebg-preview.png"


const Login = () => {
  const { login } = useApiRequest()

  const loginSchema = object({
    email: string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: string()
      .required("Password ")
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/\d+/, "Password must contain at least one number")
      .matches(/[a-z]+/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]+/, "Password must contain at least one uppercase letter.")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter(@$!%*?&) içermelidir."
      ),
  })


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Container maxWidth="lg" 
  >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
         
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}   >
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //TODO
              //? POST (Login)
              login(values)
              //? Toastify
              //? Global state güncellenmesi
              //? form resetleme
              actions.resetForm()
              actions.setSubmitting(false) //? isSubmitting
              //? navigate
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>

        <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography sx={{ color: blue[500], display: 'inline' }}>
              Testing email: admin@gmail.com
            </Typography>
            <IconButton onClick={() => copyToClipboard('admin@gmail.com')} size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography sx={{ color: blue[500], display: 'inline' }}>
              Testing password: Admin*1234
            </Typography>
            <IconButton onClick={() => copyToClipboard('Admin*1234')} size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Box>

          <Container>
            <img src={image} alt="img" />
            
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
