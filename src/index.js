import {Excel} from '@/components/excel/Excel'
import './scss/index.scss'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

console.log('Excel', excel)
