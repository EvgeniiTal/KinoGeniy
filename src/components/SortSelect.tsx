import { useDispatch } from 'react-redux'

interface Props {
  fetch( opts: any ): void
  typeNumber: number
}

export function SortSelect (props: Props): JSX.Element {
  const dispatch = useDispatch()

  function handleChange(event: any): void {
    event.preventDefault()
    let sortType: number
    let sortField: string
    switch (event.target.value) {
      case 'rating.kp desc':{
        sortType = -1
        sortField = 'rating.kp'
        break
      }
      case 'rating.kp asc':{
        sortType = 1
        sortField = 'rating.kp'
        break
      }
      case 'year desc':{
        sortType = -1
        sortField = 'year'
        break
      }
      case 'year asc':{
        sortType = 1
        sortField = 'year'
        break
      }
      case 'name asc':{
        sortType = 1
        sortField = 'name'
        break
      }
      case 'name desc':{
        sortType = -1
        sortField = 'name'
        break
      }
      default :{
        sortType = 1
        sortField = 'name'
      }
    }

    dispatch(props.fetch({typeNumber: props.typeNumber, page: 1, sortField: sortField, sortType: sortType}) as any)
  }



  return (
    <select className="form-select" aria-label="Toggle Order" onChange={handleChange}>
      <option defaultValue="default">Сортировать по ... </option>
      <option value="rating.kp desc">По рейтингу по убыванию</option>
      <option value="rating.kp asc">По рейтингу по возрастанию</option>
      <option value="year desc">По году по убыванию</option>
      <option value="year asc">По году по возрастанию</option>
      <option value="name asc">По алфавиту</option>
      <option value="name desc">По алфавиту в обратном порядке</option>
    </select>
  )
}
