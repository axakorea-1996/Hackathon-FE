import './styles/app.css'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import BottomBar from './components/BottomBar'
import { useInsuranceState } from './hooks/useInsuranceState'
import Step1Terms from './steps/Step1Terms'
import Step2VehicleSelect from './steps/Step2VehicleSelect'
import Step3VehicleConfirm from './steps/Step3VehicleConfirm'
import Step4Driver from './steps/Step4Driver'
import Step5DesignComplete from './steps/Step5DesignComplete'
import Step6SpecialCoverage from './steps/Step6SpecialCoverage'
import Step7InsuranceConfirm from './steps/Step7InsuranceConfirm'
import Step8Payment from './steps/Step8Payment'
import Step9Complete from './steps/Step9Complete'

function App() {
  const { state, actions } = useInsuranceState()

  const stepComponents = {
    1: <Step1Terms state={state} actions={actions} />,
    2: <Step2VehicleSelect state={state} actions={actions} />,
    3: <Step3VehicleConfirm state={state} actions={actions} />,
    4: <Step4Driver state={state} actions={actions} />,
    5: <Step5DesignComplete state={state} actions={actions} />,
    6: <Step6SpecialCoverage state={state} actions={actions} />,
    7: <Step7InsuranceConfirm state={state} actions={actions} />,
    8: <Step8Payment state={state} actions={actions} />,
    9: <Step9Complete state={state} actions={actions} />,
  }

  return (
    <>
      <Header />
      <ProgressBar currentStep={state.step} totalSteps={state.totalSteps} />

      <main className="main">
        {stepComponents[state.step]}
      </main>

      <BottomBar state={state} actions={actions} />
    </>
  )
}

export default App