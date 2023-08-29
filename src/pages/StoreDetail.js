import React from 'react'
import StoreDetailCard from '../components/StoreDetailCard'
import withMainLayout from "../layout/MainLayout";
function StoreDetail() {
  return (
    <div>
        <StoreDetailCard/>
    </div>
  )
}

export default withMainLayout(StoreDetail);