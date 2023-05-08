import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/hospitalbeds.jpg";

const styles = {
  header: {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
};

function RoomMaintenanceForm() {
  return (
    <>
      <div style={styles.header}>
        <Box
          minWidth='100vh'
          display='flex'
          justifyContent='center'
          //   alignItems='center'
          minHeight='100vh'
          style={styles.content}
        >
          <Stack
            spacing={1}
            sx={{
              bgcolor: "white",
              padding: 5,
              marginTop: 5,
              marginBottom: 5,
              borderRadius: 5,
            }}
          >
            <Typography color='#2F4FAA' variant='h4'>
              Hospital Room Maintenance Form
            </Typography>
            <Typography>Patients Details</Typography>
            <Stack direction='row' spacing={2} width={500}>
              <Stack spacing={2} direction='column'>
                <TextField
                  id='outlined-basic'
                  label='Room No'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Date'
                  variant='outlined'
                  name='payersName'
                  type='date'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Requesting Officer'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Reason'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Type'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Required Materials'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
              </Stack>
              <Stack spacing={2}>
                <TextField
                  id='outlined-basic'
                  label='Routine or Not'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Estimated Completion Time'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-multiline-static'
                  label='Description'
                  multiline
                  rows={2}
                />
                <TextField
                  id='outlined-basic'
                  label='Maintenance Tech Signature'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Supervisor Signature'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <Button variant='contained'>Submit</Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default RoomMaintenanceForm;
