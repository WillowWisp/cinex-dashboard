export interface Discount {
  id: string,
  name: string,
  discount: number,
  expire: string,
  active: boolean,
}

export interface DiscountInput {
  name: string,
  discount: number,
  expire: string,
}

export interface DiscountValidation {
	name: string,
	discount: string,
}
