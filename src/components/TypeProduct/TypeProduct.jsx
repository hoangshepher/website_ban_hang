import React from 'react'
import { WrapperTypeProductItem } from './TypeProduct.style'

const TypeProduct = ({ name, isActive, onClick }) => {
  return (
    <WrapperTypeProductItem
      isActive={isActive}
      onClick={() => onClick(name)}
      style={{fontSize: '13px', padding: '8px', cursor: 'pointer'}}
    >
      {name}
    </WrapperTypeProductItem>
  )
}

export default TypeProduct