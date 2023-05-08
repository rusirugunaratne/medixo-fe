import { Box, Stack, TextField, Typography } from "@mui/material";
import BasicButton from "../common/BasicButton";
import backgroundImage from "../../assets/images/hospitalbeds.jpg";
import { useMemo } from "react";
import MaterialReactTable from "material-react-table";

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

function RoomBookingGrid() {
  const data = [
    {
      itemNo: "RO1",
      itemName: "Beds",
      expDue: "Every Month",
      quantity: 1,
      noOfItems: 150,
      alerts: "Maintenance Due Today",
    },
    {
      itemNo: "RO1",
      itemName: "Beds",
      expDue: "Every Month",
      quantity: 1,
      noOfItems: 150,
      alerts: "Maintenance Due Today",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "itemNo",
        header: "Item No",
        maxSize: 20,
      },
      {
        accessorKey: "itemName",
        header: "Item ATM",
        maxSize: 10,
      },
      {
        accessorKey: "expDue",
        header: "Expiry / Maintenance Due Date",
        maxSize: 10,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        maxSize: 10,
      },
      {
        accessorKey: "noOfItems",
        header: "No of items",
        maxSize: 10,
      },
      {
        header: "Alerts",
        maxSize: 30,
        Cell: ({ cell, row }) => {
          console.log(row);
          return <Typography color='red'>{row.original.alerts}</Typography>;
        },
      },
    ],
    []
  );

  return (
    <>
      <div style={styles.header}>
        <Box
          //   minWidth='100vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
          style={styles.content}
        >
          <Stack spacing={2}>
            <Typography color='#2F4FAA' variant='h4'>
              Inventory - Rooms
            </Typography>
            <Stack direction='row' spacing={2}>
              <MaterialReactTable columns={columns} data={data} />
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default RoomBookingGrid;
