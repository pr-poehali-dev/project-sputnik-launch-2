import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

const TELEGRAM_BOT_URL = "https://t.me/Dotacsgo5566bot"

interface TopupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultAmount?: string
}

const PRESET_AMOUNTS = ["500", "1000", "2000", "5000", "10000"]

export function TopupModal({ open, onOpenChange, defaultAmount }: TopupModalProps) {
  const [steamUrl, setSteamUrl] = useState("")
  const [amount, setAmount] = useState(defaultAmount || "")
  const [urlError, setUrlError] = useState("")
  const [amountError, setAmountError] = useState("")

  const validateAndSubmit = () => {
    let valid = true

    if (!steamUrl.trim()) {
      setUrlError("Введите ссылку на ваш Steam-профиль")
      valid = false
    } else {
      setUrlError("")
    }

    const numAmount = Number(amount)
    if (!amount) {
      setAmountError("Введите или выберите сумму")
      valid = false
    } else if (numAmount < 100) {
      setAmountError("Минимальная сумма — 100 ₽")
      valid = false
    } else if (numAmount > 50000) {
      setAmountError("Максимальная сумма — 50 000 ₽")
      valid = false
    } else {
      setAmountError("")
    }

    if (!valid) return

    window.open(TELEGRAM_BOT_URL, "_blank")
  }

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setSteamUrl("")
        setAmount(defaultAmount || "")
        setUrlError("")
        setAmountError("")
      }, 300)
    }
    onOpenChange(open)
  }

  const bonus = Number(amount) >= 10000 ? 7 : Number(amount) >= 2000 ? 3 : 0
  const bonusAmount = bonus > 0 ? Math.round((Number(amount) * bonus) / 100) : 0

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[440px] bg-background border-border p-0 overflow-hidden rounded-2xl">
        <div className="flex flex-col">
          <div className="p-6 pb-0">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Gamepad2" size={18} className="text-primary" />
                </div>
                <DialogTitle className="text-foreground text-xl font-semibold">
                  Пополнение Steam
                </DialogTitle>
              </div>
              <DialogDescription className="text-muted-foreground text-sm">
                Деньги поступят на ваш аккаунт в течение 5 минут
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Ссылка на Steam-профиль
              </label>
              <Input
                placeholder="https://steamcommunity.com/id/ваш_ник"
                value={steamUrl}
                onChange={(e) => { setSteamUrl(e.target.value); setUrlError("") }}
                className="bg-muted/30 border-border text-foreground placeholder:text-muted-foreground"
              />
              {urlError && (
                <p className="text-xs text-red-400 flex items-center gap-1">
                  <Icon name="AlertCircle" size={12} />
                  {urlError}
                </p>
              )}
              <p className="text-xs text-muted-foreground">Профиль должен быть публичным</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">Сумма пополнения</label>
              <div className="flex flex-wrap gap-2">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => { setAmount(preset); setAmountError("") }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                      amount === preset
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/30 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {Number(preset).toLocaleString("ru")} ₽
                  </button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Или введите свою сумму"
                value={amount}
                onChange={(e) => { setAmount(e.target.value); setAmountError("") }}
                className="bg-muted/30 border-border text-foreground placeholder:text-muted-foreground"
                min={100}
                max={50000}
              />
              {amountError && (
                <p className="text-xs text-red-400 flex items-center gap-1">
                  <Icon name="AlertCircle" size={12} />
                  {amountError}
                </p>
              )}
            </div>

            {bonus > 0 && amount && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <Icon name="Gift" size={16} className="text-primary" />
                <span className="text-sm text-foreground">
                  Бонус <span className="font-semibold text-primary">+{bonus}%</span> — вы получите дополнительно{" "}
                  <span className="font-semibold text-primary">{bonusAmount.toLocaleString("ru")} ₽</span>
                </span>
              </div>
            )}

            <Button
              onClick={validateAndSubmit}
              className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium py-3"
            >
              Перейти к оплате в Telegram
              <Icon name="ArrowRight" size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
