// @flow
import * as React from 'react'

type Props = {
  min: number,
  product: { qty: number, },
  useCart: boolean,
  updateProduct: (product: {}) => void,
  updateInventoryProduct: (product: {}) => void
}

class QuantityField extends React.Component<Props, void> {
  
  handleInputChange = (event: SyntheticInputEvent<HTMLButtonElement>) => {
    const { value } = (event.currentTarget: HTMLButtonElement)
    const { product, useCart, updateProduct, updateInventoryProduct } = this.props
    const newProduct = {...product, qty: value}

    if (useCart) {
      updateProduct(newProduct)
    } else {
      updateInventoryProduct(newProduct)
    }

    // this.setState({ value })
  }

  render() {
    const { min = "1", product } = this.props
    const { qty = 1 } =  product

    return (
      <input
        className="product-qty"
        type="number"
        min={min}
        value={qty}
        onChange={this.handleInputChange}
        />: React.Element<'input'>
        )
      }
    }


export default QuantityField
