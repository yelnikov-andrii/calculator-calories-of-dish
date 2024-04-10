import { createSlice } from '@reduxjs/toolkit';
import { saveProductsToLocaleStorage } from '../helpers/saveDataToLocaleStorage';

export interface ProductInterface {
  id: number;
  name: string;
  mass: number;
  protein: number;
  lipids: number;
  carbs: number;
}

export interface DishInterface {
  id: number;
  name: string;
  products: ProductInterface[]; 
}

const initialState = {
  dishes: [] as any,
  dishIdToChange: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addDish: (state, action: any) => {
      state.dishes = [...state.dishes, action.payload];
    },
    setDishIdToChange: (state, action) => {
      state.dishIdToChange = action.payload;
    },
    deleteDish: (state, action) => {
      state.dishes = state.dishes.filter((dish: any) => dish.id !== action.payload);
      saveProductsToLocaleStorage(state.dishes);
    },
    getProducts: (state, action) => {
      state.dishes = action.payload;
    },
    setProteinsValueInProduct: (state, action) => {
      const updatedDishes = state.dishes.map((dish: DishInterface) => {
        if (dish.id === state.dishIdToChange) {
          const updatedProducts = dish.products.map((product: ProductInterface) => {
            if (product.id === action.payload.productId) {
              return {
                ...product,
                proteins: action.payload.proteins
              };
            }
            return product;
          });
          return {
            ...dish,
            products: updatedProducts
          };
        }
        return dish;
      });
      
      state.dishes = updatedDishes;
      saveProductsToLocaleStorage(state.dishes);
    },
    setMassValueInProduct: (state, action) => {
      const updatedDishes = state.dishes.map((dish: DishInterface) => {
        if (dish.id === state.dishIdToChange) {
          const updatedProducts = dish.products.map((product: ProductInterface) => {
            if (product.id === action.payload.productId) {
              return {
                ...product,
                mass: action.payload.mass
              };
            }
            return product;
          });
          return {
            ...dish,
            products: updatedProducts
          };
        }
        return dish;
      });
      
      state.dishes = updatedDishes;
      saveProductsToLocaleStorage(state.dishes);
    },
    addProduct: (state, action) => {
      const updatedDishes = state.dishes.map((dish: DishInterface) => {
        if (dish.id === state.dishIdToChange) {
          return {
            ...dish,
            products: [...dish.products, action.payload]
          };
        }
        return dish;
      });
      
      state.dishes = updatedDishes;
      saveProductsToLocaleStorage(state.dishes);
    },
    deleteProduct: (state, action) => {
      const updatedDishes = state.dishes.map((dish: DishInterface) => {
        if (dish.id === state.dishIdToChange) {
          return {
            ...dish,
            products: [...dish.products].filter(product => product.id !== action.payload)
          };
        }
        return dish;
      });
      
      state.dishes = updatedDishes;
      saveProductsToLocaleStorage(state.dishes);
    },
  }
})

export const { addDish, setDishIdToChange, deleteDish, getProducts, setProteinsValueInProduct, addProduct, setMassValueInProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;