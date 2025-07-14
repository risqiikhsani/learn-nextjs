"use client"

import React from 'react'
import { DataTable } from './data-table'
import { columns, product } from './columns'



export default function page() {

    const [data, setData] = React.useState<product[]>([])

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,category,stock&sort=price')
        const json = await res.json()
        setData(json.products)
    }

    React.useEffect(() => {
        fetchData()
    }, [])

  return (
    <div>
        <DataTable columns={columns} data={data} />
    </div>
  )
}
