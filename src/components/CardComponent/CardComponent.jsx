import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import logo from '../../assets/images/logo.png'
import {
  StarFilled
} from '@ant-design/icons';

const CardComponent = ({ product }) => {
  const {
    image = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    name = "Iphone",
    rating = 4.96,
    sold = "1000+",
    price = "1.000.000đ",
    discount = "-5%"
  } = product || {};

  return (
    <WrapperCardStyle
      hoverable
      styles={{
        header: { width: '200px', height: '200px' },
        body: { padding: '10px' }
      }}
      style={{ width: 200 }}
      cover={<img alt="example" src={image} />}
    >
      <img alt="Official" src={logo} style={{ width:'68px', height: '14px', position: 'absolute', top: -1, left: -1, borderTopLeftRadius:'3px'}}/>
      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight:'4px'}}>
          <span>{rating}</span> <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54'}}/>
        </span>
        <WrapperStyleTextSell> | Đã bán {sold}</WrapperStyleTextSell>
      </WrapperReportText>
        <WrapperPriceText >
          <span style={{ marginRight:'8px'}}>{price}</span>
        <WrapperDiscountText>{discount}</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent