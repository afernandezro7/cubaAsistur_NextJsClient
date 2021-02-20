
export const languageConfig = (language)=>{

    switch (language) {
        case 'ES':
            return spanish;
        case 'US':
            return english;
        case 'FR':
          return french;
        case 'IT':
          return italiany;
        default:
            return english;
    }
}

const spanish = {
    "lang": {
      "locale": "es_ES",
      "placeholder": "Select date",
      "rangePlaceholder": ["Fecha Salida", "Fecha de Arribo"],
      "today": "Hoy",
      "now": "Ahora",
      "backToToday": "Back to today",
      "ok": "Ok",
      "clear": "Limpiar",
      "month": "Mes",
      "year": "Año",
      "timeSelect": "Select time",
      "dateSelect": "Selecciona Fecha",
      "monthSelect": "Selecciona el mes",
      "yearSelect": "Selecciona el año",
      "decadeSelect": "Selecciona la década",
      "yearFormat": "YYYY",
      "dateFormat": "D/M/YYYY",
      "dayFormat": "D",
      "dateTimeFormat": "D/M/YYYY HH:mm:ss",
      "monthFormat": "MMMM",
      "monthBeforeYear": true,
      "previousMonth": "Previous month (PageUp)",
      "nextMonth": "Next month (PageDown)",
      "previousYear": "Last year (Control + left)",
      "nextYear": "Next year (Control + right)",
      "previousDecade": "Last decade",
      "nextDecade": "Next decade",
      "previousCentury": "Last century",
      "nextCentury": "Next century"
    },
    "timePickerLocale": {
      "placeholder": "Select time"
    },
    "dateFormat": "YYYY-MM-DD",
    "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
    "weekFormat": "YYYY-wo",
    "monthFormat": "YYYY-MM"
}    


const english = {
    "lang": {
      "locale": "en_EN",
      "placeholder": "Select date",
      "rangePlaceholder": ["Departure Date", "Arrive Date"],
      "today": "Hoy",
      "now": "Ahora",
      "backToToday": "Back to today",
      "ok": "Ok",
      "clear": "Limpiar",
      "month": "Mes",
      "year": "Año",
      "timeSelect": "Select time",
      "dateSelect": "Selecciona Fecha",
      "monthSelect": "Selecciona el mes",
      "yearSelect": "Selecciona el año",
      "decadeSelect": "Selecciona la década",
      "yearFormat": "YYYY",
      "dateFormat": "D/M/YYYY",
      "dayFormat": "D",
      "dateTimeFormat": "D/M/YYYY HH:mm:ss",
      "monthFormat": "MMMM",
      "monthBeforeYear": true,
      "previousMonth": "Previous month (PageUp)",
      "nextMonth": "Next month (PageDown)",
      "previousYear": "Last year (Control + left)",
      "nextYear": "Next year (Control + right)",
      "previousDecade": "Last decade",
      "nextDecade": "Next decade",
      "previousCentury": "Last century",
      "nextCentury": "Next century"
    },
    "timePickerLocale": {
      "placeholder": "Select time"
    },
    "dateFormat": "YYYY-MM-DD",
    "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
    "weekFormat": "YYYY-wo",
    "monthFormat": "YYYY-MM"
}  

const french = {
  "lang": {
    "locale": "fr_FR",
    "placeholder": "Select date",
    "rangePlaceholder": ["Date de départ", "Date d'arrivée"],
    "today": "Hoy",
    "now": "Ahora",
    "backToToday": "Back to today",
    "ok": "Ok",
    "clear": "Limpiar",
    "month": "Mes",
    "year": "Año",
    "timeSelect": "Select time",
    "dateSelect": "Selecciona Fecha",
    "monthSelect": "Selecciona el mes",
    "yearSelect": "Selecciona el año",
    "decadeSelect": "Selecciona la década",
    "yearFormat": "YYYY",
    "dateFormat": "D/M/YYYY",
    "dayFormat": "D",
    "dateTimeFormat": "D/M/YYYY HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  },
  "dateFormat": "YYYY-MM-DD",
  "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
  "weekFormat": "YYYY-wo",
  "monthFormat": "YYYY-MM"
}   

const italiany = {
  "lang": {
    "locale": "it_IT",
    "placeholder": "Select date",
    "rangePlaceholder": ["Data di partenza", "Data di arrivo"],
    "today": "Hoy",
    "now": "Ahora",
    "backToToday": "Back to today",
    "ok": "Ok",
    "clear": "Limpiar",
    "month": "Mes",
    "year": "Año",
    "timeSelect": "Select time",
    "dateSelect": "Selecciona Fecha",
    "monthSelect": "Selecciona el mes",
    "yearSelect": "Selecciona el año",
    "decadeSelect": "Selecciona la década",
    "yearFormat": "YYYY",
    "dateFormat": "D/M/YYYY",
    "dayFormat": "D",
    "dateTimeFormat": "D/M/YYYY HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  },
  "dateFormat": "YYYY-MM-DD",
  "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
  "weekFormat": "YYYY-wo",
  "monthFormat": "YYYY-MM"
} 
