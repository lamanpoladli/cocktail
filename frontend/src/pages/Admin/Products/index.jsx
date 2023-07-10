import { useEffect, useState } from "react";
import * as React from "react";
import {
  deleteProductByID,
  getAllCategories,
  getAllProducts,
} from "../../../api/categoryAndProduct";
import "./_products.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Input } from 'antd';
import { Button } from "@mui/material";

const Products = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const [search,setSearch]=useState('')
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      // console.log(res)
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    getAllProducts().then((res) => {
      // console.log(res);
      // console.log(categories);
      setProducts(res);
    });
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));


  
  return (
    <>
      <Link to={"/admin/addproduct"}>
        <button className="editbtn marginbtn">Add Product</button>
      </Link>
      <Input className="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
      <Button
                variant="contained"
                color="success"
                style={{ marginLeft: '10px',backgroundColor:"black",border:"solid"}}
                onClick={() => {
                  let sortedProducts = [...products.sort((a, b) => a.price - b.price)];
                  setProducts(sortedProducts);
                }}
              >
                Sort by Price
              </Button>
      <h2>Products</h2>
     
      <TableContainer style={{width:"90%",margin:"0 auto"}} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Id</StyledTableCell>
              <StyledTableCell align="right">Category Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {products
          .filter((item)=>{
            return search.toLocaleLowerCase() === "" ? item : item.name.toLocaleLowerCase().includes(search)
          })
          .map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
              {product._id}
              </StyledTableCell>
              <StyledTableCell align="right">{product.categoryID}</StyledTableCell>
              <StyledTableCell align="right">{product.name}</StyledTableCell>
              <StyledTableCell align="right">{product.title}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right"><Link className="editLink" to={`/admin/products/edit/${product._id}`}><button className="editbtn">Edit</button></Link></StyledTableCell>
              <StyledTableCell align="right"><button
      onClick={()=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteProductByID(product._id).then((res)=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            setProducts(products.filter((x)=>x._id !== product._id))
          }
        })
       }}
      className="editbtn">Delete</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Products;
