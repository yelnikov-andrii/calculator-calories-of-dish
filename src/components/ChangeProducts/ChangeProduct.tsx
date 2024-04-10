import React from 'react'
import { MyForm } from './MyForm'
import { MyModal } from '../UI/MyModal'

export const ChangeProduct = () => {
  return (
    <div>
      <MyModal
        buttonTitle='Змінити продукт'
      >
        <MyForm />
      </MyModal>
    </div>
  )
}
