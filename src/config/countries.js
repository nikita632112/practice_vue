export const COUNTRIES = {
  '0': { id: '0', name: 'Все', filter: () => true },
  '1': { id: '1', name: 'Россия', filter: p => p.country === 'Россия' },
  '2': { id: '2', name: 'Франция', filter: p => p.country === 'Франция' },
  '3': { id: '3', name: 'Тайланд', filter: p => p.country === 'Тайланд' }
}

export const COUNTRIES_LIST = Object.values(COUNTRIES)