import React, { useState } from "react"; // Import useState
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { TextField, Button, Container, Typography, Box, Paper, Alert, CircularProgress, Link } from "@mui/material"; // Import CircularProgress
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // Import LockOutlinedIcon
// import Login from "./Components/Login";
import "../Style/styles.css";

const Login = () => {
    const [username, setUsername] = useState(""); // Define username
    const [password, setPassword] = useState(""); // Define password
    const [error, setError] = useState(""); // Define error
    const [loading, setLoading] = useState(false); // Define loading
    const navigate = useNavigate(); // Define navigate

const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
    try {
        const response = await axios.post("https://localhost:7071/api/Login/login", {
            username,
            password,
        });
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
    } catch (error) {
        setError("Invalid username or password");
    } finally {
        setLoading(false);
    }
};

const handleRegisterRedirect = () => {
    navigate("/register"); // Redirect to the registration page
};

return (
    <Container component="main" maxWidth="xs">
        <Paper
            elevation={3}
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
            }}
        >
            <LockOutlinedIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 2, width: "100%" }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Username or Email"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        {error}
                    </Alert>
                )}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{ mt: 3, mb: 2 }}
                >
                    {loading ? <CircularProgress size={24} /> : "Sign In"}
                </Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        Don't have an account?{" "}
                        <Link
                            component="button"
                            variant="body2"
                            onClick={handleRegisterRedirect}
                            sx={{ color: "primary.main" }}
                        >
                            Register here
                        </Link>
                </Typography>
            </Box>
        </Paper>
    </Container>
);
};

export default Login;



// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError(""); // Clear previous errors
//         try {
//             const response = await axios.post("https://localhost:7071/api/Login/login", {
//                 username,
//                 password,
//             });
//             localStorage.setItem("token", response.data.token); // Store the token
//             navigate("/dashboard"); // Redirect to a protected route
//         } catch (error) {
//             setError("Invalid username or password");
//             console.error("Login failed:", error);
//         }
//     };

//     return (
//         <Container component="main" maxWidth="xs">
//             <Paper
//                 elevation={3}
//                 sx={{
//                     marginTop: 8,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     padding: 3,
//                 }}
//             >
//                 <LockOutlinedIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
//                 <Typography component="h1" variant="h5">
//                     Sign in
//                 </Typography>
//                 <Box component="form" onSubmit={handleLogin} sx={{ mt: 2, width: "100%" }}>
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         label="Username"
//                         autoFocus
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     {error && (
//                         <Alert severity="error" sx={{ mt: 2 }}>
//                             {error}
//                         </Alert>
//                     )}
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Sign In
//                     </Button>
//                 </Box>
//             </Paper>
//         </Container>
//     );
// };

// export default Login;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [Username, setUsername] = useState("");
//     const [Password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("https://localhost:7071/api/Login/login", {
//                 Username,
//                 Password,
//             });
//             localStorage.setItem("token", response.data.token); // Store the token
//             navigate("/dashboard"); // Redirect to a protected route
//         } catch (error) {
//             console.error("Login failed:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;