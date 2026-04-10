import { useState } from 'react'

export function useInsuranceState() {
  const [state, setState] = useState({
    step: 1,
    totalSteps: 9,
    name: '김악사',
    termsAll: false,
    terms: [false, false, false, false, false],
    selectedVehicle: 0,
    vehiclePlate: '',
    vehicleType: '',
    driverScope: '부부',
    coverages: [true, false, true],
    payMethod: '일반카드',
    cardNumber: ['1234', '5678', '9101', '1234'],
    toggles: [false, true, false],
  })

  const setField = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }))
  }
 const toggleAll = () => {
    setState(prev => {
      const nextTermsAll = !prev.termsAll
      return {
        ...prev,
        termsAll: nextTermsAll,
        terms: prev.terms.map(() => nextTermsAll),
      }
    })
  }

  const toggleTerm = (index) => {
    setState(prev => {
      const nextTerms = [...prev.terms]
      nextTerms[index] = !nextTerms[index]
      return {
        ...prev,
        terms: nextTerms,
        termsAll: nextTerms.every(Boolean),
      }
    })
  }

  const selectVehicle = (index) => {
    setState(prev => ({ ...prev, selectedVehicle: index }))
  }
 const updateCard = (index, value) => {
    setState(prev => {
      const nextCardNumber = [...prev.cardNumber]
      nextCardNumber[index] = value
      return { ...prev, cardNumber: nextCardNumber }
    })
  }

  const toggleSpecial = (index) => {
    setState(prev => {
      const nextToggles = [...prev.toggles]
      nextToggles[index] = !nextToggles[index]
      return { ...prev, toggles: nextToggles }
    })
  }

  const next = () => {
    setState(prev => {
      const nextStep = Math.min(prev.step + 1, prev.totalSteps)
      return {
        ...prev,
        step: nextStep,
        ...(nextStep === 7
          ? { termsAll: false, terms: [false, false, false, false, false] }
          : {}),
      }
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

   const prev = () => {
    setState(prevState => ({
      ...prevState,
      step: Math.max(prevState.step - 1, 1),
    }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setState(prev => ({
      ...prev,
      step: 1,
      termsAll: false,
      terms: [false, false, false, false, false],
    }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    state,
    actions: {
      setField,
      toggleAll,
      toggleTerm,
      selectVehicle,
      updateCard,
      toggleSpecial,
      next,
      prev,
      goHome,
    },
  }
}