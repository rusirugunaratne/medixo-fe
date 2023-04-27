import { Box, Stack, TextField, Typography } from "@mui/material";
import BasicButton from "../common/BasicButton";
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

function RoomInventory() {
  return (
    <>
      <div style={styles.header}>
        <Box
          minWidth='100vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
          style={styles.content}
        >
          <Stack
            spacing={2}
            sx={{
              bgcolor: "white",
              padding: 5,
              marginTop: 5,
              marginBottom: 5,
              borderRadius: 5,
            }}
          >
            <Typography color='#2F4FAA' variant='h4'>
              Inventory - Rooms
            </Typography>
            <Stack direction='row' spacing={2} width={500}>
              <Stack spacing={2} direction='column'>
                <TextField
                  id='outlined-basic'
                  label='Item No'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Expiry / Maintenance Due Date'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='No. of Items'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
              </Stack>
              <Stack spacing={2}>
                <TextField
                  id='outlined-basic'
                  label='Item Name'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
                <TextField
                  id='outlined-basic'
                  label='Quantity'
                  variant='outlined'
                  name='payersName'
                  //   onChange={handleInputChange}
                />
              </Stack>
            </Stack>
            <BasicButton
              // onClick={onFormSubmit}
              text={"Submit"}
              width={150}
              backgroundColor={"primary"}
            />
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default RoomInventory;
