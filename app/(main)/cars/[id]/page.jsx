import React from 'react'

const CarPage = async ({ params }) => {

    const { id } = await params;
  return (
    <div>carPage: {id}</div>
  )
}

export default CarPage;