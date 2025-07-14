"use client";

import React from "react";
import { DataTable } from "./data-table";
import { columns, product } from "./columns";

interface ProductsResponse {
  products: product[];
  total: number;
  skip: number;
  limit: number;
}

export default function page() {
  const [data, setData] = React.useState<product[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const itemsPerPage = 10;

  const [rowSelection, setRowSelection] = React.useState({});

  const fetchData = async (page: number = 0) => {
    setIsLoading(true);
    try {
      const skip = page * itemsPerPage;
      const res = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}&select=title,price,category,stock&sort=price`
      );
      const json: ProductsResponse = await res.json();
      setData(json.products);
      setTotalPages(Math.ceil(json.total / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setRowSelection({}); // Reset row selection on page change
    fetchData(newPage);
  };

  React.useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <div>
      <p>
        Selected IDs:{" "}
        {Object.keys(rowSelection)
          .filter((key) => rowSelection[key])
          .map((key) => {
            const rowIndex = Number(key);
            const row = data[rowIndex];
            return row ? row.id : null;
          })
          .filter(Boolean)
          .join(", ")}
      </p>
      <DataTable
        columns={columns}
        data={data}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isLoading={isLoading}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </div>
  );
}
