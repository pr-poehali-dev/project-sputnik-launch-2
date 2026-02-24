import { createContext, useContext, useState } from "react"
import { TopupModal } from "./topup-modal"

interface TopupContextType {
  openTopup: (defaultAmount?: string) => void
}

const TopupContext = createContext<TopupContextType>({ openTopup: () => {} })

export function useTopup() {
  return useContext(TopupContext)
}

export function TopupProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [defaultAmount, setDefaultAmount] = useState<string | undefined>()

  const openTopup = (amount?: string) => {
    setDefaultAmount(amount)
    setOpen(true)
  }

  return (
    <TopupContext.Provider value={{ openTopup }}>
      {children}
      <TopupModal open={open} onOpenChange={setOpen} defaultAmount={defaultAmount} />
    </TopupContext.Provider>
  )
}
