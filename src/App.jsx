import React from "react";
import "./App.css";

import { PieChart, Pie, Sector, Cell } from "recharts";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CommonTable from "./components/GridTable";
import { DataGrid } from "@mui/x-data-grid";
import Comtable from "./components/DataGridcomponent";

function App() {
  const data = [
    {
      name: "john",
      product1: 500,
      product2: 2020,
    },
    {
      name: "john1",
      product1: 2040,
      product2: 603,
    },
    {
      name: "john2",
      product1: 1000,
      product2: 3003,
    },
    {
      name: "john3",
      product1: 2200,
      product2: 603,
    },
    {
      name: "john4",
      product1: 1200,
      product2: 2003,
    },
  ];

  const data01 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
  ];
  const data02 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
  ];

  const data1 = [
    { name: "John", value: 500 },
    { name: "John1", value: 2040 },
    { name: "John2", value: 1000 },
    { name: "John3", value: 2200 },
    { name: "John4", value: 1200 },
  ];

  const data2 = [
    { name: "John", value: 2020 },
    { name: "John1", value: 603 },
    { name: "John2", value: 3003 },
    { name: "John3", value: 603 },
    { name: "John4", value: 2003 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 25 },
    { id: 6, lastName: "Melisandre", firstName: "Unknown", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      this is the dev1 line...(d1) <br />
      this is the dev1 line...(d2) <br />
      hello this is dev1 branch...hello how are you
      <Comtable />
      this is the dev2 line,,,
      <div>
        <CommonTable rows={rows} columns={columns} />
      </div>
      <br />
      {/* <div>
        <h1>Data Grid with Custom Pagination</h1>
        <Comtable
          columns={columns}
          rows={rows}
          pageSizeOptions={[5, 10, 20]} // You can customize page sizes here
          checkboxSelection
        />
      </div> */}
      <br />
      <h3 style={{ textAlign: "center" }}>barchar rechart</h3>
      <br />
      {/* <GridTable /> */}
      {/* <CommonTable
        columns={columns}
        rows={rows}
        pageSize={[5, 10, 15, 20, 25]}
        // checkboxSelection
      /> */}
      <hr />
      <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <PieChart width={600} height={500}>
            <Pie
              data={data1}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Pie
              data={data2}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="product1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="product2"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="product1"
              stroke="#8884d8"
              fill="#8884d8"
              stackId={1}
            />
            <Area
              type="monotone"
              dataKey="product2"
              stroke="#pink"
              fill="#blue"
              stackId={1}
            />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="product1" stroke="#8884d8" />
            <Line type="monotone" dataKey="product2" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="product1" stackId="a" fill="#8884d8" />
          <Bar dataKey="product2" stackId="a" fill="#82ca9d" />
        </BarChart>

        <ResponsiveContainer>
          <ScatterChart
            height={500}
            width={500}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="data" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            {/* <ZAxis type="number" range={[100]} /> */}
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter
              name="dataA"
              data={data01}
              fill="#8884d8"
              line
              shape="cross"
            />
            <Scatter
              name="dataB"
              data={data02}
              fill="#82ca9d"
              line
              shape="diamond"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default App;
