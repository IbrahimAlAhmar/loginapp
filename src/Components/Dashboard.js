import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Container,
    Typography,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

const Dashboard = () => {
    const navigate = useNavigate(); // Define navigate
    const [open, setOpen] = useState(false); // State for the dialog

    // Check if the user is authenticated
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/"); // Redirect to login if no token is found
        }
    }, [navigate]);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token
        navigate("/"); // Redirect to the login page
    };

    // Open the confirmation dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Close the confirmation dialog
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4">
                    Dashboard
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Welcome to the dashboard! You are now logged in.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickOpen} // Open the dialog
                    sx={{ mt: 4 }}
                >
                    Logout
                </Button>

                {/* Confirmation Dialog */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Confirm Logout</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to log out?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleLogout} color="secondary" autoFocus>
                            Logout
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};

export default Dashboard;