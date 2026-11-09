import { MessageCircle, Phone } from 'lucide-react'
import { useLang } from '../i18n'

interface PhoneContactsProps {
  variant?: 'dark' | 'light'
}

const contacts = [
  { provider: 'Orange', number: '+237 695 584 290', dial: '+237695584290' },
  { provider: 'MTN', number: '+237 654 773 746', dial: '+237654773746' },
]

const PhoneContacts = ({ variant = 'light' }: PhoneContactsProps) => {
  const { t } = useLang()
  const isDark = variant === 'dark'

  return (
    <section
      aria-label={t('contact.phoneWhatsApp')}
      className={`rounded-2xl p-4 ${isDark ? '' : 'bg-white'}`}
      style={{
        background: isDark ? '#242321' : '#FFFEFC',
        border: isDark ? '1px solid #898680' : '1px solid #D8CBB8',
        boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.24)' : '0 1px 16px rgba(0,0,0,0.06)',
      }}
    >
      <h3
        className="mb-3 text-xs font-bold uppercase tracking-wider"
        style={{ color: isDark ? '#FFFEFC' : '#6b7280' }}
      >
        {t('contact.phoneWhatsApp')}
      </h3>
      <div className="space-y-3">
        {contacts.map(({ provider, number, dial }) => (
          <div
            key={provider}
            className="flex flex-wrap items-center justify-between gap-2"
          >
            <div className="min-w-[125px]">
              <p
                className="text-xs font-bold"
                style={{ color: isDark ? '#FFFEFC' : '#17211d' }}
              >
                {provider}
              </p>
              <p
                className="text-[11px]"
                style={{ color: isDark ? '#D8CBB8' : '#6b7280' }}
              >
                {number}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${dial}`}
                aria-label={`${t('contact.call')} ${provider}`}
                className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[11px] font-semibold transition-colors"
                style={{
                  background: '#F5F1E9',
                  color: '#242321',
                }}
              >
                <Phone className="h-3.5 w-3.5" />
                {t('contact.call')}
              </a>
              <a
                href={`https://wa.me/${dial.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('contact.whatsapp')} ${provider}`}
                className="inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[11px] font-semibold transition-colors"
                style={{
                  background: isDark ? '#123B27' : '#eaf8ef',
                  color: isDark ? '#B7F7CE' : '#16803c',
                  border: isDark ? '1px solid #2F855A' : undefined,
                }}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {t('contact.whatsapp')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PhoneContacts
