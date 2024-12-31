// import React, { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box } from "@mui/material";

// const Comtable = ({
//   columns,
//   rows,
//   pageSizeOptions = [5, 10, 20],
//   checkboxSelection = false,
// }) => {
//   const [paginationModel, setPaginationModel] = useState({
//     page: 0,
//     pageSize: pageSizeOptions[0],
//   });

//   const handlePaginationChange = (model) => {
//     setPaginationModel(model);
//   };

//   return (
//     <Box sx={{ height: "auto", width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         paginationModel={paginationModel}
//         onPaginationModelChange={handlePaginationChange}
//         pageSizeOptions={pageSizeOptions}
//         checkboxSelection={checkboxSelection}
//       />
//     </Box>
//   );
// };

// // export default Comtable;
// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Box,
//   Container,
//   Toolbar,
//   Typography,
//   Button,
//   ButtonGroup,
// } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First Name", width: 120 },
//   { field: "lastName", headerName: "Last Name", width: 120 },
//   { field: "age", headerName: "Age", flex: 1 },
// ];

// const CustomPagination = ({ page, pageSize, total, onPageChange }) => {
//   const totalPages = Math.ceil(total / pageSize);

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
//       <ButtonGroup variant="outlined">
//         {/* First Page */}
//         <Button onClick={() => onPageChange(0)} disabled={page === 0}>
//           First
//         </Button>

//         {/* Previous Page */}
//         <Button onClick={() => onPageChange(page - 1)} disabled={page === 0}>
//           Previous
//         </Button>

//         {/* Current Page Info */}
//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           px={2}
//           fontSize="16px"
//           fontWeight="bold"
//         >
//           Page {page + 1} of {totalPages}
//         </Box>

//         {/* Next Page */}
//         <Button
//           onClick={() => onPageChange(page + 1)}
//           disabled={page + 1 >= totalPages}
//         >
//           Next
//         </Button>

//         {/* Last Page */}
//         <Button
//           onClick={() => onPageChange(totalPages - 1)}
//           disabled={page + 1 >= totalPages}
//         >
//           Last
//         </Button>
//       </ButtonGroup>
//     </Box>
//   );
// };

// function Comtable() {
//   const [pageState, setPageState] = useState({
//     isLoading: false,
//     data: [],
//     total: 300, // Total rows available
//     page: 0, // Current page (zero-based for DataGrid)
//     pageSize: 10, // Rows per page
//   });

//   // Fetch data from the server
//   useEffect(() => {
//     const fetchData = async () => {
//       setPageState((old) => ({ ...old, isLoading: true })); // Show loading indicator

//       try {
//         const response = await fetch(
//           `https://dummyjson.com/users?skip=${
//             pageState.page * pageState.pageSize
//           }&limit=${pageState.pageSize}`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const json = await response.json();

//         // Update the state with the fetched data
//         setPageState((old) => ({
//           ...old,
//           isLoading: false,
//           data: json.users || [], // Update rows
//           total: json.total || 300, // Mock total if not provided
//         }));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setPageState((old) => ({ ...old, isLoading: false })); // Hide loading indicator on error
//       }
//     };

//     fetchData();
//   }, [pageState.page, pageState.pageSize]);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setPageState((old) => ({
//       ...old,
//       page: Math.max(
//         0,
//         Math.min(newPage, Math.ceil(old.total / old.pageSize) - 1)
//       ), // Keep page within bounds
//     }));
//   };

//   return (
//     <Box>
//       {/* AppBar for the header */}
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             Custom Pagination Demo
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Table container */}
//       <Container style={{ marginTop: 100, marginBottom: 100 }}>
//         <DataGrid
//           rows={pageState.data} // Rows for the current page
//           rowCount={pageState.total} // Total rows for pagination
//           loading={pageState.isLoading} // Loading state
//           rowsPerPageOptions={[10]} // Fixed rows per page for simplicity
//           paginationMode="server" // Server-side pagination mode
//           columns={columns} // Table columns
//           hideFooterPagination // Hide default pagination controls
//         />

//         {/* Custom Pagination Component */}
//         <CustomPagination
//           page={pageState.page}
//           pageSize={pageState.pageSize}
//           total={pageState.total}
//           onPageChange={handlePageChange}
//         />
//       </Container>
//     </Box>
//   );
// }

// export default Comtable;

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 120 },
  { field: "lastName", headerName: "Last Name", width: 120 },
  { field: "age", headerName: "Age", flex: 1 },
];

const CustomPagination = ({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      {/* Page Navigation */}
      <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
        <Button onClick={() => onPageChange(0)} disabled={page === 0}>
          First
        </Button>
        <Button onClick={() => onPageChange(page - 1)} disabled={page === 0}>
          Previous
        </Button>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={2}
          fontSize="16px"
          fontWeight="bold"
        >
          Page {page + 1} of {totalPages}
        </Box>
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={page + 1 >= totalPages}
        >
          Next
        </Button>
        <Button
          onClick={() => onPageChange(totalPages - 1)}
          disabled={page + 1 >= totalPages}
        >
          Last
        </Button>
      </ButtonGroup>

      {/* Rows Per Page Selection */}
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Rows per page</InputLabel>
        <Select
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
          label="Rows per page"
        >
          {[10, 20, 30, 100, 150].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

function Comtable() {
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 300, // Total rows available
    page: 0, // Current page (zero-based)
    pageSize: 10, // Rows per page
  });

  // Fetch data from the server whenever page or pageSize changes
  useEffect(() => {
    const fetchData = async () => {
      setPageState((old) => ({ ...old, isLoading: true })); // Show loading indicator

      try {
        const response = await fetch(
          `https://dummyjson.com/users?skip=${
            pageState.page * pageState.pageSize
          }&limit=${pageState.pageSize}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();

        // Update the state with the fetched data
        setPageState((old) => ({
          ...old,
          isLoading: false,
          data: json.users || [], // Update rows
          total: json.total || 300, // Mock total if not provided
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
        setPageState((old) => ({ ...old, isLoading: false })); // Hide loading indicator on error
      }
    };

    fetchData();
  }, [pageState.page, pageState.pageSize]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPageState((old) => ({
      ...old,
      page: Math.max(
        0,
        Math.min(newPage, Math.ceil(old.total / old.pageSize) - 1)
      ), // Keep page within bounds
    }));
  };

  // Handle page size change
  const handlePageSizeChange = (newPageSize) => {
    setPageState((old) => ({
      ...old,
      pageSize: newPageSize,
      page: 0, // Reset to the first page when page size changes
    }));
  };

  return (
    <Box>
      {/* AppBar for the header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Custom Pagination with Rows per Page
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Table container */}
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <DataGrid
          rows={pageState.data} // Rows for the current page
          rowCount={pageState.total} // Total rows for pagination
          loading={pageState.isLoading} // Loading state
          paginationMode="server" // Server-side pagination mode
          columns={columns} // Table columns
          hideFooterPagination // Hide default pagination controls
        />

        {/* Custom Pagination Component */}
        <CustomPagination
          page={pageState.page}
          pageSize={pageState.pageSize}
          total={pageState.total}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </Container>
    </Box>
  );
}

export default Comtable;
