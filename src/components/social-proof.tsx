const PAYMENT_METHODS = [
  "СБП",
  "Visa / Mastercard",
  "Mir Pay",
  "ЮMoney",
  "QIWI",
  "Tinkoff",
  "SberPay",
  "Криптовалюта",
]

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Принимаем оплату через
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-[700px] mx-auto px-4">
        {PAYMENT_METHODS.map((method) => (
          <span
            key={method}
            className="px-4 py-2 rounded-full border border-border text-muted-foreground text-sm font-medium bg-muted/20 whitespace-nowrap"
          >
            {method}
          </span>
        ))}
      </div>
    </section>
  )
}
